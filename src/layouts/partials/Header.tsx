"use client";

import { useEffect } from "react";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  useEffect(() => {
    // TODO: debounce?
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const header = document.getElementById("header");
      if (scrollY > 64) {
        // header height
        header?.classList.remove("bg-transparent");
        header?.classList.add("bg-black");
      } else {
        header?.classList.remove("bg-black");
        header?.classList.add("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      id="header"
      className="top-0 left-0 z-50 w-full py-5 text-white bg-transparent sticky transition-all duration-300"
    >
      <div className="container mx-auto flex">
        <nav className="flex gap-4 w-full">
          <h1 className="">
            <Link href="/">Home</Link>
          </h1>
          {/* <DropdownMenu>
            <DropdownMenuTrigger>Research</DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black text-white">
              <DropdownMenuItem>Overview</DropdownMenuItem>
              <DropdownMenuItem>Index</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>API</DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black text-white">
              <DropdownMenuItem>API</DropdownMenuItem>
              <DropdownMenuItem>Data Privacy</DropdownMenuItem>s
            </DropdownMenuContent>
          </DropdownMenu> */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Link href={"/practice"}>RUN</Link>
            </DropdownMenuTrigger>
            {/* <DropdownMenuContent className="bg-black text-white">
              <DropdownMenuItem>API</DropdownMenuItem>
              <DropdownMenuItem>Data Privacy</DropdownMenuItem>
            </DropdownMenuContent> */}
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Link href={"/careers"}>Careers</Link>
            </DropdownMenuTrigger>
          </DropdownMenu>
          {/* <div className="grow"></div>
          <h1>
            <Link href={"/about"}>About</Link>
          </h1> */}
        </nav>
      </div>
    </header>
  );
}
