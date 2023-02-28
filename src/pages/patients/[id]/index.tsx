import ReportCard from "@/components/ReportCard";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { reports } from "../../../fakedata/PATIENT_FAKE_DATA";

const profile = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex items-center bg-white justify-between px-[29px] py-[18px] border-b border-primary-100">
        <Link href="/patients">
          <div className="flex items-center gap-3 text-[20px] font-bold text-primary-600">
            <BsChevronLeft /> Patient List
          </div>
        </Link>
        <div className="relative w-[172px] h-[63px]">
          <Image
            src={"/utils/image/logo.png"}
            alt="logo"
            fill
            className=" object-contain"
          />
        </div>
        <div>
          <button className="border border-primary-100 text-primary-600 w-[154px] h-[56px] rounded-full flex items-center justify-center gap-2 text-[17px] font-bold bg-primary-50">
            Edite Profile
          </button>
        </div>
      </div>
      <div className="bg-white px-[29px] grid grid-cols-2 pt-[89px] pb-[50px] drop-shadow-sm border-b border-primary-100">
        <div>
          <h1 className="text-[40px] font-bold text-primary-600">
            Jerry Howell
          </h1>
          <p className="text-base text-primary-600 mt-[12px]">
            {" "}
            <span className="font-bold">Age:</span> 91 years{" "}
            <span className="font-bold">Gender:</span> Female
          </p>
        </div>
        <div className="flex justify-end items-end">
          <button className="bg-primary-500 text-white w-[174px] h-[56px] rounded-full">
            New Assessment
          </button>
        </div>
      </div>
      <div className=" px-[29px] grid grid-cols-3 gap-x-[12px] gap-y-[36px] mt-[50px]">
        {reports.map((rp: any) => (
          <ReportCard
            date={rp.date}
            status={rp.status}
            key={rp.id}
            id={rp.id}
          />
        ))}
      </div>
    </div>
  );
};

export default profile;
