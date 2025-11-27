"use client";
import { useParams } from "next/navigation";
import { getTestById } from "../../data";
import { useEffect, useState } from "react";

export default function ReadingTest() {
  const params = useParams();
  const [test, setTest] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await getTestById(params.id);
      setTest(data);
    }
    fetchData();
  }, []);

  return (
    <div className="w-full min-h-screen  text-2xl p-4 flex flex-col justify-center items-center">
      {test ? (
        <div>
          <div>{test.title}</div>
          <div className="flex w-full gap-10">
            <div className="w-full">{test.passages[0].text}</div>
            <div className="w-full">
              {test.passages[0].questions.map((question, index) => (
                <div key={index}>
                  <div>
                    {question.questionNumber} {question.question}
                  </div>
                  <div>
                    {question?.options?.map((option, index) => (
                      <div key={index}>{option}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
}
