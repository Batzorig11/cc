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

export default function IELTS() {
  return (
    <div className="w-full h-screen p-2 flex flex-col justify-center items-center">
      <div className=" text-3xl font-bold Gregorian tracking-widest">
        You CAN reach your goal
      </div>
      <main className="flex gap-10 m-10 w-full p-10">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Reading</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>
              <Link href="ielts/practice/reading">Start</Link>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Listening</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>
              <Link href="/">Start</Link>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Writing</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>
              <Link href="/">Start</Link>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Speaking</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>
              <Link href="/">Start</Link>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Mock Test</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>
              <Link href="/">Start</Link>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
