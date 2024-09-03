"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const Login = () => {
  const router = useRouter();

  return (
    <div className="w-full h-full">
      <div
        className="w-full flex min-h-screen rounded-md opacity-80 bg-gradient-to-r opacity-85 from-[#008080] via-black to-[#001A1A] relative"
        style={{
          backgroundImage: 'url("/assets/images/bgconical.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* First half */}
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="bg-gradient-to-b w-full h-full from-[#008080] to-black p-10 font-orbitron">
            <Image
              src={"/assets/images/arrow-down-icon.svg"}
              width={50}
              height={50}
              alt="icon"
              onClick={() => router.push("/")}
              className="hover:cursor-pointer"
            />
            <Image
              src={"/assets/images/people.svg"}
              width={500}
              height={500}
              alt="people_icon"
            />
            <h1 className="text-3xl">
              Welcome <span className="bg-gradient-to-r from-[#008080] to-[#69F5F5] bg-clip-text text-transparent">Back!</span> Securely Log In to Your <span className="bg-gradient-to-r from-[#008080] to-[#69F5F5] bg-clip-text text-transparent">Account</span>
            </h1>
            <p className="text-sm pt-6">
              Access your account and enjoy seamless shopping with secure blockchain payments.
            </p>
          </div>
        </div>

        {/* Second half */}
        <div className="w-1/2 flex p-20 justify-center items-center">
          <div className="border-2 border-[#008080] p-5 w-full h-full rounded-xl flex flex-col font-orbitron gap-2 items-center">
            <Image
              src={"/assets/images/chainStore.svg"}
              width={300}
              height={300}
              alt="people_icon"
            />
            <h1 className="text-3xl">Log In</h1>
            <p className="font-medium font-poppins">Please login to continue to your account.</p>
            <div className="items-center justify-center pt-10">
                <button className="w-full bg-white rounded-2xl text-black font-poppins p-4 font-semibold self-center hover:opacity-90">Connect wallet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
