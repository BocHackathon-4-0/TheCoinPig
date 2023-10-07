"use client";

import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { TQuestion, TQuestionOption, TQuiz } from "@/shared/types";
import QuizQuestion from "@/components/quiz-question";
import { useSnackbar } from "notistack";

type TQuizPageParams = {
    params: { questId: string };
};

type TQuizProcess = {
    [questionId: string]: string;
};

const questionOptions: TQuestionOption[] = [
    { id: "1", text: "Stocks" },
    { id: "2", text: "Bonds" },
    { id: "3", text: "Real Estate" },
    { id: "4", text: "Cryptocurrency" },
];

const quizQuestions: TQuestion[] = [
    {
        questionId: "1",
        question: "What is a common investment vehicle?",
        options: questionOptions,
        answerId: "1",
    },
    {
        questionId: "2",
        question: "Which investment is known for its fixed interest rate?",
        options: questionOptions,
        answerId: "2",
    },
    {
        questionId: "3",
        question: "Which investment involves purchasing physical properties?",
        options: questionOptions,
        answerId: "3",
    },
    {
        questionId: "4",
        question: "What is a digital or virtual form of currency?",
        options: questionOptions,
        answerId: "4",
    },
    {
        questionId: "5",
        question: "Which investment is associated with ownership in a company?",
        options: questionOptions,
        answerId: "1",
    },
];

const quiz: TQuiz = {
    questions: quizQuestions,
};

export default function QuizPage({ params: { questId } }: TQuizPageParams) {
    const [quizProcess, setQuizProcess] = useState<TQuizProcess>({});
    const { enqueueSnackbar } = useSnackbar();

    const handleQuizChange = (questionId: string, responseId: string) => {
        setQuizProcess((curr) => {
            return {
                ...curr,
                [questionId]: responseId,
            };
        });
    };

    const handleSubmit = () => {
        const hasPassed = Object.entries(quizProcess).every(
            ([questionId, responseId]) => {
                const question = quiz.questions.find(
                    (rec) => rec.questionId === questionId
                );
                if (question === undefined) return false;

                return question.answerId === responseId;
            }
        );

        if (!hasPassed) {
            enqueueSnackbar("You failed the quiz. Try again!", {
                variant: "error",
            });
            return;
        }

        enqueueSnackbar("You passed the quiz!", { variant: "success" });
        // TODO: QUIZ RESULT SUBMISSIO LOGIC HERE
    };

    return (
        <div className="h-full w-full bg-white flex flex-col items-center">
            <div className="overflow-y-auto p-4 w-full flex-grow flex flex-col items-center">
                <div className="max-w-7xl flex flex-col items-start">
                    <div className="py-8 mx-auto w-full">
                        <h1 className="text-3xl font-extrabold text-gray-900 my-2">
                            QUIZ: {questId}
                        </h1>
                        <h2 className="text-lg text-gray-700 mb-4 break-words">
                            TEST
                        </h2>
                    </div>
                    {quiz.questions.map((question) => (
                        <div className="p-4">
                            <QuizQuestion
                                options={question.options}
                                question={question.question}
                                onChange={(responseId) =>
                                    handleQuizChange(
                                        question.questionId,
                                        responseId
                                    )
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-gray-100 w-full h-20 p-2 flex flex-row justify-end items-center">
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    className="h-full"
                >
                    <Typography variant="h4">Submit</Typography>
                </Button>
            </div>
        </div>
    );
}
