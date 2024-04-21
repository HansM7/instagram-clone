import axios from "axios";
import { Button, Modal, Typography } from "keep-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SidebarTemplate() {
  // todo define states
  const navigation = useNavigate();

  const [data, setData] = useState({
    descripton: "",
    image: "",
  });

  const [isOpen, setIsOpen] = useState(false);

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
  ];

  // todo define functions
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  function handleLogout() {
    window.localStorage.clear();
    navigation("/login");
  }

  async function handleSubmit() {
    const session = window.localStorage.getItem("auth");
    if (!session) {
      setIsLogged(!isLogged);
    }

    const headers = {
      Authorization: session,
    };

    const formData = new FormData();
    formData.append("description", data.descripton);
    formData.append("image", data.image);

    console.log(formData);

    await axios.post("http://localhost:3333/api/publications", formData, {
      headers,
    });

    closeModal();
  }

  return (
    <nav className="flex flex-col pt-6 px-4 border border-r-2 fixed h-full pr-8">
      <header>
        <h3 className="text-3xl">Instagram</h3>
      </header>

      {/* items */}
      <div className="mt-8 flex flex-col gap-4">
        {routes.map((e, i) => (
          <div key={i} role="button">
            <span className="flex flex-row gap-2" href={e.path}>
              <img width={25} height={20} src={e.icon} alt="" />
              <span>{e.name}</span>
            </span>
          </div>
        ))}

        <span className="flex flex-row gap-2" role="button" onClick={openModal}>
          <img
            width={25}
            height={20}
            src="https://static.thenounproject.com/png/2970158-200.png"
            alt=""
          />
          <span>Create</span>
        </span>
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

      <Modal isOpen={isOpen} onClose={closeModal}>
        <Modal.Body className="space-y-3">
          <Modal.Content>
            <div className="flex flex-col gap-4">
              <input
                className="p-2 outline-none border rounded-lg"
                type="text"
                name=""
                id=""
                onChange={(e) =>
                  setData({ ...data, descripton: e.target.value })
                }
              />
              <input
                onChange={(e) => setData({ ...data, image: e.target.files[0] })}
                type="file"
                accept="image/mp4"
                name=""
                id=""
              />
            </div>
          </Modal.Content>
          <Modal.Footer>
            <Button
              onClick={closeModal}
              size="sm"
              variant="outline"
              color="secondary"
            >
              Cancel
            </Button>
            <Button onClick={handleSubmit} size="sm" color="primary">
              Crear publicación
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </nav>
  );
}

export default SidebarTemplate;
