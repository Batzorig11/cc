"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="w-full h-fit p-3 bg-accent font-bold fixed top-0  z-500 flex justify-between items-center">
      <div>
        <Button size="icon" onClick={() => router.back()} className="">
          <ChevronLeft />
        </Button>
      </div>
      <div className="w-3/4 justify-around flex ">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/account">Account</Link>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
