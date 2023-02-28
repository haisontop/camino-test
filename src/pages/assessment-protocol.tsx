import React from "react";
import { AiFillClockCircle } from "react-icons/ai";

const assessmentprotocol = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-between pb-36 px-20">
      <div></div>
      <div>
        <h1 className="text-5xl font-semibold">Camino Gait Assessment Protocol Questionnaire</h1>
        <p className="text-xl my-7 text-gray-500 font-semibold">We would like to ask a few questions which help us assess your gait and stability. Please complete the two questionnaires below.</p>
        <div className="flex items-center gap-4">
            <button className="bg-primary-500 font-semibold text-white text-3xl py-3 px-5 rounded-md">Start</button>
            <span className="text-lg">press <span className="font-bold">Enter↵</span></span>
        </div>
        <p className="mt-3 flex items-center gap-2"><AiFillClockCircle />Takes X minutes</p>
      </div>
      <div className="text-center">
        <h2 className="text-[17px] font-bold mb-10">Link to Typeform</h2>
        <div className="underline text-[17px] font-bold w-3/4 mx-auto">
          <a href="https://admin.typeform.com/form/B7eSSt9l/create?block=d4fa6f15-bd7c-42e4-9852-4c06d884749b">
            https://admin.typeform.com/form/B7eSSt9l/create?block=d4fa6f15-bd7c-42e4-9852-4c06d884749b
          </a>
        </div>
      </div>
    </div>
  );
};

export default assessmentprotocol;
