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
import { Calendar22 } from "../../components/calendar";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function TOEFL() {
  const [daysRemaining, setDaysRemaining] = useState(0);
  return (
    <div className="w-full px-4 flex flex-col justify-Эхлэх items-center">
      <div className=" text-xl flex justify-between w-3/4  ">
        <div>
          <div className="flex items-center justify-center">
            Шалгалт өгөх өдөр :
            <Calendar22 onDateChange={(_, days) => setDaysRemaining(days)} />
          </div>
          <div>Үлдсэн хоног : {daysRemaining}</div>
        </div>
        <div>
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
                <Link href="practice/mock-test">Эхлэх</Link>
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
