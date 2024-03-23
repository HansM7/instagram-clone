import React from "react";
import { useNavigate } from "react-router-dom";

function SidebarTemplate() {
  const navigation = useNavigate();

  function handleLogout() {
    window.localStorage.clear();
    navigation("/login");
  }

  const routes = [
    {
      path: "/",
      name: "Home",
      icon: "https://cdn-icons-png.flaticon.com/128/1946/1946488.png",
    },
    {
      path: "/profile",
      name: "Profile",
      icon: "https://cdn-icons-png.flaticon.com/128/1946/1946488.png",
    },
    {
      path: "/create",
      name: "Create",
      icon: "https://cdn-icons-png.flaticon.com/128/1946/1946488.png",
    },
  ];

  return (
    <nav className="flex flex-col pt-6 px-4 border border-r-2 fixed h-full pr-8">
      <header>
        <h3 className="text-3xl">Instagram</h3>
      </header>

      {/* items */}
      <div className="mt-8 flex flex-col gap-4">
        {routes.map((e, i) => (
          <div key={i}>
            <a className="flex flex-row gap-2" href={e.path}>
              <img width={25} height={20} src={e.icon} alt="" />
              <span>{e.name}</span>
            </a>
          </div>
        ))}

        <span
          className="flex flex-row gap-2"
          role="button"
          onClick={handleLogout}
        >
          <img
            width={25}
            height={20}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmhl0XKMtfY9EfLHcnbEGdXUtY-bsIYU8gTJDPOt8Ag&s"
            alt=""
          />
          <span>Logout</span>
        </span>
      </div>

      {/* end items */}
    </nav>
  );
}

export default SidebarTemplate;
