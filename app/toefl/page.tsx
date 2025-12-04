import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

export default function ToeflPage() {
  return (
    <div className="w-full min-h-screen px-10 text-2xl">
      <div className="w-full h-fit flex flex-col justify-center items-center">
        <Button className="text-3xl p-10">
          <Link href="toefl/practice">Дасгал ажиллаж эхлэх</Link>
        </Button>
        <div className="w-3/4 border rounded-md p-10 my-10">
          <Collapsible>
            <CollapsibleTrigger className="w-full">
              <div className="text-3xl font-bold flex justify-center items-center">
                TOEFL гэж юу вэ? <ChevronDown className="ml-5" />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <Separator className="mt-5" />
              <p className="my-5">
                <span className="font-bold">TOEFL</span> гэдэг нь{" "}
                <span className="font-bold">
                  Test of English as a Foreign Language
                </span>{" "}
                буюу{" "}
                <span className="font-bold">
                  Гадаад хэл болгож Англи хэлний мэдлэг шалгах олон улсын
                  шалгалт
                </span>{" "}
                юм.
              </p>
              <p className="my-5">
                Энэхүү шалгалт нь англи хэлийг эх хэл биш хүмүүсийн{" "}
                <span className="font-bold">
                  академик орчинд англиар суралцах чадварыг
                </span>{" "}
                хэмждэг. <br />
              </p>
              <p className="my-5">
                Ихэнх улс орнуудын их, дээд сургууль, тэр дундаа АНУ, Канад,
                Солонгос, Япон зэрэг орнуудын ихэнх сургуулиуд элсэлтэд
                TOEFL–ийн оноог шаарддаг.
              </p>
              <Separator />
              <p className="font-bold my-5">1. TOEFL шалгалтын бүтэц</p>
              TOEFL iBT (интернетээр авдаг хувилбар) нь 4 хэсэгтэй:
              <ul className="mb-5 list-disc ml-10 space-y-2">
                <li>
                  <span className="font-bold">Reading :</span> Академик текст
                  уншаад ойлгох чадвар
                </li>
                <li>
                  <span className="font-bold">Listening :</span> Лекц, харилцан
                  яриа сонсоод ойлгох
                </li>
                <li>
                  <span className="font-bold">Speaking :</span> Асуултад
                  микрофоноор ярьж хариу өгөх
                </li>
                <li>
                  <span className="font-bold">Writing :</span> Эссэ бичих
                  (уншлага + сонсгол дээр үндэслэсэн бичлэг болон бие даасан
                  эссэ)
                </li>
              </ul>
              <Separator />
              <p className="text-justify my-5 font-bold">2. TOEFL-ийн оноо </p>
              <ul className="mb-5 list-disc ml-10 space-y-2">
                <li>
                  Нийт оноо : <span className="font-bold">0 - 120</span>
                </li>
                <li>
                  Хэсэг тус бүр : <span className="font-bold">30 оноотой</span>
                </li>
                <li>
                  Сургуулиудын ерөнхий шаардлага :
                  <ul className="ml-10 list-disc space-y-2 mt-5">
                    <li>
                      Дундаж сургууль : <span className="font-bold">70-80</span>
                    </li>
                    <li>
                      Сайн сургууль : <span className="font-bold">90-100</span>
                    </li>
                    <li>
                      Шилдэг сургууль : <span className="font-bold">105+</span>
                    </li>
                  </ul>
                </li>
              </ul>
              <Separator />
              <p className="text-justify my-5 font-bold">
                3. TOEFL-ийн онцлог{" "}
              </p>
              <ul className="mb-5 list-disc ml-10 space-y-2">
                <li>
                  IELTS-ээс ялгаатай нь Speaking нь компьютерт ярьж бичигддэг
                </li>
                <li>Сонсгол дээр нот бичих буюу тэмдэглэж авахыг зөвшөөрдөг</li>
                <li>
                  Уншлагын текст нь IELTS-ээс илүү академик, академик үгс ихтэй
                </li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <div className="w-3/4 border rounded-md p-10 my-10">
          <Collapsible>
            <CollapsibleTrigger className="w-full ">
              <div className="text-3xl font-bold flex justify-center items-center">
                Бүрдүүлэх материал <ChevronDown className="ml-5" />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <Separator className="mt-5" />
              <div>
                <p className="font-bold my-5">
                  1. Хүчинтэй иргэний үнэмлэх эсвэл Паспорт
                </p>
                <ul className="list-disc ml-10 space-y-2">
                  <li>Монголд ихэнх төвүүд Иргэний үнэмлэх-ийг зөвшөөрдөг.</li>
                  <li>Гадаадад өгөх бол заавал Паспорт шаардлагатай.</li>
                </ul>
                <p className="font-bold my-5">2. Бүртгүүлэх төлбөр</p>
                <ul className="list-disc ml-10 space-y-2">
                  <li>Онлайн бүртгүүлэх үед төлбөрөө төлсөн байх ёстой.</li>
                  <li>
                    Монголд ойролцоогоор 400,000–500,000₮ (байгууллагаас
                    шалтгаална).
                  </li>
                </ul>
                <p className="font-bold my-5">
                  3. Өөрийн зураг авахуулах шаардлагагүй
                </p>
                <ul className="list-disc ml-10 space-y-2">
                  <li>
                    IELTS төв өөрөө таны зургийг шалгалтын өдөр авдаг. (Хувийн
                    зураг авчрах шаардлага байхгүй.)
                  </li>
                </ul>
                <p className="font-bold my-5">4. Бүртгэлийн мэдээлэл</p>
                Онлайн бүртгэхдээ дараах мэдээллийг л оруулна:
                <ul className="list-disc ml-10 mb-5 space-y-2">
                  <li>Нэр</li>
                  <li>Төрсөн өдөр</li>
                  <li>Холбоо барих утас</li>
                  <li>Имэйл</li>
                  <li>Баримтын дугаар (иргэний үнэмлэх эсвэл паспорт)</li>
                </ul>
                <Separator />
                <p className="font-bold my-5">Шалгалтын өдөр авчрах зүйл</p>
                <ul className="list-disc  ml-10 space-y-2">
                  <li>
                    Иргэний үнэмлэх эсвэл Паспорт (бүртгүүлсэн баримттай таарах
                    ёстой)
                  </li>
                  <li>Ус (шошигүй савтай)</li>
                  <li>
                    Өөр зүйлсийг авч оруулахыг хориглоно (утас, цүнх гэх мэт
                    бүгдийг шүүгээнд хадгална)
                  </li>
                </ul>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <div className="w-3/4 border rounded-md p-10 my-10">
          <Collapsible>
            <CollapsibleTrigger className="w-full">
              <div className="text-3xl font-bold flex justify-center items-center">
                Анхаарах зүйлс <ChevronDown className="ml-5" />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <Separator className="mt-5" />
              <div>
                <p className="font-bold my-5">
                  1. Бүртгэлийн мэдээллээ зөв оруулах
                </p>
                <ul className="list-disc ml-10 space-y-2">
                  <li>
                    Баримтын (паспорт/иргэний үнэмлэх) дугаар буруу байвал
                    шалгалт өгөх боломжгүй.
                  </li>
                  <li>Нэр, төрсөн өдрөө паспорттой адил бичээрэй.</li>
                </ul>
                <p className="font-bold my-5">2. Шалгалтын өдөр эрт ирэх</p>
                <ul className="list-disc ml-10 space-y-2">
                  <li>
                    Speaking цаг өөр өдөр эсвэл өөр цагт байж болдог → цагийг
                    андуурахгүй.
                  </li>
                  <li>Сонсгол/уншлага/бичлэг эхлэхээс 45 минутын өмнө ир.</li>
                </ul>
                <p className="font-bold my-5">3. Зөвхөн баримтаа авч явах </p>
                <ul className="list-disc ml-10 space-y-2">
                  Та авч орж болох зүйл:
                  <li>Иргэний үнэмлэх / Паспорт</li>
                  <li>Шошигүй усны сав</li>
                  Бусад бүх зүйл (утас, цүнх, цаг, AirPods) → шүүгээнд хийнэ.
                </ul>
                <p className="font-bold my-5">
                  4. Шалгалтын үеэр дур мэдэн юм асуух хориотой
                </p>
                Онлайн бүртгэхдээ дараах мэдээллийг л оруулна:
                <ul className="list-disc ml-10 mb-5 space-y-2">
                  <li>“Дахиад хэлээч”, “Юу гэсэн үг вэ?” гэхийг хориглоно.</li>
                  <li>
                    Харин Listening дээр "Could you repeat the instructions?"
                    гэж болно (асуултыг давтахгүй).
                  </li>
                </ul>
                <p className="font-bold my-5">5. Сэтгэлзүйн бэлтгэл</p>
                <ul className="list-disc ml-10 mb-5 space-y-2">
                  <li>Шалгалтын өмнө шөнө сайн унтах</li>
                  <li>Сандрал бол хамгийн том дайсан</li>
                  <li>
                    Ямар нэгэн алдаа гаргалаа гэж бодсон ч → дараагийн хэсэгт
                    сөргөөр нөлөөлүүлэхгүй
                  </li>
                </ul>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </div>
  );
}
