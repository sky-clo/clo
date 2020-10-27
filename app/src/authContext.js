import { createContext } from "react";

// Basic auth object to show what an authentication object used in AuthContext will look like
export const defaultAuthObject = {
  firstName: null,
  lastName: null,
  email: null,
  houseNo: null,
  postcode: null,
  jwt: null,
};

// Create React-Context for storing user/auth data client-side
export const AuthContext = createContext(null);

// Switch function that listens for a passed action type, and acts accordingly
export function authReducer(state, action) {
  switch (action.type) {
    case "update":
      // To update a user we ensure an additional auth payload object has been provided
      localStorage.setItem(
        "auth",
        JSON.stringify(action.payload ?? defaultAuthObject)
      );
      // Return the new state, or an empty object in case of an error
      return { ...state, ...(action?.payload ?? {}) };
    case "reset":
      // Remove all auth local state, and return our defaultAuthObject
      localStorage.removeItem("auth");
      return defaultAuthObject;
    default:
      return;
  }
}

// Function that checks if localstorage exists, and
export function getInitialAuthState() {
  const auth = JSON.parse(localStorage.getItem("auth"));
  if (auth) {
    return auth;
  } else {
    return defaultAuthObject;
  }
}
