import React from "react";

function InfoTemplate() {
  return (
    <aside className=" w-[18rem]">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <img
            className="rounded-full "
            width={40}
            src="https://www.publimetro.cl/resizer/mJVQolfgbtGIvoXnli4Ttxx95e8=/1440x1080/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/MODCI5L57RFGVF7ZPHSJP42KRY.jpg"
            alt=""
          />
          <div className="flex flex-col">
            <h6 className="font-semibold text-sm">Hans</h6>
            <span className=" text-sm">Hans</span>
          </div>
        </div>

        <span>switch</span>
      </div>
    </aside>
  );
}

export default InfoTemplate;
