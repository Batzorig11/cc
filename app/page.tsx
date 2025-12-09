import { Button } from "@/components/ui/button";
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock,
  Headphones,
  MessageCircle,
  PenTool,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const sections = ["Reading", "Listening", "Writing", "Speaking"];

  return (
    <div className="w-full h-full p-2">
      <main className="w-full h-full flex flex-col justify-center  items-center">
        <div className="w-full h-screen text-black bg-center bg-[url('/test1.jpg')] flex flex-col relative justify-center items-center px-10 font-bold w-1/2">
          <div className="text-sm mb-10 flex justify-center items-center border rounded-2xl bg-white/30 absolute top-30 w-fit px-4 py-2">
            <Star className="mr-2" />
            Одоогоор 10,000+ хэрэглэгчидэд зорилгодоо хүрэхэд тус болсон байна.
          </div>
          <div className="absolute top-50 w-full justify-center flex gap-10">
            <Link href="/dashboard">
              <Button className="w-[400px] bg-blue-500 cursor-pointer px-10 py-8 text-2xl font-bold">
                Үнэгүй дасгал ажиллах <ChevronRight />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="w-[400px] cursor-pointer px-10 py-8 text-2xl font-bold">
                Туршилтын дасгалуудыг үзэх
              </Button>
            </Link>
          </div>
          <div className="w-full text-7xl flex-col flex font-bold">
            <span>ТӨВЛӨР,</span>
            <span>ДАСГАЛАА АЖИЛ,</span>
            <span>ЗОРЬСОНДОО ХҮР</span>
          </div>
          {/* <div className="text-[20px] w-1/2 text-center text-gray-700 absolute bottom-60">
            Бодит асуултуудтай дасгал хийж, шуурхай санал хүсэлтийг авч,
            мөрөөдлийн хамтлагийн онооныхоо ахиц дэвшлийг хянаж байгаарай.
          </div> */}
          <div className="absolute bottom-10 flex text-white justify-around items-center w-full">
            <div className="flex flex-col justify-center items-center">
              <Users className="w-15 h-15" />
              <span className="font-bold text-5xl">10,000+</span>
              <span className="font-normal text-gray-200">
                Идэвхтэй суралцагчид
              </span>
            </div>

            <div className="flex flex-col justify-center items-center">
              <BookOpen className="w-15 h-15" />
              <span className="font-bold text-5xl">5,000+</span>
              <span className="font-normal text-gray-200">Дасгал ажил</span>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Trophy className="w-15 h-15" />
              <span className="font-bold text-5xl">95%</span>
              <span className="font-normal text-gray-200">Амжилтын түвшин</span>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Star className="w-15 h-15" />
              <span className="font-bold text-5xl">4.9/5</span>
              <span className="font-normal text-gray-200">
                Хэрэглэгчдийн үнэлгээ
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="text-6xl font-bold text-center mt-10 mb-5">
            IELTS-ийн бүрэн бэлтгэл
          </div>
          <div className="text-center text-gray-600 text-lg mb-10">
            Манай цогц дадлагын материалаар IELTS болон TOEFL-н шалгалтын дөрвөн
            хэсгийг бүрэн эзэмшээрэй
          </div>
        </div>
        <div className="px-20 w-full grid grid-cols-4 gap-10">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-card justify-start text-2xl gap-5 px-8 py-6 flex-col font-bold border rounded-md flex items-start"
            >
              {section === "Reading" && (
                <p className="border rounded-md p-4">
                  <BookOpen className="w-8 h-8 text-blue-500" />
                </p>
              )}
              {section === "Listening" && (
                <p className="border rounded-md p-4">
                  <Headphones className="w-8 h-8 text-blue-500" />
                </p>
              )}
              {section === "Speaking" && (
                <p className="border rounded-md p-4">
                  <MessageCircle className="w-8 h-8 text-blue-500" />
                </p>
              )}

              {section === "Writing" && (
                <p className="border rounded-md p-4">
                  <PenTool className="w-8 h-8 text-blue-500" />
                </p>
              )}
              {section}
              <span className="font-normal text-sm">
                {section === "Reading" && (
                  <p>
                    Цагийн шалгалтаар эрдэм шинжилгээний болон ерөнхий унших
                    хэсгүүдийг дадлагажуул
                  </p>
                )}
                {section === "Listening" && (
                  <p>Төрөл бүрийн аудио материалаар ойлголтыг сайжруулах</p>
                )}
                {section === "Speaking" && <p>Ярилцлагын бүх хэсэгт бэлдэх</p>}

                {section === "Writing" && (
                  <p>
                    1 ба 2-р даалгаврыг удирдамжтайгаар дадлагажуулан гүйцэтгэх
                  </p>
                )}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full px-40 flex mt-20 mb-20 gap-10">
          <div className="w-full space-y-4">
            <h1 className="text-4xl font-bold">
              Яагаад IELTS Mastery-г сонгох вэ?
            </h1>
            <p className="text-gray-400">
              Манай платформыг IELTS-ийн мэргэжилтнүүд таны зорилтот оноонд үр
              дүнтэй хүрэхэд туслах зорилгоор бүтээсэн.
            </p>
            <div className="flex flex-col space-y-2 ml-6">
              <span className="flex items-center">
                <span>
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                </span>
                Таны гүйцэтгэлд суурилсан дасан зохицох хүндрэл
              </span>
              <span className="flex items-center">
                <span>
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                </span>
                Хариулт бүрийн дэлгэрэнгүй тайлбар
              </span>
              <span className="flex items-center">
                <span>
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                </span>
                Цаг хугацааны явцад ахиц дэвшлээ хянах
              </span>
              <span className="flex items-center">
                <span>
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                </span>
                Бодит шалгалтын симуляци
              </span>
              <span className="flex items-center">
                <span>
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                </span>
                Хаана ч гар утсанд ээлтэй дадлага хийх
              </span>
              <span className="flex items-center">
                <span>
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                </span>
                Хувь хүнд зориулсан судалгааны зөвлөмж
              </span>
            </div>
          </div>
          <div className="absolute gradient-hero rounded-3xl opacity-10 blur-2xl" />
          <div className="relative bg-card rounded-3xl shadow-card p-8 w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                <Target className="w-6 h-6 " />
              </div>
              <div className="">
                <div className="text-sm text-muted-foreground">
                  Your Progress
                </div>
                <div className="text-2xl font-bold text-foreground">
                  Band 7.5
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {["Reading", "Listening", "Writing", "Speaking"].map(
                (skill, i) => (
                  <div key={skill}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">{skill}</span>
                      <span className="text-muted-foreground">
                        {70 + i * 5}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 gradient-hero rounded-full transition-all duration-500"
                        style={{ width: `${70 + i * 5}%` }}
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <section className="py-20 px-4 w-full">
          <div className="container w-1/2 bg-card rounded-md mx-auto">
            <div className="gradient-hero rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl backdrop-blur flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 " />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  IELTS-ийн аялалаа эхлүүлэхэд бэлэн үү?{" "}
                </h2>
                <p className="text-lg  /80 mb-8 max-w-xl mx-auto">
                  IELTS-ийн мастерын шалгалтаар зорилтот оноогоо авсан мянга
                  мянган оюутнуудтай нэгдээрэй
                </p>
                <Button asChild className="bg-white  hover:bg-white/90">
                  <Link href="/dashboard">
                    Үнэгүй дасгал ажиллах
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <footer className="py-12 px-4 border-t border-border w-full">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center">
                  <BookOpen className="w-4 h-4 " />
                </div>
                <span className="font-semibold text-foreground">
                  IELTS Mastery
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                © 2024 IELTS Mastery. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
