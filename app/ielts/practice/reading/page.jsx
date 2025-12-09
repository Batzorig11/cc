"use client";

import { useEffect, useState } from "react";
import { getAllTests } from "./data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CircleCheck, CircleXIcon } from "lucide-react";

export default function Reading() {
  const [tests, setTests] = useState([]);
  const [user, setUser] = useState(null);
  const [iscore, setIscore] = useState(0);
  const [icomplete, setIcomplete] = useState(false);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("loggedInUser"));

    setUser(savedUser);
    setIscore(savedUser?.iscore || 0);
    setIcomplete(savedUser?.icomplete || false);
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllTests();
      setTests(data);
    }
    fetchData();
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col p-4 pt-20">
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
                    className={`font-bold  flex justify-start items-center my-2 ${
                      icomplete ? `text-green-500` : `text-blue-500`
                    }`}
                  >
                    {icomplete ? "Дууссан" : "Дуусаагүй"}{" "}
                    {icomplete && <CircleCheck className="ml-2" />}
                    {!icomplete && <CircleXIcon className="ml-2" />}
                  </p>
                  <p className="my-2">
                    Хугацаа :{" "}
                    <span className="font-bold">{test.duration}мин</span>
                  </p>
                  <div>
                    Оноо :{" "}
                    <span className="font-bold">
                      {iscore}/{test.totalQuestions} (
                      {(iscore / test.totalQuestions) * 100}%)
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>
                    <Link href={`reading/test/${test.id}`}>Эхлэх</Link>
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
