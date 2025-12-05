"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function Account() {
  const [users, setUsers] = useState(false);

  return (
    <div className="w-full h-screen flex">
      <div className="w-full h-screen flex justify-center items-center"></div>
      <div className="w-full h-screen bg-card flex justify-center items-center">
        <div className="w-1/2 space-y-6 flex flex-col border rounded-md justify-center items-center p-10">
          <h1 className="w-full">
            <h1 className="font-bold text-3xl">Тавтай морилно уу</h1>
            <p className="w-full">Бүртгэлээ хийгээд орно уу</p>
          </h1>
          <label className="w-full">
            Емайл
            <Input className="mt-2" placeholder="example@gmail.com" />
          </label>
          <label className="w-full">
            Нүүц үг
            <Input className="mt-2" placeholder="***********" />
          </label>
          <Button className="w-full py-6 font-bold">Нэвтрэх</Button>
          <p className="mt-10">
            Бүртгэлгүй байхгүй юу?{" "}
            <Link className="font-bold" href="/sign-up">
              Үүсгэх
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
