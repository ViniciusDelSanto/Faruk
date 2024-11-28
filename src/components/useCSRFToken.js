import { useState, useEffect } from "react";

function useCSRFToken() {
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    async function fetchCSRFToken() {
      try {
        const response = await fetch("http://localhost:8000/csrf/", {
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error(`Erro ao obter token CSRF: ${response.status}`);
        }
        const data = await response.json();
        setCsrfToken(data.csrfToken);
      } catch (error) {
        console.error("Erro ao obter CSRF token:", error);
      }
    }
    fetchCSRFToken();
  }, []);

  return csrfToken;
}

export default useCSRFToken;
