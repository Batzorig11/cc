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
      <div className="w-full h-fit justify-end items-end flex">
        <ModeToggle />
      </div>
      <main className="w-full h-full flex justify-center flex-col items-center">
        <div className="text-6xl Gregorian">
          Choose Your Test and Start Learning
        </div>
        <div className="flex gap-10 p-10 justify-around">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="flex gap-5 text-3xl justify-between items-center">
                IELTS
                <BookA />
              </CardTitle>
              <CardDescription>Prepare for IELTS</CardDescription>
              <CardAction></CardAction>
            </CardHeader>
            <CardContent>
              <p>
                Practice reading, listening, speaking, and writing with
                real-style tasks.
              </p>
            </CardContent>
            <CardFooter>
              <Button>
                <Link href="/ielts">Start Practing</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="flex gap-5 text-3xl justify-between items-center">
                TOEFL
                <Earth />
              </CardTitle>
              <CardDescription>Prepare for TOEFL</CardDescription>
              <CardAction></CardAction>
            </CardHeader>
            <CardContent>
              <p>Practice with TOEFL-style questions and full mock exams.</p>
            </CardContent>
            <CardFooter>
              <Button>
                <Link href="/toefl">Start Practing</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="flex gap-5 text-3xl justify-between items-center">
                ЭЕШ
                <GraduationCap />
              </CardTitle>
              <CardDescription>Prepare for ЭЕШ</CardDescription>
              <CardAction></CardAction>
            </CardHeader>
            <CardContent>
              <p>Improve your exam skills with structured practice tests.</p>
            </CardContent>
            <CardFooter>
              <Button>
                <Link href="/eec">Start Practing</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
