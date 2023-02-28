import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsArrowDown, BsChevronLeft } from "react-icons/bs";

const AssesmentReport = () => {
  const router = useRouter();

  return (
    <div className="pb-[125px]">
      <div className="bg-primary-600">
        <div className="px-[29px] py-[30px] flex items-center justify-between bg-primary-600">
          <Link href={`/patients/${router.query.id}`}>
            <div className="flex items-center gap-3 text-[20px] font-bold text-white">
              <BsChevronLeft /> Profile
            </div>
          </Link>
          <div>
            <button className="bg-[#FA7961] px-[20px] py-3 text-xl rounded-md text-white">
              Report: 12 January 2023
            </button>
          </div>
        </div>
        <div className="bg-primary-600 px-[29px] grid grid-cols-3 pt-[89px] pb-[50px]">
          <div>
            <h1 className="text-[40px] font-bold text-white">Jerry Howell</h1>
            <p className="text-base text-white mt-[12px]">
              {" "}
              <span className="font-bold">Age:</span> 91 years{" "}
              <span className="font-bold">Gender:</span> Female
            </p>
          </div>
          <div></div>
          <div className="text-white text-base">
            <h1>Session Details</h1>
            <div className="font-normal mt-[11px]">
              <span className="font-bold">Date: </span>9th February 2023
            </div>
            <div className="font-normal mt-1">
              <span className="font-bold">Time: </span>920 MST
            </div>
            <div className="font-normal mt-1">
              <span className="font-bold">Venue: </span>Health Care Clinic
            </div>
          </div>
        </div>
      </div>
      <div className="px-[29px] mt-[40px] grid grid-cols-2 gap-x-5 gap-y-10">
        {/* Tinetti Gait */}
        <div className="relative h-[400px] text-primary-600">
          <div className="p-[25px] top-0 w-full relative z-50 rounded-2xl border border-primary-100 bg-white h-full flex flex-col justify-between drop-shadow-sm">
            <div className="flex justify-between text-[24px]">
              <h2 className="font-bold">Tinetti Gait</h2>
              <div className="w-[34px] h-[34px] rounded-full flex justify-center items-center bg-[#E4593F] text-white outline outline-8 outline-[#E8B1A780]">
                2
              </div>
            </div>
            <div className="flex justify-between  border-b border-primary-100 pb-[20px]">
              <div>
                <h1 className="text-[60px] font-bold flex items-end">
                  11/<span className="text-[40px]">12</span>
                  <BsArrowDown className="text-[30px] font-bold mb-3 text-[#E4593F]" />
                </h1>
                <p className="text-base">
                  Last session: <span className="font-bold">10/12</span>
                </p>
              </div>
              <div className="flex flex-col justify-end">
                <div className="w-[100px] relative h-[60px]">
                  <Image src="/utils/image/chart1.png" alt="char" fill />
                </div>
                <p className="text-base mt-4">Trend</p>
              </div>
            </div>
            <div>
              <button className="border border-primary-100 text-primary-600 px-10 mx-auto py-3 rounded-full flex items-center justify-center gap-2 text-[17px] font-bold bg-primary-50">
                View Report
              </button>
            </div>
          </div>
          <div className="bg-white border border-primary-100 h-full absolute -bottom-2 w-11/12 rounded-2xl left-3"></div>
        </div>
        {/* Straight Line Speed */}
        <div className="relative h-[400px] text-primary-600">
          <div className="p-[25px] top-0 w-full relative z-50 rounded-2xl border border-primary-100 bg-white h-full flex flex-col justify-between drop-shadow-sm">
            <div className="flex justify-between text-[24px]">
              <h2 className="font-bold">Straight Line Speed</h2>
              <div />
            </div>
            <div className="border-b border-primary-100 pb-[20px]">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-[60px] font-bold">
                    6.5<span className="text-[20px]">mph</span>
                    <BsArrowDown className="text-[30px] inline-block font-bold mt-3 text-[#E4593F]" />
                  </h1>
                </div>
                <div className="flex flex-col justify-end">
                  <div className="w-[100px] relative h-[60px]">
                    <Image src="/utils/image/chart2.png" alt="char" fill />
                  </div>
                </div>
              </div>
              <p className="text-base">
                You walk faster than <span className="font-bold">46%</span> of
                walking aid users
              </p>
            </div>
            <div>
              <button className="border border-primary-100 text-primary-600 px-10 mx-auto py-3 rounded-full flex items-center justify-center gap-2 text-[17px] font-bold bg-primary-50">
                View Report
              </button>
            </div>
          </div>
          <div className="bg-white border border-primary-100 h-full absolute -bottom-2 w-11/12 rounded-2xl left-3"></div>
        </div>
        {/* Tinetti Balance */}
        <div className="relative h-[400px] text-primary-600">
          <div className="p-[25px] top-0 w-full relative z-50 rounded-2xl border border-primary-100 bg-white h-full flex flex-col justify-between drop-shadow-sm">
            <div className="flex justify-between text-[24px]">
              <h2 className="font-bold">Tinetti Balance</h2>
              <div></div>
            </div>
            <div className="flex justify-between  border-b border-primary-100 pb-[20px]">
              <div>
                <h1 className="text-[60px] font-bold flex items-end">
                  12/<span className="text-[40px]">16</span>
                  <BsArrowDown className="text-[30px] font-bold mb-3 text-[#E4593F]" />
                </h1>
                <p className="text-base">
                  Last session: <span className="font-bold">11/16</span>
                </p>
              </div>
              <div className="flex flex-col justify-end">
                <div className="w-[100px] relative h-[60px]">
                  <Image src="/utils/image/chart1.png" alt="char" fill />
                </div>
                <p className="text-base mt-4">Trend</p>
              </div>
            </div>
            <div>
              <button className="border border-primary-100 text-primary-600 px-10 mx-auto py-3 rounded-full flex items-center justify-center gap-2 text-[17px] font-bold bg-primary-50">
                View Report
              </button>
            </div>
          </div>
          <div className="bg-white border border-primary-100 h-full absolute -bottom-2 w-11/12 rounded-2xl left-3"></div>
        </div>
        {/* Figure 8 */}
        <div className="relative h-[400px] text-primary-600">
          <div className="p-[25px] top-0 w-full relative z-50 rounded-2xl border border-primary-100 bg-white h-full flex flex-col justify-between drop-shadow-sm">
            <div className="flex justify-between text-[24px]">
              <h2 className="font-bold">Tinetti Balance</h2>
              <div></div>
            </div>
            <div className="flex justify-between  border-b border-primary-100 pb-[20px]">
              <div>
                <p className="text-base font-bold">Time to Completion</p>
                <h1 className="text-[60px] font-bold">
                  21<span className="text-[20px]">secs</span>
                  <BsArrowDown className="text-[30px] inline-block font-bold mt-3 text-green-500" />
                </h1>
                <p className="text-base">
                  Last session: <span className="font-bold">22 secs</span>
                </p>
              </div>
              <div>
                <p className="text-base font-bold">Number of Steps</p>
                <h1 className="text-[60px] font-bold">
                  18
                  <BsArrowDown className="text-[30px] inline-block font-bold mt-3 text-green-500" />
                </h1>
                <p className="text-base">
                  Last session: <span className="font-bold">19</span>
                </p>
              </div>
            </div>
            <div>
              <button className="border border-primary-100 text-primary-600 px-10 mx-auto py-3 rounded-full flex items-center justify-center gap-2 text-[17px] font-bold bg-primary-50">
                View Report
              </button>
            </div>
          </div>
          <div className="bg-white border border-primary-100 h-full absolute -bottom-2 w-11/12 rounded-2xl left-3"></div>
        </div>
      </div>
    </div>
  );
};

export default AssesmentReport;
