"use client";

import { useEffect, useState } from "react";
import { getAllListeningTests } from "./data";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Listening() {
    const [tests, setTests] = useState<any[]>([]);
    useEffect(() => {
        async function fetchData() {
            const data = await getAllListeningTests();
            setTests(data);
        }
        fetchData();
    }, []);

    return (
        <div className="w-full h-screen flex items-center justify-center flex-col p-4">
            <div className="Gregorian text-2xl m-5">Listening Practice</div>
            {tests.length > 0 ? (
                <div className="w-full h-full gap-10 grid grid-cols-4">
                    {tests.map((test, index) => (
                        <div
                            className="w-full h-fit flex justify-between flex-col p-2"
                            key={index}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle className="w-full tracking-wide">
                                        {test.title}
                                    </CardTitle>
                                    <CardDescription>
                                        Questions number {test.totalQuestions}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>{test.complete ? "Completed" : "Not Completed"}</p>
                                    <p>Duration : {test.duration}min</p>
                                    <div>Score {test.score}/{test.totalQuestions}</div>
                                </CardContent>
                                <CardFooter>
                                    <Button>
                                        <Link href={`listening/test/${test.id}`}>Start</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="w-full h-full flex justify-center items-center text-2xl">
                    Loading...
                </div>
            )}
        </div>
    );
}
