import React from "react";
import { BiMessage, BiPhoneCall } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";

function CardContact() {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4 py-20">
      <div className="1 text-center flex-colo my-5 mx-2 border-dryGray border-2 rounded px-4 py-10 bg-[#0B0F29]">
        <BiMessage className="bg-[#232537] text-submain text-5xl p-[10px] mb-4 rounded-full" />
        <h1 className="text-2xl font-bold mb-4">Email Us</h1>
        <p className="mb-4">
          <a href="" className="text-purple-500">info@zpunet.com</a>
          <span className="ml-2">
            
            Interactively grow backend ideas for cross-platform models.
          </span>
        </p>
      </div>
      <div className="1 text-center flex-colo my-5 mx-2 border-dryGray border-2 rounded px-4 py-4 bg-[#0B0F29]">
        <BiPhoneCall className="bg-[#232537] text-submain text-5xl p-[10px] mb-4 rounded-full" />
        <h1 className="text-2xl font-bold mb-4">Call Us</h1>
        <p className="mb-4">
          <a href="" className="text-purple-500">+255 789 456 123</a>

          <span className="ml-2">
           
            Distinctively exploit optimal alignments for intuitive bandwidth.
          </span>
        </p>
      </div>
      <div className="1 text-center flex-colo my-5 mx-2 border-dryGray border-2 rounded px-4 py-4 bg-[#0B0F29]">
        <CiLocationOn className="bg-[#232537] text-submain text-5xl p-[10px] mb-4 rounded-full" />
        <h1 className="text-2xl font-bold mb-4">Location</h1>
        <p className="mb-4">
          <span className="ml-2"> Dar es salaam, Tanzania. 345 Kigamboni, Street No. 12,</span>
        </p>
      </div>
    </div>
  );
}

export default CardContact;
