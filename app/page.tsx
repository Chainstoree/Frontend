"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ConnectButton, useActiveAccount, lightTheme } from "thirdweb/react";
import { client, chain } from "./utils/constant";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import BestProduct from "./components/BestProduct";
import Advertisement from "./components/Advertisement";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  const router = useRouter();
  const account: any = useActiveAccount?.();

  return (
    <section className="w-full relative">
      {account && (
        <div className="fixed top-[5rem]  right-6 h-fit w-fit">
          <ConnectButton
            client={client}
            chain={chain}
            theme={lightTheme({
              colors: {
                modalBg: "#008080",
                borderColor: "#008080",
                accentText: "#000000",
                primaryButtonBg: "#008080",
                secondaryText: "#000000",
                primaryText: "#000000",
                primaryButtonText: "#000000",
                secondaryIconColor: "#000000",
              },
            })}
            connectButton={{
              label: "Generate Wallet",
            }}
            connectModal={{
              title: "Chainstore",
              showThirdwebBranding: false,
            }}
          />
        </div>
      )}
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
                className="absolute top-[8rem] right-[35rem]"
              />
              <h1 className="bg-gradient-to-r from-[#008080] to-[#69F5F5] bg-clip-text text-transparent absolute top-[8rem] right-[11rem] text-5xl">
                Technology
              </h1>
            </div>
            <div className="flex gap-4 absolute top-[24rem] left-[15rem]">
              <button className="text-white py-2 px-[1.75rem] rounded-[1.25rem] bg-black text-sm  border-2 border-[#008080] font-medium font-orbitron">
                Learn More
              </button>
              <button
                className="text-white py-2 px-[1.75rem] rounded-[1.25rem] text-sm bg-[#008080] font-medium font-orbitron"
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
