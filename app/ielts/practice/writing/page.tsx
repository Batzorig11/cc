"use client";

import { useEffect, useState } from "react";
import { getAllTests } from "./data";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CircleCheck, CircleCheckIcon, CircleXIcon } from "lucide-react";

export default function Reading() {
  const [tests, setTests] = useState<any[]>([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getAllTests();
      setTests(data);
    }
    fetchData();
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col p-4">
      <div className="Gregorian text-2xl m-5">You can do this</div>
      {tests.length > 0 ? (
        <div className="w-full h-full gap-10 grid grid-cols-4">
          {tests.map((test, index) => (
            <div
              className="w-full h-fit flex justify-between flex-col p-2"
              key={index}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="w-full tracking-wide">
                    {test.title}
                  </CardTitle>
                  <CardDescription>
                    Асуултын тоо {test.totalQuestions}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p
                    className={`font-bold  flex justify-start items-center my-2 ${test.complete ? `text-green-500` : `text-blue-500`
                      }`}
                  >
                    {test.complete ? "Дууссан" : "Дуусаагүй"}{" "}
                    {test.complete && <CircleCheck className="ml-2" />}
                    {!test.complete && <CircleXIcon className="ml-2" />}
                  </p>
                  <p className="my-2">
                    Хугацаа :{" "}
                    <span className="font-bold">{test.duration}мин</span>
                  </p>
                  <div>
                    Оноо :{" "}
                    <span className="font-bold">
                      {test.score ? (test.score / test.totalQuestions) : "0"} (
                      {test.score ? (test.score / test.totalQuestions) * 100 : "0"}%)
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>
                    <Link href={`writing/test/${test.id}`}>Эхлэх</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center text-2xl">
          Loading...
        </div>
      )}
    </div>
  );
}
