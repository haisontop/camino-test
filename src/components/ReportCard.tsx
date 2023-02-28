import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function ReportCard({ date, status, id }: any) {
  const router = useRouter();

  return (
    <div className="relative h-80">
      <div className="p-[25px] top-0 w-full relative z-50 rounded-2xl border border-primary-100 bg-white h-full flex flex-col justify-between drop-shadow-sm">
        <div>
          <p
            className={`text-base ${
              status === "New" ? "text-green-600" : "text-primary-500"
            }`}
          >
            {status}
          </p>
          <h1 className="text-[24px] text-primary-600 font-bold mt-3">
            {date}
          </h1>
        </div>
        <div>
          <Link href={`/patients/${router.query.id}/assessment/${id}`}>
            <button className="border border-primary-100 text-primary-600 w-full py-3 rounded-full flex items-center justify-center gap-2 text-[17px] font-bold bg-primary-50">
              View Report
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-white border border-primary-100 h-full absolute -bottom-2 w-11/12 rounded-2xl left-3"></div>
    </div>
  );
}
