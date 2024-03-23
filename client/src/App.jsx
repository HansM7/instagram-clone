import { useEffect } from "react";
import HomePage from "./components/pages/home.page";
import LoginPage from "./components/pages/login.page";
import { AuthSession } from "./hooks/auth.hook";

function App() {
  const { isLogged, validateSession } = AuthSession();

  useEffect(() => {
    validateSession();
  }, []);

  if (isLogged) return <HomePage></HomePage>;
  else return <LoginPage></LoginPage>;
}

export default App;
