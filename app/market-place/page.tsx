"use client"
import ExploreProduct from "../components/Explore";
import Services from "../components/Services";
import Navbar from "../components/Navbar";
import { ConnectButton, useActiveAccount, lightTheme } from "thirdweb/react";
import { client, chain } from "../utils/constant";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./loading";

const marketPlace = () => {
     const [isLoading, setIsLoading] = useState(false);
     const router = useRouter();
     const pathname = usePathname();
     const account: any = useActiveAccount?.();

           useEffect(() => {
             if (pathname.startsWith("/market-place") && !account) {
               setIsLoading(true);
               router.push("/");
             }
           }, [account, router, pathname]);

      if (isLoading) {
        return <Loading />;
      }

  return (
    <section className="relative w-full">
      <Navbar />
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
      <div className="w-full h-full pt-28 p-5">
        <ExploreProduct />
        <Services />
      </div>
    </section>
  );
}

export default marketPlace