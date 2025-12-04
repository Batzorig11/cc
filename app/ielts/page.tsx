import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

export default function IeltsPage() {
  return (
    <div className="w-full min-h-screen px-10 text-2xl">
      <div className="w-full h-fit flex flex-col justify-center items-center">
        <Button className="text-3xl p-10">
          <Link href="ielts/practice">Дасгал ажиллаж эхлэх</Link>
        </Button>
        <div className="w-3/4 border rounded-md p-10 my-10">
          <Collapsible>
            <CollapsibleTrigger className="w-full">
              <div className="text-3xl font-bold flex justify-center items-center">
                IELTS гэж юу вэ? <ChevronDown className="ml-5" />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <Separator className="mt-5" />
              <p className="my-5">
                <span className="font-bold">IELTS</span> гэдэг нь{" "}
                <span className="font-bold">
                  International English Language Testing System
                </span>{" "}
                буюу{" "}
                <span className="font-bold">
                  Олон улсын англи хэлний шалгалт
                </span>{" "}
                юм.
              </p>
              <p className="my-5">
                Энэхүү шалгалт нь англи хэлний{" "}
                <span className="font-bold">
                  уншлага, сонсгол, бичлэг, ярианы чадварыг
                </span>{" "}
                хэмждэг бөгөөд гол зорилго нь:
              </p>
              <ol className="list-decimal mb-5 ml-10 space-y-2">
                <li>
                  <span className="font-bold">Сургалт :</span> Дэлхийн их, дээд
                  сургуульд элсэхэд шаардлагатай англи хэлний түвшинг тогтоох.
                </li>
                <li>
                  <span className="font-bold">Ажил мэргэжил :</span> Гадаадад
                  ажиллах, мэргэжлийн англи хэлний чадварыг батлах.
                </li>
                <li>
                  <span className="font-bold">Цагаачлал :</span> Зарим улс
                  орнуудад иргэншил авахад шаардлагатай хэлний шалгалт.
                </li>
              </ol>
              <Separator />
              <p className="text-justify my-5">
                IELTS нь <span className="font-bold">Academic</span> ба{" "}
                <span className="font-bold">General Training</span> гэсэн хоёр
                төрөлтэй:
              </p>
              <ul className="mb-5 list-disc ml-10 space-y-2">
                <li>
                  <span className="font-bold">Academic :</span> Их, дээд
                  сургуульд суралцахад зориулагдсан.
                </li>
                <li>
                  <span className="font-bold">General Training :</span> Ажил,
                  цагаачлал, өдөр тутмын амьдралд шаардлагатай англи хэлний
                  чадвар хэмжихэд зориулагдсан.
                </li>
              </ul>
              <Separator />
              <p className="text-justify my-5">
                Шалгалт нь{" "}
                <span className="font-bold">
                  Listening, Reading, Writing, Speaking
                </span>{" "}
                гэсэн 4 хэсгээс бүрдэнэ.
              </p>
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
