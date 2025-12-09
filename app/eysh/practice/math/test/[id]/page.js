"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getTestById } from "../../data";

export default function Math() {
  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTestById(params.id);
      setTest(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading</div>;

  return (
    <div className="pt-20">
      <div>{test.testTitle}</div>
      <div className="flex flex-col gap-10">
        {test.questions.map((question, index) => (
          <div className="border rounded-md p-5 bg-card" key={index}>
            <div>
              {question.number}. {question.question}
            </div>
            <div>
              {Object.entries(question.choices).map(([key, value], index) => (
                <div className=" ml-5" key={index}>
                  <label>
                    <input
                      type="radio"
                      name={question.number}
                      className="mr-2"
                    />
                    {key}. {value}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
