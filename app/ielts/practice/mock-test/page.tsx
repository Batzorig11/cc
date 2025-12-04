"use client";
import { useEffect, useState } from "react";
import { getAllTests as getAllReadingTests } from "../reading/data";
import { getAllTests as getAllListeningTests } from "../listening/data";
import { getAllTests as getAllWritingTests } from "../writing/data";
import { getAllTests as getAllSpeakingTests } from "../speaking/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MockTest() {
  const [loading, setLoading] = useState(true);
  const [tests, setTests] = useState<any>({
    listening: null,
    reading: null,
    writing: null,
    speaking: null,
  });
  const [currentSection, setCurrentSection] = useState<
    "intro" | "listening" | "reading" | "writing" | "speaking" | "result"
  >("intro");
  const [timeLeft, setTimeLeft] = useState(0);
  const [answers, setAnswers] = useState<any>({});
  const [scores, setScores] = useState<any>({
    listening: 0,
    reading: 0,
    writing: "Pending",
    speaking: "Pending",
  });
  const [passageNum, setPassageNum] = useState(1); // For Reading section

  useEffect(() => {
    async function initTests() {
      const [readingTests, listeningTests, writingTests, speakingTests] =
        await Promise.all([
          getAllReadingTests(),
          getAllListeningTests(),
          getAllWritingTests(),
          getAllSpeakingTests(),
        ]);

      setTests({
        reading:
          readingTests[Math.floor(Math.random() * readingTests.length)],
        listening:
          listeningTests[Math.floor(Math.random() * listeningTests.length)],
        writing:
          writingTests[Math.floor(Math.random() * writingTests.length)],
        speaking:
          speakingTests[Math.floor(Math.random() * speakingTests.length)],
      });
      setLoading(false);
    }
    initTests();
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && currentSection !== "intro" && currentSection !== "result") {
      handleNextSection();
    }
  }, [timeLeft, currentSection]);

  const startTest = () => {
    setCurrentSection("listening");
    setTimeLeft(30 * 60); // 30 minutes for Listening
  };

  const handleNextSection = () => {
    if (currentSection === "listening") {
      calculateScore("listening");
      setCurrentSection("reading");
      setTimeLeft(60 * 60); // 60 minutes for Reading
      setPassageNum(1);
    } else if (currentSection === "reading") {
      calculateScore("reading");
      setCurrentSection("writing");
      setTimeLeft(60 * 60); // 60 minutes for Writing
    } else if (currentSection === "writing") {
      setCurrentSection("speaking");
      setTimeLeft(15 * 60); // 15 minutes for Speaking
    } else if (currentSection === "speaking") {
      setCurrentSection("result");
    }
  };

  const calculateScore = (section: "listening" | "reading") => {
    const currentTest = tests[section];
    let correctCount = 0;

    // Helper to check answers
    const checkAnswer = (question: any) => {
      if (question.correctAnswer) {
        const userAnswer = answers[question.id];
        if (!userAnswer) return false;

        if (question.type === "multiple-choice") {
          // Extract first letter if format is "A. Option"
          const firstLetter = userAnswer[0];
          return firstLetter === question.correctAnswer;
        } else if (question.type === "true-false-not-given") {
          return userAnswer === question.correctAnswer;
        } else {
          // Text comparison
          return userAnswer.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim();
        }
      } else if (question.correctAnswers) {
        // Matching questions
        let allCorrect = true;
        Object.entries(question.correctAnswers).forEach(([key, val]) => {
          if (answers[`${question.id}-${key}`] !== val) allCorrect = false;
        });
        return allCorrect; // This is strict, maybe partial credit? Keeping simple for now.
        // Actually, usually each match is 1 point. Let's count points, not just full question correctness.
      }
      return false;
    };

    if (section === "reading") {
      currentTest.passages.forEach((p: any) => {
        p.questions.forEach((q: any) => {
          if (q.correctAnswers) {
            Object.entries(q.correctAnswers).forEach(([key, val]) => {
              if (answers[`${q.id}-${key}`] === val) correctCount++;
            });
          } else {
            if (checkAnswer(q)) correctCount++;
          }
        });
      });
    } else if (section === "listening") {
      currentTest.sections.forEach((s: any) => {
        s.questions.forEach((q: any) => {
          if (checkAnswer(q)) correctCount++;
        });
      });
    }

    setScores((prev: any) => ({ ...prev, [section]: correctCount }));
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  if (loading) return <div className="flex h-screen items-center justify-center">Loading Test...</div>;

  return (
    <div className="min-h-screen p-4 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-6 p-4 border rounded-lg bg-card shadow-sm">
        <h1 className="text-2xl font-bold">IELTS Mock Test</h1>
        <div className="flex gap-4 items-center">
          <span className="font-semibold capitalize text-lg text-primary">Section: {currentSection}</span>
          {currentSection !== "intro" && currentSection !== "result" && (
            <span className={`font-mono text-xl ${timeLeft < 300 ? 'text-red-500' : ''}`}>
              Time Left: {formatTime(timeLeft)}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="w-full max-w-6xl flex-1">

        {/* INTRO */}
        {currentSection === "intro" && (
          <Card className="max-w-2xl mx-auto mt-10">
            <CardHeader>
              <CardTitle>Welcome to the Full Mock Test</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>This mock test consists of 4 sections in the following order:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Listening:</strong> 30 minutes</li>
                <li><strong>Reading:</strong> 60 minutes</li>
                <li><strong>Writing:</strong> 60 minutes</li>
                <li><strong>Speaking:</strong> 11-14 minutes</li>
              </ul>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-md border border-yellow-200 dark:border-yellow-800">
                <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                  Note: This is a simulation. Writing and Speaking sections are not graded automatically.
                </p>
              </div>
              <Button size="lg" className="w-full mt-4" onClick={startTest}>Start Mock Test</Button>
            </CardContent>
          </Card>
        )}

        {/* LISTENING */}
        {currentSection === "listening" && tests.listening && (
          <div className="space-y-6">
            <div className="bg-muted p-4 rounded-md">
              <h2 className="text-xl font-bold mb-2">{tests.listening.title}</h2>
              <p>Audio would play here for each section.</p>
            </div>
            {tests.listening.sections.map((section: any) => (
              <Card key={section.id} className="mb-6">
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                  <div className="text-sm text-muted-foreground bg-muted p-2 rounded mt-2">
                    <strong>Transcript (Simulation):</strong> {section.audioTranscript}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {section.questions.map((q: any) => (
                    <QuestionItem key={q.id} question={q} answers={answers} setAnswers={setAnswers} />
                  ))}
                </CardContent>
              </Card>
            ))}
            <div className="flex justify-end">
              <Button onClick={handleNextSection}>Submit Listening & Continue</Button>
            </div>
          </div>
        )}

        {/* READING */}
        {currentSection === "reading" && tests.reading && (
          <div className="flex gap-6 h-[calc(100vh-200px)]">
            {/* Passage Text */}
            <div className="w-1/2 h-full overflow-y-auto p-4 border rounded-md bg-card">
              <div className="flex gap-2 mb-4 sticky top-0 bg-card py-2 border-b">
                {tests.reading.passages.map((p: any, idx: number) => (
                  <Button
                    key={p.id}
                    variant={passageNum === idx + 1 ? "default" : "outline"}
                    onClick={() => setPassageNum(idx + 1)}
                    size="sm"
                  >
                    Passage {idx + 1}
                  </Button>
                ))}
              </div>
              <h2 className="text-xl font-bold mb-4">{tests.reading.passages[passageNum - 1].title}</h2>
              <div className="space-y-4 text-justify">
                {tests.reading.passages[passageNum - 1].text.split("\n\n").map((para: string, i: number) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Questions */}
            <div className="w-1/2 h-full overflow-y-auto p-4 border rounded-md bg-card">
              <h3 className="font-bold mb-4 sticky top-0 bg-card py-2 border-b">Questions</h3>
              <div className="space-y-6">
                {tests.reading.passages[passageNum - 1].questions.map((q: any) => (
                  <QuestionItem key={q.id} question={q} answers={answers} setAnswers={setAnswers} />
                ))}
              </div>
              <div className="mt-8 flex justify-end">
                <Button onClick={handleNextSection}>Submit Reading & Continue</Button>
              </div>
            </div>
          </div>
        )}

        {/* WRITING */}
        {currentSection === "writing" && tests.writing && (
          <div className="space-y-8">
            {tests.writing.tasks.map((task: any) => (
              <Card key={task.id}>
                <CardHeader>
                  <CardTitle>Task {task.taskNumber} ({task.type})</CardTitle>
                  <div className="text-sm text-muted-foreground">Word Limit: {task.wordLimit}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted p-4 rounded-md whitespace-pre-wrap">
                    {task.instructions}
                  </div>
                  {task.chartData && (
                    <div className="p-4 border rounded bg-white dark:bg-black">
                      <pre className="text-xs">{JSON.stringify(task.chartData, null, 2)}</pre>
                      <p className="text-xs text-muted-foreground mt-2">Chart visualization placeholder</p>
                    </div>
                  )}
                  <Textarea
                    placeholder="Type your answer here..."
                    className="min-h-[300px]"
                    value={answers[task.id] || ""}
                    onChange={(e) => setAnswers({ ...answers, [task.id]: e.target.value })}
                  />
                  <div className="text-right text-sm text-muted-foreground">
                    Word count: {answers[task.id] ? answers[task.id].trim().split(/\s+/).length : 0}
                  </div>
                </CardContent>
              </Card>
            ))}
            <div className="flex justify-end">
              <Button onClick={handleNextSection}>Submit Writing & Continue</Button>
            </div>
          </div>
        )}

        {/* SPEAKING */}
        {currentSection === "speaking" && tests.speaking && (
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>{tests.speaking.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {tests.speaking.parts.map((part: any) => (
                  <div key={part.id} className="border-b pb-6 last:border-0">
                    <h3 className="text-lg font-bold mb-2">Part {part.partNumber}: {part.title}</h3>
                    <p className="text-muted-foreground mb-4">{part.instructions}</p>

                    {part.cueCard ? (
                      <div className="bg-muted p-4 rounded-md mb-4">
                        <h4 className="font-bold">{part.cueCard.topic}</h4>
                        <ul className="list-disc list-inside mt-2">
                          {part.cueCard.prompts.map((p: string, i: number) => (
                            <li key={i}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {part.questions.map((q: any) => (
                          <div key={q.id} className="p-3 bg-secondary/20 rounded">
                            <span className="font-medium">{q.question}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-md border border-yellow-200 dark:border-yellow-800">
                  <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                    In a real test, you would be recording your answers. For this practice, please speak your answers aloud.
                  </p>
                </div>
                <Button className="w-full" size="lg" onClick={handleNextSection}>Finish Test</Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* RESULT */}
        {currentSection === "result" && (
          <Card className="max-w-2xl mx-auto mt-10">
            <CardHeader>
              <CardTitle className="text-center text-3xl">Test Complete!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border rounded-md text-center">
                  <div className="text-muted-foreground">Listening Score</div>
                  <div className="text-3xl font-bold text-primary">{scores.listening} / 40</div>
                </div>
                <div className="p-4 border rounded-md text-center">
                  <div className="text-muted-foreground">Reading Score</div>
                  <div className="text-3xl font-bold text-primary">{scores.reading} / 40</div>
                </div>
                <div className="p-4 border rounded-md text-center">
                  <div className="text-muted-foreground">Writing</div>
                  <div className="text-xl font-bold text-yellow-600">{scores.writing}</div>
                </div>
                <div className="p-4 border rounded-md text-center">
                  <div className="text-muted-foreground">Speaking</div>
                  <div className="text-xl font-bold text-yellow-600">{scores.speaking}</div>
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <Button asChild variant="outline">
                  <Link href="/ielts/practice">Back to Practice</Link>
                </Button>
                <Button onClick={() => window.location.reload()}>Take Another Test</Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

// Reusable Question Component
function QuestionItem({ question, answers, setAnswers }: { question: any, answers: any, setAnswers: any }) {
  const handleChange = (key: string, value: any) => {
    setAnswers((prev: any) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="mb-4">
      <div className="font-medium mb-2">
        {question.questionNumber}. {question.question}
      </div>

      {question.type === "multiple-choice" && (
        <div className="space-y-2 ml-4">
          {question.options.map((opt: string) => (
            <label key={opt} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name={question.id}
                value={opt}
                checked={answers[question.id] === opt}
                onChange={(e) => handleChange(question.id, e.target.value)}
                className="w-4 h-4"
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      )}

      {question.type === "true-false-not-given" && (
        <div className="flex gap-4 ml-4">
          {["TRUE", "FALSE", "NOT GIVEN"].map((opt) => (
            <label key={opt} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name={question.id}
                value={opt}
                checked={answers[question.id] === opt}
                onChange={(e) => handleChange(question.id, e.target.value)}
                className="w-4 h-4"
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      )}

      {(question.type === "short-answer" || question.type === "sentence-completion") && (
        <div className="ml-4">
          <Input
            placeholder={`Answer (max ${question.wordLimit} words)`}
            value={answers[question.id] || ""}
            onChange={(e) => handleChange(question.id, e.target.value)}
            className="max-w-md"
          />
        </div>
      )}

      {question.type === "matching-information" && (
        <div className="ml-4 space-y-2">
          <div className="text-sm bg-muted p-2 rounded mb-2 whitespace-pre-wrap">{question.instruction}</div>
          {Object.keys(question.correctAnswers).map((key, idx) => (
            <div key={key} className="flex items-center gap-2">
              <span>{question.questionNumber + idx}. {key}</span>
              <Input
                className="w-16"
                placeholder="1-4"
                value={answers[`${question.id}-${key}`] || ""}
                onChange={(e) => handleChange(`${question.id}-${key}`, e.target.value)}
              />
            </div>
          ))}
        </div>
      )}

      {question.type === "matching-features" && (
        <div className="ml-4 space-y-2">
          <div className="border p-2 rounded mb-2">
            {Object.entries(question.features).map(([k, v]: any) => (
              <div key={k}>{k}. {v}</div>
            ))}
          </div>
          {Object.keys(question.correctAnswers).map((key, idx) => (
            <div key={key} className="flex items-center gap-2">
              <span className="flex-1">{question.questionNumber + idx}. {key}</span>
              <Input
                className="w-16"
                value={answers[`${question.id}-${key}`] || ""}
                onChange={(e) => handleChange(`${question.id}-${key}`, e.target.value)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
