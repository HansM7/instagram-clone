import axios from "axios";
import { useState } from "react";

export function AuthSession() {
  const [isLogged, setIsLogged] = useState(true);

  async function validateSession() {
    const session = window.localStorage.getItem("auth");
    if (!session) {
      setIsLogged(!isLogged);
    }

    const headers = {
      Authorization: session,
    };

    try {
      await axios.get("http://localhost:3333/api/auth/me", { headers });
    } catch (error) {
      setIsLogged(!isLogged);
      console.log(error);
    }
  }

  console.log("islogged", isLogged);

  return { isLogged, validateSession };
}
