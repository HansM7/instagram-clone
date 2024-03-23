import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../components/pages/login.page";
import App from "../App";
import SignupPage from "../components/pages/signup.page";
import HomePage from "../components/pages/home.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);
