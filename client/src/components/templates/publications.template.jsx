import React from "react";
import Publication from "../organisms/publication";

function PublicationsTemplate() {
  return (
    <div className="w-full flex justify-center">
      {/* historias de instagram */}
      <header></header>
      {/* contenido media */}
      <div className="flex flex-col gap-8 mb-4 ">
        <Publication></Publication>
        <Publication></Publication>
        <Publication></Publication>
      </div>
    </div>
  );
}

export default PublicationsTemplate;
