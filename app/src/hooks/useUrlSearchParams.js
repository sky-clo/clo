import { useLocation } from "react-router-dom";

export default function useUrlSearchParams() {
  const location = useLocation();

  // Remove leading '?' from search query params
  const search = location.search.slice(1);

  const searchParams = new URLSearchParams(search);
  const result = {};

  // Convert search params from an array to an object
  for (const [key, value] of searchParams) {
    result[key] = value;
  }

  return result;
}
