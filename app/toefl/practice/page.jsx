"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Calendar22 } from "@/components/calendar.js";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { updateLoggedInUser } from "@/lib/auth.js";

export default function TOEFLPractice() {
  const [user, setUser] = useState(null);
  const [daysRemaining, setDaysRemaining] = useState(0);

  const handleDateChange = (selectedDate, days) => {
    const updated = updateLoggedInUser({
      examDate: selectedDate ? selectedDate.toISOString() : null,
      daysRemaining: days,
    });

    setUser(updated);
    setDaysRemaining(days);
  };

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (savedUser) {
      setUser(savedUser);
      if (savedUser.examDate) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const diff = Math.ceil(
          (new Date(savedUser.examDate).getTime() - today.getTime()) /
            (1000 * 60 * 60 * 24)
        );

        setDaysRemaining(diff);
      }
    }
  }, []);

  return (
    <div className="w-full px-4 flex flex-col justify-center items-center pt-20">
      <div className=" text-xl flex justify-between w-3/4  ">
        <div className="flex items-center justify-center bg-card rounded-md border flex-col p-10">
          <div className="flex items-center justify-center">
            Шалгалт өгөх өдөр :
            <Calendar22
              value={user?.examDate ? new Date(user.examDate) : undefined}
              onDateChange={handleDateChange}
            />
          </div>
          <div>Үлдсэн хоног : {daysRemaining}</div>
        </div>
        <div className="flex items-center justify-center bg-card rounded-md border flex-col p-10">
          <div>Зорьсон оноо : 8</div>
          <div>Одоогийн дундаж : 2.5</div>
        </div>
      </div>
      <main className="grid grid-cols-4 gap-10 w-full p-10">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Унших (Reading)</CardTitle>
            <CardDescription>Дундаж оноо : 5/9</CardDescription>
            <CardAction>
              <Button>
                <Link href="practice/reading">Эхлэх</Link>
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p>Хийсэн дасгалын тоо : 12</p>
            <p>Нийт дагсалын тоо : 40</p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Сонсох (Listening)</CardTitle>
            <CardDescription>Дундаж оноо : 5/9</CardDescription>
            <CardAction>
              <Button>
                <Link href="practice/listening">Эхлэх</Link>
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p>Хийсэн дасгалын тоо : 10</p>
            <p>Нийт дагсалын тоо : 30</p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Бичих (Writing)</CardTitle>
            <CardDescription>Дундаж оноо : 5/9</CardDescription>
            <CardAction>
              <Button>
                <Link href="practice/writing">Эхлэх</Link>
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p>Хийсэн дасгалын тоо : 5</p>
            <p>Нийт дагсалын тоо : 15</p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Ярих (Speaking)</CardTitle>
            <CardDescription>Дундаж оноо : 5/9</CardDescription>
            <CardAction>
              <Button>
                <Link href="practice/speaking">Эхлэх</Link>
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p>Хийсэн дасгалын тоо : 31</p>
            <p>Нийт дагсалын тоо : 35</p>
          </CardContent>
        </Card>
        <Card className="w-full col-span-2">
          <CardHeader>
            <CardTitle>Хуурамч шалгалт (Mock Test)</CardTitle>
            <CardDescription>Дундаж оноо : 5/9</CardDescription>
            <CardAction>
              <Button>
                <Link href="practice/mock-test">Эхлэх</Link>
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p>Хийсэн дасгалын тоо : 2</p>
            <p>Нийт дагсалын тоо : 10</p>
          </CardContent>
        </Card>
        <Card className="w-full col-span-2">
          <CardHeader>
            <CardTitle>Үгийн сан (Vocabulary)</CardTitle>
            <CardDescription>Дундаж оноо : 5/9</CardDescription>
            <CardAction>
              <Button>
                <Link href="practice/vocabulary">Эхлэх</Link>
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p>Хийсэн дасгалын тоо : 17</p>
            <p>Нийт дагсалын тоо : 50</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
