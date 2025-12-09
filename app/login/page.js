"use client";

import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ChevronLeft, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/auth";
import { BookOpen, User, ArrowLeft } from "lucide-react";
export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const res = loginUser(email, password);

    if (!res.success) {
      alert(res.message);
      return;
    }

    router.push("/dashboard");
  };
  return (
    <div className="w-full h-screen flex">
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-full h-full hidden lg:flex gradient-hero items-center justify-center p-12 relative overflow-hidden">
          <div className="absolute w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-foreground" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              IELTS Mastery
            </h1>
            <p className="text-xl text-foreground/80 max-w-md">
              Practice with thousands of questions and achieve your target band
              score
            </p>
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { label: "Questions", value: "5000+" },
                { label: "Users", value: "10K+" },
                { label: "Success Rate", value: "95%" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex-col h-screen bg-card flex justify-center items-center">
        <div className="w-1/2 space-y-6 flex flex-col border rounded-md justify-center items-center p-10">
          <div className="w-full flex items-center">
            <Link href="/" className="flex items-center">
              <ChevronLeft className="mr-5" />
              Нүүр лүү буцах
            </Link>
          </div>
          <h1 className="w-full">
            <span className="font-bold text-3xl">Тавтай морилно уу</span>
            <p className="w-full">Бүртгэлээ хийгээд орно уу</p>
          </h1>
          <label className="w-full">
            Емайл
            <InputGroup>
              <InputGroupInput
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                type="email"
              />
              <InputGroupAddon>
                <Mail />
              </InputGroupAddon>
            </InputGroup>
          </label>
          <label className="w-full">
            Нүүц үг
            <InputGroup>
              <InputGroupInput
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                type="password"
              />
              <InputGroupAddon>
                <Lock />
              </InputGroupAddon>
            </InputGroup>
          </label>
          <Button onClick={handleLogin} className="w-full py-6 font-bold">
            Нэвтрэх
          </Button>
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
