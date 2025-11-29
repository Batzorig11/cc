"use client";
import { useParams } from "next/navigation";
import { getListeningTestById } from "../../data";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../../../../../components/mode-toggle";
import Link from "next/link";

export default function ListeningTest() {
    const [start, setStart] = useState(false);
    const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes for listening
    const [answers, setAnswers] = useState({});
    const params = useParams();
    const [passageNum, setPassageNum] = useState(1);
    const [test, setTest] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (!start || submitted) return;
        if (timeLeft <= 0) {
            onSubmit();
            return;
        }

        const timer = setTimeout(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft, start]);

    useEffect(() => {
        async function fetchData() {
            const data = await getListeningTestById(params.id);
            setTest(data);
        }
        fetchData();
    }, []);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const onSubmit = () => {
        let correctAnswersCount = 0;
        console.log(answers);

        test.passages.forEach((passage) => {
            passage.questions.forEach((question) => {

                // Handle questions with single correctAnswer
                if (question.correctAnswer) {
                    const userAnswer = answers[question.id];

                    if (question.type === "multiple-choice") {
                        // Extract first letter from "A. Some option text"
                        const firstLetter = userAnswer ? userAnswer[0] : null;

                        if (firstLetter === question.correctAnswer) {
                            correctAnswersCount++;
                            console.log(`Q${question.questionNumber} ✓ Correct`);
                        } else {
                            console.log(`Q${question.questionNumber} ✗ Wrong - Your: ${firstLetter}, Correct: ${question.correctAnswer}`);
                        }
                    }
                    else if (question.type === "true-false-not-given") {
                        if (userAnswer === question.correctAnswer) {
                            correctAnswersCount++;
                            console.log(`Q${question.questionNumber} ✓ Correct`);
                        } else {
                            console.log(`Q${question.questionNumber} ✗ Wrong - Your: ${userAnswer}, Correct: ${question.correctAnswer}`);
                        }
                    }
                    else if (question.type === "sentence-completion" || question.type === "short-answer") {
                        // For text answers, you might want to do case-insensitive comparison
                        const userAnswerLower = userAnswer?.toLowerCase().trim();
                        const correctAnswerLower = question.correctAnswer.toLowerCase().trim();

                        if (userAnswerLower === correctAnswerLower) {
                            correctAnswersCount++;
                            console.log(`Q${question.questionNumber} ✓ Correct`);
                        } else {
                            console.log(`Q${question.questionNumber} ✗ Wrong - Your: ${userAnswer}, Correct: ${question.correctAnswer}`);
                        }
                    }
                }
                // Handle questions with multiple correctAnswers (matching questions)
                else if (question.correctAnswers) {
                    Object.entries(question.correctAnswers).forEach(([key, correctValue]) => {
                        const userAnswer = answers[`${question.id}-${key}`];

                        if (userAnswer === correctValue) {
                            correctAnswersCount++;
                            console.log(`Q${question.questionNumber} (${key}) ✓ Correct`);
                        } else {
                            console.log(`Q${question.questionNumber} (${key}) ✗ Wrong - Your: ${userAnswer}, Correct: ${correctValue}`);
                        }
                    });
                }
            });
        });

        console.log(`\nTotal Score: ${correctAnswersCount} / ${test.totalQuestions}`);
        setSubmitted(true);
        setScore(correctAnswersCount);
        return correctAnswersCount;
    }

    if (!start && test) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <div className="max-w-2xl w-full mx-4 p-8 bg-card border rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold mb-4">{test.title}</h1>

                    <div className="space-y-4 mb-6">
                        <div className="flex justify-between items-center p-4 bg-muted rounded-md">
                            <span className="font-semibold">Duration:</span>
                            <span>{test.duration} minutes</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-muted rounded-md">
                            <span className="font-semibold">Total Questions:</span>
                            <span>{test.totalQuestions}</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-muted rounded-md">
                            <span className="font-semibold">Number of Sections:</span>
                            <span>{test.passages.length}</span>
                        </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-md p-4 mb-6">
                        <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">Instructions:</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-yellow-700 dark:text-yellow-300">
                            <li>Listen to each section carefully before answering questions</li>
                            <li>You have {test.duration} minutes to complete all sections</li>
                            <li>The timer will start immediately when you click "Start Test"</li>
                            <li>You can navigate between sections using the buttons</li>
                            <li>Make sure to submit before time runs out</li>
                        </ul>
                    </div>

                    <Button
                        onClick={() => setStart(true)}
                        className="w-full text-lg py-6"
                        size="lg"
                    >
                        Start Test
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen p-4 flex flex-col justify-center items-center ">

            {
                test ? (
                    <div>
                        <div className="font-bold text-2xl mb-5 flex justify-between items-center">
                            {test.title} <ModeToggle />
                            <div>
                                {submitted && <div>Score: {score}/{test.totalQuestions}</div>}
                            </div>
                        </div>
                        <div className="w-full flex justify-between my-4 px-4 py-2 border rounded-md">
                            <div className="flex gap-2 items-center">
                                Section :{" "}
                                {test.passages.map((_, index) => (
                                    <Button
                                        key={index}
                                        className={passageNum === index + 1 ? `bg-primary/85` : ``}
                                        onClick={() => setPassageNum(index + 1)}
                                    >
                                        {index + 1}
                                    </Button>
                                ))}
                            </div>

                            <div>
                                <div>Time Left: {minutes}:{seconds.toString().padStart(2, '0')}</div>
                                {submitted ? <Button className="w-full"><Link href="/ielts/practice/listening">End</Link></Button> : <Button className="w-full" onClick={() => onSubmit()}>Submit</Button>}
                            </div>
                        </div>
                        {/*---PASSAGE-SECTION---*/}
                        <div className="flex w-full gap-10">
                            <div className="w-full bg-card border rounded-md p-5 h-fit sticky top-10">
                                <h3 className="text-xl font-bold">
                                    {test.passages[passageNum - 1].title}
                                </h3>
                                <div className="mt-5 space-y-4 flex justify-center">
                                    {test.passages[passageNum - 1].audioUrl.includes("iframeembed=true") ? (
                                        <iframe
                                            key={test.passages[passageNum - 1].audioUrl}
                                            src={test.passages[passageNum - 1].audioUrl}
                                            className="w-full h-[56px]"
                                            allow="autoplay *; fullscreen *; encrypted-media *"
                                        />
                                    ) : (
                                        <audio
                                            key={test.passages[passageNum - 1].audioUrl}
                                            controls
                                            src={test.passages[passageNum - 1].audioUrl}
                                            className="w-full"
                                        />
                                    )}
                                </div>
                                {/* Optional Transcript Display */}
                                {submitted && test.passages[passageNum - 1].transcript && (
                                    <div className="mt-5 p-4 bg-muted rounded-md">
                                        <h4 className="font-bold mb-2">Transcript:</h4>
                                        <p className="whitespace-pre-wrap text-sm">{test.passages[passageNum - 1].transcript}</p>
                                    </div>
                                )}
                            </div>
                            {/*---QUESTION-SECTION---*/}
                            <div className="w-full border bg-card rounded-md p-5 overflow-auto">
                                {test.passages[passageNum - 1].questions.map(
                                    (question, index) => (
                                        <div key={index}>
                                            <div className="font-bold">
                                                {question.questionNumber}. {question.question}
                                            </div>
                                            <div className="ml-5">
                                                {/*---MULTIPLE-CHOICE---*/}
                                                <div>
                                                    {submitted && question.correctAnswer ? <div className="font-bold my-2 mx-4">Correct Answer : <span className="text-green-600">{question.correctAnswer}</span></div> : ""}

                                                    {question.type === "multiple-choice" &&
                                                        question?.options?.map((option, index) => (
                                                            <div className="m-2" key={index}>
                                                                <label className="py-2 px-4">
                                                                    <input
                                                                        value={option}
                                                                        onChange={(e) => setAnswers({ ...answers, [question.id]: e.target.value })}
                                                                        checked={answers[question.id] === option}
                                                                        className="mr-2"
                                                                        type="radio"
                                                                        name={question.id}
                                                                    />
                                                                    {option}
                                                                </label>
                                                            </div>
                                                        ))}
                                                </div>
                                                {/*---TRUE-FALSE-NOT-GIVEN---*/}
                                                {question.type === "true-false-not-given" && (
                                                    <div className="flex justify-start m-2">
                                                        <label className="px-4 py-2">
                                                            <input
                                                                className="mr-2"
                                                                type="radio"
                                                                name={question.id}
                                                                value="TRUE"
                                                                checked={answers[question.id] === "TRUE"}
                                                                onChange={(e) => setAnswers({ ...answers, [question.id]: "TRUE" })}
                                                            />
                                                            True
                                                        </label>
                                                        <label className="px-4 py-2">
                                                            <input
                                                                className="mr-2"
                                                                type="radio"
                                                                name={question.id}
                                                                value="FALSE"
                                                                checked={answers[question.id] === "FALSE"}
                                                                onChange={(e) => setAnswers({ ...answers, [question.id]: "FALSE" })}
                                                            />
                                                            False
                                                        </label>
                                                        <label className="px-4 py-2">
                                                            <input
                                                                className="mr-2"
                                                                type="radio"
                                                                name={question.id}
                                                                value="NOT GIVEN"
                                                                checked={answers[question.id] === "NOT GIVEN"}
                                                                onChange={(e) => setAnswers({ ...answers, [question.id]: "NOT GIVEN" })}
                                                            />
                                                            Not Given
                                                        </label>
                                                    </div>
                                                )}
                                                {/*---SENTENCE-COMPLETION---*/}
                                                {question.type === "sentence-completion" && (
                                                    <div className="m-2">
                                                        <Input
                                                            className="w-1/2 m-2"
                                                            value={answers[question.id] || ""}
                                                            onChange={(e) => setAnswers({ ...answers, [question.id]: e.target.value })}
                                                            placeholder={`Enter your answer (max ${question.wordLimit} words)`}
                                                        />
                                                        <p className="text-sm text-gray-500 ml-2">
                                                            Word limit: {question.wordLimit} word(s)
                                                        </p>
                                                    </div>
                                                )}
                                                {/*---MATCHING-INFORMATION---*/}
                                                {question.type === "matching-information" && (
                                                    <div>
                                                        {Object.entries(question.correctAnswers).map(
                                                            ([letter, paragraph], index) => {
                                                                const instructionLines = question.instruction.split("\n");
                                                                const matchingInstruction =
                                                                    instructionLines.find((line) =>
                                                                        line.trim().startsWith(`${letter}.`)
                                                                    ) || letter;
                                                                return (
                                                                    <div className="m-2" key={index}>
                                                                        <label className="flex items-center px-4">
                                                                            <span>
                                                                                {question.questionNumber + index}. {letter} -
                                                                            </span>
                                                                            <span className="flex-1">
                                                                                {matchingInstruction.replace(/^[A-Z]\.\s*/, "")}{" "}
                                                                            </span>
                                                                            <Input
                                                                                className="w-16 text-center"
                                                                                name={`${question.id}-${letter}`}
                                                                                value={answers[`${question.id}-${letter}`] || ""}
                                                                                placeholder="1-4"
                                                                                onChange={(e) =>
                                                                                    setAnswers({
                                                                                        ...answers,
                                                                                        [`${question.id}-${letter}`]: e.target.value
                                                                                    })
                                                                                }
                                                                            />
                                                                            {submitted && <div className="font-bold ml-2 text-green-600">{paragraph}</div>}
                                                                        </label>
                                                                    </div>
                                                                );
                                                            }
                                                        )}
                                                    </div>
                                                )}

                                                {/* SHORT-ANSWER */}
                                                {question.type === "short-answer" && (
                                                    <div className="m-2">
                                                        <Input
                                                            className="w-1/2"
                                                            value={answers[question.id] || ""}
                                                            placeholder={`Word limit: ${question?.wordLimit}`}
                                                            onChange={(e) =>
                                                                setAnswers({ ...answers, [question.id]: e.target.value })
                                                            }
                                                        />
                                                    </div>
                                                )}

                                                {/* MATCHING-FEATURES */}
                                                {question.type === "matching-features" && (
                                                    <div>
                                                        <div className="border rounded-md p-4 w-fit my-2">
                                                            {Object.entries(question.features).map(
                                                                ([key, value], index) => (
                                                                    <div key={index}>
                                                                        {key}. {value}
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                        {Object.keys(question.correctAnswers).map(
                                                            (answer, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="flex justify-between items-center"
                                                                >
                                                                    <span className="flex-1">
                                                                        {question.questionNumber + index}. {answer}
                                                                    </span>
                                                                    <Input
                                                                        className="w-16 mx-10 my-1"
                                                                        value={answers[`${question.id}-${answer}`] || ""}
                                                                        onChange={(e) =>
                                                                            setAnswers({
                                                                                ...answers,
                                                                                [`${question.id}-${answer}`]: e.target.value
                                                                            })
                                                                        }
                                                                    />
                                                                    {submitted && <div className="font-bold ml-2 text-green-600">{question.correctAnswers[answer]}</div>}
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    "Loading"
                )
            }
        </div >
    );
}
