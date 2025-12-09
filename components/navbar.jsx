"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { BookOpen, ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const router = useRouter();
  return (
    <div className="w-full h-fit p-2 bg-accent font-bold fixed top-0  z-500 flex justify-between items-center px-40">
      <div className="flex justify-center items-center gap-2">
        <BookOpen className="p-2 w-fit h-fit border rounded-md bg-blue-500/10" />
        <Link href="/">Test Pro</Link>
      </div>
      <div className="w-3/4 justify-end flex ">
        {user ? (
          <Link href="/dashboard">Dashboard</Link>
        ) : (
          <Link href="/login">Log In</Link>
        )}
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
