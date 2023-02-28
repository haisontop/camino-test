import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="relative overflow-hidden mx-auto bg-white pb-6">
      <div className="absolute top-0 w-full sm:h-[750px] lg:h-96">
        <Image src="/utils/image/clippath.png" alt="image" fill />
      </div>
      <div className="relative flex flex-col items-center w-full h-full z-50  mt-[115px]">
        <div className="relative w-[384px] h-[142px]">
          <Image
            src={"/utils/image/logo.png"}
            alt="logo"
            fill
            className=" object-contain"
          />
        </div>
        <h3 className="text-xl font-bold">Movement is Magic</h3>
        <div className="relative w-[389px] h-[378px] mt-[81px]">
          <Image
            src={"/utils/image/loginimage.png"}
            alt="logo"
            fill
            className=" object-contain"
          />
        </div>
        <div className="mt-[30px]">
          <button className="w-[400px] h-[125px] text-3xl bg-primary-500 text-white font-bold rounded-full">
            Sign Up
          </button>
          <br />
          <Link href="/patients">
            <button className="w-[400px] h-[125px] text-3xl bg-primary-50 border border-primary-100 text-primary-500 font-bold rounded-full mt-[23px]">
              Log in
            </button>
          </Link>
        </div>
        <div className="text-center w-[400px] text-base mt-[60px]">
          By signing up you agree to our{" "}
          <span className="font-bold">Terms of Use</span> and{" "}
          <span className="font-bold">Privacy Policy.</span>
        </div>
      </div>
    </div>
  );
}
