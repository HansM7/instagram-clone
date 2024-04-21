import React, { useRef, useState } from "react";

function Publication() {
  const [isLike, setIsLike] = useState(false);

  const inputRef = useRef(null);

  return (
    <section className="flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <img
            className="rounded-full"
            width={45}
            height={35}
            src="http://localhost:3333/api/publications/image/bd074f28-8e65-4639-815b-20ec53f98ec4"
            alt=""
          />
          <div className="flex flex-row ">
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <span className="font-semibold">Michifurioso</span>
                <span className="text-sm opacity-80">3hr</span>
              </div>
              <span className="text-sm">Original audio</span>
            </div>
          </div>
        </div>
        <span role="button">
          <img
            width={30}
            src="https://cdn-icons-png.flaticon.com/128/3018/3018442.png"
            alt=""
          />
        </span>
      </div>
      <div className="sm:w-[20rem] w-[100%]">
        <img
          className="w-full rounded-md"
          src="https://i.pinimg.com/736x/e6/48/d7/e648d751b7517a9b860c29106d31ef14.jpg"
          alt=""
        />

        {/* icon options */}
        <div className="flex justify-between pt-2">
          <div className="flex items-center gap-2 ">
            <span
              className=" text-3xl"
              role="button"
              onClick={() => setIsLike(!isLike)}
            >
              {isLike ? (
                <img
                  width={30}
                  src="https://img.icons8.com/?size=48&id=19411&format=png"
                  alt=""
                />
              ) : (
                <img
                  width={30}
                  src="https://img.icons8.com/?size=50&id=581&format=png"
                  alt=""
                />
              )}
            </span>
            <span
              role="button"
              onClick={() => {
                inputRef.current.focus();
              }}
            >
              <img
                width={25}
                src="https://img.icons8.com/?size=50&id=143&format=png"
                alt=""
              />
            </span>
            <span>
              <img
                width={30}
                src="https://img.icons8.com/?size=50&id=2837&format=png"
                alt=""
              />
            </span>
          </div>
          <span>
            <img
              width={30}
              src="https://img.icons8.com/?size=24&id=82461&format=png"
              alt=""
            />
          </span>
        </div>

        {/* likes */}
        <div>
          <p className="font-semibold text-sm">
            Like by Hans and other 100000 perons
          </p>
          <p className="font-semibold text-sm">
            losfansons ¿Quién la ganará? 😮 #LosSimpson #LosSimpsons
          </p>
          <span
            role="button"
            className="my-2 text-slate-500 text-sm font-semibold"
          >
            Vew all comments...
          </span>
          <input
            ref={inputRef}
            className=" border-b border-slate-500 outline-none w-full p-1"
            type="text"
            name=""
            id=""
          />
        </div>
      </div>
    </section>
  );
}

export default Publication;
