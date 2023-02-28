import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const PatientListNavabar = () => {
  const router = useRouter()
  return (
    <div className="flex justify-between px-[29px] py-[18px] border-b border-primary-100">
      <div className=" w-48"></div>
      <div className="relative w-[172px] h-[63px]">
        <Image
          src={"/utils/image/logo.png"}
          alt="logo"
          fill
          className=" object-contain"
        />
      </div>
      <div>
         <button onClick={()=>router.push("/addpatient")} className="bg-primary-500 text-white w-[174px] h-[56px] rounded-full">Add New Patient</button>
      </div>
    </div>
  );
};

export default PatientListNavabar;
