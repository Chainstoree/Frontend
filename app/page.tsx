"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import BestProduct from "./components/BestProduct";
import Advertisement from "./components/Advertisement";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  const router = useRouter();

  return (
    <section>
      <Navbar />
      <section className="w-full h-full pt-24">
        <div className="p-4">
        <div
        className="w-full flex h-[430px] rounded-md opacity-80 bg-gradient-to-r opacity-85 from-[#008080] via-black to-[#001A1A] relative"
        style={{
          backgroundImage: 'url("/assets/images/bgconical.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
            <h1 className="text-5xl absolute right-[14vw] top-[9vh]">
              Shop{" "}
              <span className="bg-gradient-to-r from-[#008080] to-[#69F5F5] bg-clip-text text-transparent">
                Smarter
              </span>{" "}
              with{" "}
              <span className="bg-gradient-to-r from-[#008080] to-[#69F5F5] bg-clip-text text-transparent">
                Web3
              </span>
            </h1>
            <div className="flex gap-2">
              <Image
                src="/assets/images/Frame560.svg"
                width={600}
                height={600}
                alt="image_1"
                className="absolute top-[20vh] right-[35vw]"
              />
              <h1 className="bg-gradient-to-r from-[#008080] to-[#69F5F5] bg-clip-text text-transparent absolute top-[20vh] right-[14vw] text-5xl">
                Technology
              </h1>
            </div>
            <div className="flex gap-4 absolute top-[66vh] left-[15vw]">
              <button className="text-white p-2 bg-black text-sm rounded-3xl border-2 border-[#008080] font-medium font-orbitron">
                Learn More
              </button>
              <button
                className="text-white p-2 text-sm rounded-3xl bg-[#008080] font-medium font-orbitron"
                onClick={() => router.push("/market-place")}
              >
                Shop now
              </button>
            </div>
          </div>
        </div>
        <Categories />
        <BestProduct />
        <Advertisement />
        <Services />
        <Footer />
      </section>
    </section>
  );
}
