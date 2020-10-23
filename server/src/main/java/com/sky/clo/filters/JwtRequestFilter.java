package com.sky.clo.filters;

import com.sky.clo.services.MyUserDetailsService;
import com.sky.clo.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// Request Filter executed once before each request, used in SecurityConfigurer
@Component
public class JwtRequestFilter extends OncePerRequestFilter {
    @Autowired
    private MyUserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String username = null, jwt = null;

        // Grab Authorization header from incoming request headers
        final String authHeader = request.getHeader("Authorization");

        // If an Authorization value exists, remove the first 7 chars ('Bearer') to get our JWT token
        if(authHeader != null && authHeader.startsWith("Bearer")) {
            // Apply JWTUtil helper method to extract a username from our encrypted JWT
            jwt = authHeader.substring(7);
            username = jwtUtil.extractUsername(jwt);
        }

        // If a username exists, and the user currently has no authentication applied to them
        if(username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            // Retrieve our user from the MySQL DB we have
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);

            // Set security details onto our global SecurityContext object
            UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
            usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);

            // Add extracted user email to our request details
            request.setAttribute("email", username);
        }

        // Continue to the next filter in our filter chain
        filterChain.doFilter(request, response);
    }
}
