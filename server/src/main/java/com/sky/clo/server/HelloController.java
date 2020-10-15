package com.sky.clo.server;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class HelloController {
    @GetMapping("/hello")
    public ModelAndView hello(@RequestParam(value = "name", defaultValue = "World") String name) {
        return new ModelAndView("demo.html");
    }
}
