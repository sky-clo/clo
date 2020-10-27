import { useEffect, useState } from "react";
import config from "../config";

function generateUrlSearchParams(params) {
  if (!params) return "";

  const entries = Object.entries(params);
  const urlSearchParams = new URLSearchParams(entries);

  return "&" + urlSearchParams.toString();
}

export default function useApi(endpoint, options = {}) {
  const [status, setStatus] = useState();
  const [body, setBody] = useState();
  const [error, setError] = useState();

  const urlSearchParams = generateUrlSearchParams(options.urlSearchParams);
  const url = config.apiUrl + endpoint + urlSearchParams;

  useEffect(() => {
    fetch(url, {
      method: options.method || "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        setStatus(res.status);
        return res.json();
      })
      .then((json) => setBody(json))
      .catch((error) => setError(error));
  }, [url, options.method]);

  return { status, body, error };
}
