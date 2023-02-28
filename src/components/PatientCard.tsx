import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PatientCard({ img, name, id }: any) {
  return (
    <div className="flex justify-between items-center py-[22px] px-[25px] bg-white border border-primary-100 mt-[16px] rounded-lg">
      <div className="flex items-center gap-6 text-[24px]">
        <div className="relative w-[56px] h-[56px]">
          <Image src={img} alt="patient image" fill />
        </div>
        <div className="text-[24px] text-primary-600 font-bold">{name}</div>
      </div>
      <Link href={`/patients/${id}`}>
        <button className="border border-primary-100 text-primary-600 w-[174px] h-[56px] rounded-full flex items-center justify-center gap-2 text-[17px] font-bold bg-primary-50">
          Open Profile
        </button>
      </Link>
    </div>
  );
}
