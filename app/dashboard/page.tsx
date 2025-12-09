"use client";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { getLoggedInUser, logoutUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  BookOpen,
  Headphones,
  PenTool,
  MessageCircle,
  LogOut,
  Trophy,
  Target,
  Clock,
  TrendingUp,
  Play,
  Calculator,
  GraduationCap,
  FileText,
  FlaskConical,
  Atom,
  Microscope,
  Users,
  MapPinHouse,
  HistoryIcon,
  History,
  RussianRuble,
} from "lucide-react";

import { BookA } from "lucide-react";
import { Earth } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Computer } from "lucide-react";

type ExamType = "ielts" | "toefl" | "eysh";

interface QuizModule {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  questions: number;
  time: string;
  color: string;
  bgColor: string;
}

interface User {
  email: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [selectedExam, setSelectedExam] = useState("ielts");

  const examInfo: Record<
    ExamType,
    { name: string; fullName: string; icon: React.ElementType }
  > = {
    ielts: {
      name: "IELTS",
      fullName: "International English Language Testing System",
      icon: GraduationCap,
    },
    toefl: {
      name: "TOEFL",
      fullName: "Test of English as a Foreign Language",
      icon: GraduationCap,
    },
    eysh: {
      name: "ЭЕШ",
      fullName: "Scholastic Assessment Test",
      icon: GraduationCap,
    },
  };

  const examModules: Record<ExamType, QuizModule[]> = {
    ielts: [
      {
        id: "reading",
        icon: BookOpen,
        title: "Reading",
        description: "Академик болон ерөнхий сургалтын хэсгүүд",
        questions: 40,
        time: "60 min",
        color: "bg-blue-500",
        bgColor: "bg-blue-500/10",
      },
      {
        id: "listening",
        icon: Headphones,
        title: "Listening",
        description: "Аудио ойлголтын дасгалууд",
        questions: 40,
        time: "30 min",
        color: "bg-purple-500",
        bgColor: "bg-purple-500/10",
      },
      {
        id: "writing",
        icon: PenTool,
        title: "Writing",
        description: "Task 1 & Task 2 дасгалууд",
        questions: 2,
        time: "60 min",
        color: "bg-orange-500",
        bgColor: "bg-orange-500/10",
      },
      {
        id: "speaking",
        icon: MessageCircle,
        title: "Speaking",
        description: "Ярилцлагын бэлтгэл",
        questions: 3,
        time: "15 min",
        color: "bg-green-500",
        bgColor: "bg-green-500/10",
      },
    ],
    toefl: [
      {
        id: "reading",
        icon: BookOpen,
        title: "Reading",
        description: "Академик хэсгийг ойлгох",
        questions: 30,
        time: "54 min",
        color: "bg-indigo-500",
        bgColor: "bg-indigo-500/10",
      },
      {
        id: "listening",
        icon: Headphones,
        title: "Listening",
        description: "Лекц ба яриа",
        questions: 28,
        time: "41 min",
        color: "bg-violet-500",
        bgColor: "bg-violet-500/10",
      },
      {
        id: "speaking",
        icon: MessageCircle,
        title: "Speaking",
        description: "Бие даасан, нэгдсэн даалгаварууд",
        questions: 4,
        time: "17 min",
        color: "bg-emerald-500",
        bgColor: "bg-emerald-500/10",
      },
      {
        id: "writing",
        icon: PenTool,
        title: "Writing",
        description: "Нэгдсэн болон эрдэм шинжилгээний эссэ",
        questions: 2,
        time: "50 min",
        color: "bg-amber-500",
        bgColor: "bg-amber-500/10",
      },
    ],
    eysh: [
      {
        id: "mgl",
        icon: BookOpen,
        title: "Монгол хэл",
        description: "Нотолгоонд суурилсан уншлага",
        questions: 54,
        time: "64 min",
        color: "bg-rose-500",
        bgColor: "bg-rose-500/10",
      },
      {
        id: "math",
        icon: Calculator,
        title: "Математик",
        description: "Асуудал шийдвэрлэх болон өгөгдлийн шинжилгээ",
        questions: 44,
        time: "70 min",
        color: "bg-cyan-500",
        bgColor: "bg-cyan-500/10",
      },
      {
        id: "chemistry",
        icon: FlaskConical,
        title: "Хими",
        description: "Химийн үндсэн ойлголтууд",
        questions: 54,
        time: "64 min",
        color: "bg-rose-500",
        bgColor: "bg-rose-500/10",
      },
      {
        id: "physics",
        icon: Atom,
        title: "Физик",
        description: "Физикийн үндсэн ойлголтууд",
        questions: 44,
        time: "70 min",
        color: "bg-cyan-500",
        bgColor: "bg-cyan-500/10",
      },
      {
        id: "english",
        icon: BookA,
        title: "Англи хэл",
        description: "Нотолгоонд суурилсан уншлага",
        questions: 54,
        time: "64 min",
        color: "bg-rose-500",
        bgColor: "bg-rose-500/10",
      },
      {
        id: "biology",
        icon: Microscope,
        title: "Биологи",
        description: "Асуудал шийдвэрлэх болон өгөгдлийн шинжилгээ",
        questions: 44,
        time: "70 min",
        color: "bg-cyan-500",
        bgColor: "bg-cyan-500/10",
      },
      {
        id: "social",
        icon: Users,
        title: "Нийгмийн ухаан",
        description: "Нотолгоонд суурилсан уншлага",
        questions: 54,
        time: "64 min",
        color: "bg-rose-500",
        bgColor: "bg-rose-500/10",
      },
      {
        id: "geology",
        icon: MapPinHouse,
        title: "Газар зүй",
        description: "Асуудал шийдвэрлэх болон өгөгдлийн шинжилгээ",
        questions: 44,
        time: "70 min",
        color: "bg-cyan-500",
        bgColor: "bg-cyan-500/10",
      },
      {
        id: "history",
        icon: History,
        title: "Түүх",
        description: "Нотолгоонд суурилсан уншлага",
        questions: 54,
        time: "64 min",
        color: "bg-rose-500",
        bgColor: "bg-rose-500/10",
      },
      {
        id: "russian",
        icon: RussianRuble,
        title: "Орос хэл",
        description: "Асуудал шийдвэрлэх болон өгөгдлийн шинжилгээ",
        questions: 44,
        time: "70 min",
        color: "bg-cyan-500",
        bgColor: "bg-cyan-500/10",
      },
    ],
  };

  const recentActivity = [
    {
      type: "Reading",
      exam: "IELTS",
      score: 8,
      date: "Өнөөдөр",
      questions: 10,
    },
    {
      type: "Listening",
      exam: "TOEFL",
      score: 25,
      date: "Өчигдөр",
      questions: 10,
    },
    {
      type: "Math",
      exam: "ЭЕШ",
      score: 680,
      date: "2 өдрийн өмнө",
      questions: 10,
    },
  ];

  useEffect(() => {
    const logged = getLoggedInUser();
    if (!logged) {
      router.push("/login");
    } else {
      setUser(logged);
    }
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="w-full min-h-screen flex justify-start items-center flex-col pt-20 px-40">
      <div className="w-full flex justify-between">
        <h1 className="font-bold text-4xl">Тавтай морилно уу!, {user.email}</h1>
        <Button
          onClick={() => {
            logoutUser();
            router.push("/login");
          }}
        >
          Logout
        </Button>
      </div>
      <div className="w-full gap-10 grid grid-cols-4 my-20">
        <div className="flex border rounded-md p-4 gap-5 justify-start items-center bg-card">
          <Trophy className="w-10 h-10 text-yellow-500" />
          <div className="flex flex-col">
            <span className="text-black-200">Хийсэн дасгалын тоо</span>
            <span className="text-2xl font-bold">12</span>
          </div>
        </div>
        <div className="flex border rounded-md p-4 gap-5 justify-start items-center bg-card">
          <Target className="w-10 h-10 text-blue-500" />
          <div className="flex flex-col">
            <span className="text-black-200">Дундаж оноо</span>
            <span className="text-2xl font-bold">85%</span>
          </div>
        </div>
        <div className="flex border rounded-md p-4 gap-5 justify-start items-center bg-card">
          <Clock className="w-10 h-10 text-green-800" />
          <div className="flex flex-col">
            <span className="text-black-200">Дасгал ажилсан хугацаа</span>
            <span className="text-2xl font-bold">24 цаг</span>
          </div>
        </div>
        <div className="flex border rounded-md p-4 gap-5 justify-start items-center bg-card">
          <TrendingUp className="w-10 h-10 text-green-500" />
          <div className="flex flex-col">
            <span className="text-black-200">Хийсэн дасгалын тоо</span>
            <span className="text-2xl font-bold">12</span>
          </div>
        </div>
      </div>
      {/* Exam Tabs */}
      <Tabs
        value={selectedExam}
        onValueChange={(v) => setSelectedExam(v as ExamType)}
        className="mb-8 w-full  "
      >
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="ielts" className="text-base font-semibold">
            IELTS
          </TabsTrigger>
          <TabsTrigger value="toefl" className="text-base font-semibold">
            TOEFL
          </TabsTrigger>
          <TabsTrigger value="eysh" className="text-base font-semibold">
            ЭЕШ
          </TabsTrigger>
        </TabsList>

        {["ielts", "toefl", "eysh"].map((exam) => (
          <TabsContent key={exam} value={exam}>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-foreground">
                {examInfo[exam as ExamType].name} Дадлагын модулиуд
              </h2>
              <p className="text-sm text-muted-foreground">
                {examInfo[exam as ExamType].fullName}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {examModules[exam as ExamType].map((module) => (
                <Card
                  key={module.id}
                  className="border-0  transition-all duration-300 hover:-translate-y-1 group"
                >
                  <CardHeader className="pb-2">
                    <div
                      className={`w-12 h-12 rounded-xl ${module.bgColor} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}
                    >
                      <module.icon
                        className={`w-6 h-6 ${module.color.replace(
                          "bg-",
                          "text-"
                        )}`}
                      />
                    </div>
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>{module.questions} асуулт</span>
                      <span>{module.time}</span>
                    </div>
                    <Button asChild className="w-full" size="sm">
                      <Link href={`${exam}/practice/${module.id}`}>
                        <Play className="w-4 h-4 mr-2" />
                        Дасгал ажиллах
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            {(exam === "ielts" || exam === "toefl") && (
              <div className="grid md:grid-cols-2 gap-10 mt-10">
                <Card className="border-0 transition-all duration-300 hover:-translate-y-1 group from-primary/10 to-secondary/10">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">
                      Бүрэн хуурамч тест
                    </CardTitle>
                    <CardDescription>
                      Бодит байдлыг дуурайлган хийх{" "}
                      {examInfo[exam as ExamType].name} шалгалтын туршлага
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>Бүх хэлбэрүүд</span>
                      <span>Хугацаат</span>
                    </div>
                    <Button asChild className="w-full" size="sm">
                      <Link href={`/${exam}/practice/mock-test`}>
                        <Play className="w-4 h-4 mr-2" />
                        Хуурамч тест өгөх
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border-0 transition-all duration-300 hover:-translate-y-1 group  from-secondary/10 to-accent/10">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <BookA className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">
                      Үгсийн сан бүтээгч
                    </CardTitle>
                    <CardDescription>
                      Өргөн хэрэглэгддэг {examInfo[exam as ExamType].name} үгийн
                      сан
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>Flashcard-ууд</span>
                      <span>Өөрийн хугацаат</span>
                    </div>
                    <Button asChild className="w-full" size="sm">
                      <Link href={`/${exam}/practice/vocabulary`}>
                        <BookOpen className="w-4 h-4 mr-2" />
                        Өргөн хэрэглээний үгс цээжлэх
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8 w-full mb-20">
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle>Сүүлийн үйлдлүүд</CardTitle>
            <CardDescription>
              Таны хамгийн сүүлд хийсэн дасгалууд
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 ">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {activity.exam} - {activity.type}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {activity.questions} дасгал
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-foreground">
                      {activity.exam === "IELTS"
                        ? `Band ${activity.score}`
                        : activity.score}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-card ">
          <CardHeader>
            <CardTitle>Түргэн зөвлөгөө</CardTitle>
            <CardDescription>
              Эдгээр аргуудыг ашиглан оноогоо сайжруулаарай
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Цагийн менежмент",
                  tip: "Асуулт бүрт тохирох хугацаа зарцуулж, түүндээ баримтал",
                },
                {
                  title: "Гүйлгэн унших",
                  tip: "Гарчиг болон эхний өгүүлбэрүүдийг түрүүлж унш",
                },
                {
                  title: "Түлхүүр үгс",
                  tip: "Асуултууд дахь гол үгсийг доогуур зурах",
                },
                {
                  title: "Өдөр бүр давтах",
                  tip: "Тогтмол давтах нь ой тогтоолтыг сайжруулдаг",
                },
              ].map((item, index) => (
                <div key={index} className="p-3 rounded-lg bg-muted/50">
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.tip}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      {/* <div className=" gap-10  w-full grid grid-cols-3 h-full">
        <div className="w-full text-3xl font-bold col-span-3">
          Гадаад хэлний шалтгалт
        </div>
        <Card className="w-full h-full relative">
          <CardHeader>
            <CardTitle className="flex gap-5 text-3xl justify-between items-center">
              IELTS
              <BookA />
            </CardTitle>
            <CardDescription>IELTS-д бэлдэх</CardDescription>
            <CardAction></CardAction>
          </CardHeader>
          <CardContent>
            <p>
              Бодит хэв маягийн даалгавраар унших, сонсох, ярих, бичих чадвараа
              дадлагажуулаарай.
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
              <Computer />
            </CardTitle>
            <CardDescription>TOEFL-д бэлдэх</CardDescription>
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
              TOEIC
              <Earth />
            </CardTitle>
            <CardDescription>TOEIC-д бэлдэх</CardDescription>
            <CardAction></CardAction>
          </CardHeader>
          <CardContent className="mb-20">
            <p>
              TOEIC-ийн хэв маягийн асуултууд болон бүрэн туршилтын
              шалгалтуудаар дадлага хий.
            </p>
          </CardContent>
          <CardFooter className="absolute bottom-5">
            <Button>Тун удахгүй...</Button>
          </CardFooter>
        </Card>
        <div className="w-full text-3xl font-bold col-span-3">
          Эсэлтийн шалтгалт
        </div>
        <Card className="w-full h-full relative">
          <CardHeader>
            <CardTitle className="flex gap-5 text-3xl justify-between items-center">
              ЭЕШ
              <GraduationCap />
            </CardTitle>
            <CardDescription>ЭЕШ-д бэлдэх</CardDescription>
            <CardAction></CardAction>
          </CardHeader>
          <CardContent className="mb-20">
            <p>
              Бүтэцтэй дадлагын тестүүдээр шалгалтын ур чадвараа сайжруулаарай.
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
            <CardDescription>SAT-д бэлдэх</CardDescription>
            <CardAction></CardAction>
          </CardHeader>

          <CardContent className="mb-20">
            <p>
              Practice reading, listening, speaking, and writing with real-style
              tasks.
            </p>
          </CardContent>
          <CardFooter className="absolute bottom-5">
            <Button>Тун удахгүй...</Button>
          </CardFooter>
        </Card>
      </div> */}
    </div>
  );
}
