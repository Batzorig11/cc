"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { getTestById } from "../../data";

export default function Vocabulary() {
  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTestById(params.id);
      console.log("data", data);
      setTest(data);
      setLoading(false);
      console.log(data);
    };
    fetchData();
  }, [params.id]);

  if (loading) return <div>LOADING</div>;

  return (
    <div className="w-full px-10">
      <h1 className="text-3xl font-bold">{test.title}</h1>
      <div className="w-full p-10 grid grid-cols-4 gap-10">
        {test.vocabulary.map((word, index) => (
          <div className="border rounded-md bg-card p-5" key={index}>
            <div>
              Word : <span className="font-bold">{word.word}</span>
            </div>
            <div>Difficulty: {word.difficulty}</div>
            <div>Definition: {word.definition}</div>
            <div>Example: {word.example}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
