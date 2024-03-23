import React, { useEffect } from "react";
import SidebarTemplate from "../templates/sidebar.template";
import PublicationsTemplate from "../templates/publications.template";
import InfoTemplate from "../templates/info.template";
import { AuthSession } from "../../hooks/auth.hook";

import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigation = useNavigate();

  const { isLogged, validateSession } = AuthSession();

  useEffect(() => {
    validateSession();
  }, []);

  if (!isLogged) {
    navigation("/login");
  } else {
    return (
      <div className="flex flex-row w-full">
        <SidebarTemplate></SidebarTemplate>
        <main className="flex w-full ml-[13rem] pt-8 justify-between">
          <PublicationsTemplate></PublicationsTemplate>
          <InfoTemplate></InfoTemplate>
        </main>
      </div>
    );
  }
}

export default HomePage;
