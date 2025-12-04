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

export default function ReadingTest() {
  const [start, setStart] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes
  const params = useParams();
  const [taskNum, setTaskNum] = useState(1);
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
              <span className="font-semibold">Passage-н тоо:</span>
              <span>{test.tasks.length}</span>
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
  console.log(taskNum);

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
              <span className="text-2xl font-bold">Task :</span>{" "}
              {test.tasks.map((task) => (
                <Button
                  className={taskNum === task.taskNumber ? `` : `bg-primary/45`}
                  onClick={() => setTaskNum(task.taskNumber)}
                  key={task.taskNumber}
                >
                  {task.taskNumber}
                </Button>
              ))}
            </div>

            <div>
              <div>
                Үлдсэн хугацаа: {minutes}:{seconds.toString().padStart(2, "0")}
              </div>
              {submitted ? (
                <Button className="w-full">
                  <Link href="/ielts/practice/writing">Гарах</Link>
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
              {test.tasks[taskNum - 1].instructions
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index} className="mb-5">
                    {paragraph}
                  </p>
                ))}
              {test.tasks[taskNum - 1].chartData && (
                <>
                  <label className="font-bold">Country A</label>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <br />
                  <label className="font-bold">Country B</label>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </>
              )}
            </div>
            {/*---ESSAY-SECTION---*/}
            <div className="w-full">
              <Textarea
                className="w-full h-full max-h-screen"
                placeholder="Write your essay here..."
              />
            </div>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
}

// "use client";

// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { useState, useEffect } from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { useParams } from "next/navigation";
// import { getTestById } from "../../data";

// export default function Writing() {
//   const [essay, setEssay] = useState("");
//   const [feedback, setFeedback] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [test, setTest] = useState(null);
//   const [start, setStart] = useState(false);

//   const params = useParams();

//   useEffect(() => {
//     if (!start || submitted) return;
//     if (timeLeft <= 0) {
//       onSubmit();
//       return;
//     }

//     const timer = setTimeout(() => {
//       setTimeLeft(timeLeft - 1);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [timeLeft, start]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getTestById(params.id);
//       setTest(data);
//     };
//     fetchData();
//   }, []);

//   const handleCheckEssay = async () => {
//     setLoading(true);
//     const response = await fetch("/api/check-essay", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ essay }),
//     });

//     const data = await response.json();
//     setFeedback(data.feedback);
//     setLoading(false);
//   };

//   if (!start && test) {
//     return (
//       <div className="w-full h-screen flex justify-center items-center">
//         <div className="max-w-2xl w-full mx-4 p-8 bg-card border rounded-lg shadow-lg">
//           <h1 className="text-3xl font-bold mb-4">{test.title}</h1>

//           <div className="space-y-4 mb-6">
//             <div className="flex justify-between items-center p-4 bg-muted rounded-md">
//               <span className="font-semibold">Үргэлжлэх хугацаа:</span>
//               <span>{test.duration} минут</span>
//             </div>
//             <div className="flex justify-between items-center p-4 bg-muted rounded-md">
//               <span className="font-semibold">Нийт асуултын тоо:</span>
//               <span>{test.totalQuestions}</span>
//             </div>
//             <div className="flex justify-between items-center p-4 bg-muted rounded-md">
//               <span className="font-semibold">Passage-н тоо:</span>
//               <span>{test.tasks.length}</span>
//             </div>
//           </div>

//           <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-md p-4 mb-6">
//             <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">
//               Заавар:
//             </h3>
//             <ul className="list-disc list-inside space-y-1 text-sm text-yellow-700 dark:text-yellow-300">
//               <li>
//                 Асуултад хариулахын өмнө өгүүлбэр бүрийг анхааралтай уншаарай
//               </li>
//               <li>
//                 Бүх хэсгийг {test.duration} минутын дотор дуусгах шаардлагатай
//               </li>
//               <li>"Шалгалт эхлэх" дээр дармагц хугацаа шууд эхэлнэ</li>
//               <li>Өгүүлбэрүүдийн хооронд товчлууруудаар шилжиж болно</li>
//               <li>Цаг дуусахаас өмнө заавал илгээгээрэй</li>
//             </ul>
//           </div>

//           <Button
//             onClick={() => setStart(true)}
//             className="w-full text-lg py-6"
//             size="lg"
//           >
//             Шалгалт эхлэх
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full pb-10 min-h-screen flex-col flex justify-center items-center px-10">
//       <h1 className="text-3xl font-bold mb-4">{test.title}</h1>

//       <div className="w-full h-full items-start justify-center gap-10 flex">
//         <div className="border w-full rounded-md p-5 bg-card">
//           ✏️ Task 1 (Academic)
//           <br />
//           <br />
//           You should spend about 20 minutes on this task. Write at least 150
//           words.
//           <br />
//           <br />
//           The charts below show the percentage of household income spent...
//           {/* The rest of your chart stays exactly the same */}
//         </div>

//         <div className="flex flex-col gap-10 w-full h-full">
//           <div className="p-5 bg-card border rounded-md">
//             Task 1 Question:
//             <br />
//             Summarize the information by selecting…
//           </div>

//           <Textarea
//             className="w-full h-150 text-justify"
//             value={essay}
//             onChange={(e) => setEssay(e.target.value)}
//             placeholder="Write your essay here..."
//           />

//           <Button onClick={handleCheckEssay} disabled={loading}>
//             {loading ? "Checking..." : "Check My Essay"}
//           </Button>

//           {feedback && (
//             <div className="p-5 border bg-card rounded-md">
//               <h2 className="text-xl font-bold mb-2">AI Feedback:</h2>
//               <p className="whitespace-pre-wrap">{feedback}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
