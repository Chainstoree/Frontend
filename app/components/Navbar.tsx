"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    const pathName = usePathname(); // Get current path using usePathname hook
    const [isActive, setIsActive] = useState(false); // State to track active link

    useEffect(() => {
        // Update isActive state when path changes
        setIsActive(pathName === "/" || pathName.includes("/market-place"));
      }, [pathName]);

  return (
    <section className="flex bg-black z-10 shadow-lg justify-between items-center fixed top-0 w-full p-4 px-10 font-orbitron">
        <div className="flex gap-1">
            <Image
                src={"/assets/images/ChainStore.svg"}
                width={200}
                height={200}
                className="p-1"
                alt="chain store logo"
            />
        </div>
        <div className="flex gap-4">
            <Link href={"/"} className={pathName === "/" ?"text-[#69F5F5] underline-offset-2 font-semibold underline": "text-white font-semibold"}>Home</Link>
            <Link href={"/market-place"} className={pathName === "/market-place" ?"text-[#69F5F5] font-semibold underline underline-offset-2 ": "text-white font-semibold"}>Marketplace</Link>
        </div>
        <div className="flex gap-4 items-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl text-[#00FFFF]"/>
            <button className="p-2 text-lg rounded-3xl text-white border-2 border-[#008080]" onClick={()=>router.push("/login")}>Login</button>
        </div>
    </section>
  )
}

export default Navbar;