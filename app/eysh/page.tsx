import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Eysh() {
  const ten = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="w-full h-screen px-10">
      <div>ЭЕШ Home Page</div>
      <div className="grid grid-cols-4 gap-10">
        {ten.map((index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>Математик</CardTitle>
              <CardDescription>Card Description</CardDescription>
              <CardAction>
                <Button>
                  <Link href="eysh/math">Эхлэх</Link>
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
