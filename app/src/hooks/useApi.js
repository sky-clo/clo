import { useEffect, useState } from "react";
import config from "../config";

export default function useApi(url, method = "GET") {
  const [status, setStatus] = useState();
  const [body, setBody] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch(config.apiUrl + url, {
      method,
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
  }, [url, method]);

  return { status, body, error };
}
