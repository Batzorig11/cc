"use client";
import { useParams } from "next/navigation";
import { getTestById } from "../../data";
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Mic } from "lucide-react";

export default function Speaking() {
  const [start, setStart] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes
  const params = useParams();
  const [partNum, setPartNum] = useState(1);
  const [test, setTest] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!start || submitted) return;
    if (timeLeft <= 0) {
      onSubmit();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, start]);

  useEffect(() => {
    async function fetchData() {
      const data = await getTestById(params.id);
      setTest(data);
    }
    fetchData();
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const onSubmit = () => {
    setSubmitted(true);
  };

  if (!start && test) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="max-w-2xl w-full mx-4 p-8 bg-card border rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">{test.title}</h1>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center p-4 bg-muted rounded-md">
              <span className="font-semibold">Үргэлжлэх хугацаа:</span>
              <span>{test.duration} минут</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-muted rounded-md">
              <span className="font-semibold">Нийт асуултын тоо:</span>
              <span>{test.totalQuestions}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-muted rounded-md">
              <span className="font-semibold">Parts-н тоо:</span>
              <span>{test.parts.length}</span>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-md p-4 mb-6">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">
              Заавар:
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-yellow-700 dark:text-yellow-300">
              <li>
                Асуултад хариулахын өмнө өгүүлбэр бүрийг анхааралтай уншаарай
              </li>
              <li>
                Бүх хэсгийг {test.duration} минутын дотор дуусгах шаардлагатай
              </li>
              <li>"Шалгалт эхлэх" дээр дармагц хугацаа шууд эхэлнэ</li>
              <li>Өгүүлбэрүүдийн хооронд товчлууруудаар шилжиж болно</li>
              <li>Цаг дуусахаас өмнө заавал илгээгээрэй</li>
            </ul>
          </div>

          <Button
            onClick={() => setStart(true)}
            className="w-full text-lg py-6"
            size="lg"
          >
            Шалгалт эхлэх
          </Button>
        </div>
      </div>
    );
  }
  console.log(partNum);

  return (
    <div className="min-w-full p-4 flex flex-col justify-center items-center ">
      {test ? (
        <div className="min-w-full">
          <div className="font-bold text-2xl mb-5 flex justify-between items-center">
            {test.title}
            <div>
              {submitted && (
                <div>
                  Score: {score}/{test.totalQuestions}
                </div>
              )}
            </div>
          </div>
          <div className="min-w-full flex justify-between my-4 px-4 py-2 border rounded-md">
            <div className="flex gap-2 items-center">
              <span className="text-2xl font-bold">Part :</span>{" "}
              {test.parts.map((part) => (
                <Button
                  className={partNum === part.partNumber ? `` : `bg-primary/45`}
                  onClick={() => setPartNum(part.partNumber)}
                  key={part.partNumber}
                >
                  {part.partNumber}
                </Button>
              ))}
            </div>

            <div>
              <div>
                Үлдсэн хугацаа: {minutes}:{seconds.toString().padStart(2, "0")}
              </div>
              {submitted ? (
                <Button className="w-full">
                  <Link href="/ielts/practice/speaking">Гарах</Link>
                </Button>
              ) : (
                <Button className="w-full" onClick={() => onSubmit()}>
                  Дуусгах
                </Button>
              )}
            </div>
          </div>
          <div className="flex min-w-full gap-10">
            {/*---TASK-SECTION---*/}
            <div className="w-full bg-card border rounded-md p-5 h-fit sticky top-18">
              <h2 className="font-bold text-4xl my-2">
                {test.parts[partNum - 1].title}
              </h2>
              {test.parts[partNum - 1].instructions
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index} className="mb-5 font-bold text-3xl">
                    {paragraph}
                  </p>
                ))}
              {test.parts[partNum - 1].questions &&
                test.parts[partNum - 1].questions.map((question, index) => (
                  <div className="my-2 ml-5 text-2xl" key={index}>
                    {question.questionNumber}. {question.question}
                  </div>
                ))}
              <div className="text-2xl">
                {test.parts[partNum - 1].cueCard && (
                  <div className="ml-5 my-2">
                    {test.parts[partNum - 1].cueCard.questionNumber}.{" "}
                    {test.parts[partNum - 1].cueCard.topic}
                  </div>
                )}
                <br />
                <br />
                {test.parts[partNum - 1].cueCard && "You should say:"}
                {test.parts[partNum - 1].cueCard &&
                  test.parts[partNum - 1].cueCard.prompts.map(
                    (prompt, index) => (
                      <div className="ml-10 my-2" key={index}>
                        - {prompt}
                      </div>
                    )
                  )}
              </div>
            </div>
            {/*---ESSAY-SECTION---*/}
            <div className="w-full h-100 bg-card rounded-md border p-5 flex justify-center items-center">
              <Mic size={100} />
            </div>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
}
