import { Button } from "@/components/ui/button";
import { ModeToggle } from "./components/mode-toggle";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookA, Earth, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full p-2">
      <main className="w-full h-full flex flex-col justify-center  items-center">
        <div className="text-6xl flex flex-col justify-center px-10 font-bold w-1/2">
          <span>ТӨВЛӨР,</span>
          <span>ДАСГАЛАА АЖИЛ,</span>
          <span>ЗОРЬСОНДОО ХҮР</span>
        </div>
        <div className=" gap-10 p-10 w-full grid grid-cols-3 h-full">
          <Card className="w-full h-full relative">
            <CardHeader>
              <CardTitle className="flex gap-5 text-3xl justify-between items-center">
                IELTS
                <BookA />
              </CardTitle>
              <CardDescription>IELTS д бэлдэх</CardDescription>
              <CardAction></CardAction>
            </CardHeader>
            <CardContent>
              <p>
                Бодит хэв маягийн даалгавраар унших, сонсох, ярих, бичих
                чадвараа дадлагажуулаарай.
              </p>
            </CardContent>
            <CardFooter className="absolute bottom-5">
              <Button>
                <Link href="/ielts">Дасгал ажиллаж эхлэх</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="w-full h-full relative">
            <CardHeader>
              <CardTitle className="flex gap-5 text-3xl justify-between items-center">
                TOEFL
                <Earth />
              </CardTitle>
              <CardDescription>Prepare for TOEFL</CardDescription>
              <CardAction></CardAction>
            </CardHeader>
            <CardContent>
              <p>
                TOEFL-ийн хэв маягийн асуултууд болон бүрэн туршилтын
                шалгалтуудаар дадлага хий.
              </p>
            </CardContent>
            <CardFooter className="absolute bottom-5">
              <Button>
                <Link href="/toefl">Дасгал ажиллаж эхлэх</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="w-full h-full relative">
            <CardHeader>
              <CardTitle className="flex gap-5 text-3xl justify-between items-center">
                ЭЕШ
                <GraduationCap />
              </CardTitle>
              <CardDescription>Prepare for ЭЕШ</CardDescription>
              <CardAction></CardAction>
            </CardHeader>
            <CardContent className="mb-20">
              <p>
                Бүтэцтэй дадлагын тестүүдээр шалгалтын ур чадвараа
                сайжруулаарай.
              </p>
            </CardContent>
            <CardFooter className="absolute bottom-5">
              <Button>
                <Link href="/eysh">Дасгал ажиллаж эхлэх</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="w-full h-full relative">
            <CardHeader>
              <CardTitle className="flex gap-5 text-3xl justify-between items-center">
                SAT
                <BookA />
              </CardTitle>
              <CardDescription>Prepare for SAT</CardDescription>
              <CardAction></CardAction>
            </CardHeader>
            <CardContent className="mb-20">
              <p>
                Practice reading, listening, speaking, and writing with
                real-style tasks.
              </p>
            </CardContent>
            <CardFooter className="absolute bottom-5">
              <Button>
                Тун удахгүй...
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
