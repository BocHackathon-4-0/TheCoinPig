"use client";

import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { TQuestion, TQuestionOption, TQuiz } from "@/shared/types";
import QuizQuestion from "@/components/quiz-question";
import { useSnackbar } from "notistack";
import { apiFetch } from "@/shared/utils";
import { useCookies } from "@/hooks/useCookies";
import { useRouter } from "next/navigation";

type TQuizPageParams = {
    params: { questId: string };
};

type TQuizProcess = {
    [questionId: number]: number;
};

export default function QuizPage({ params: { questId } }: TQuizPageParams) {
    const [quiz, setQuiz] = useState<TQuiz>();
    const [quizProcess, setQuizProcess] = useState<TQuizProcess>({});
    const { enqueueSnackbar } = useSnackbar();
    const [cookies] = useCookies();
    const router = useRouter();

    useEffect(() => {
        apiFetch(`quests/get_quest_quiz/?quest_id=${questId}`)
            .then((res) => res.json())
            .then((res) =>
                setQuiz({
                    title: res.quiz.name,
                    questions: res.questions.map((question: any) => ({
                        questionId: question.question_id,
                        question: question.question,
                        options: question.answers.map((answer: any) => ({
                            id: answer.id,
                            text: answer.answer,
                        })),
                        answerId: question.correct_answer_id,
                    })),
                })
            );
    }, []);

    const handleQuizChange = (questionId: number, responseId: number) => {
        setQuizProcess((curr) => {
            return {
                ...curr,
                [questionId]: responseId,
            };
        });
    };

    const handleSubmit = async () => {
        if (quiz === undefined) return;
        const hasPassed = Object.entries(quizProcess).every(
            ([questionId, responseId]) => {
                const question = quiz.questions.find(
                    (rec) => rec.questionId === Number(questionId)
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
        await apiFetch("quests/set_completed_quest/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: cookies.auth?.uid,
                quest_id: questId,
            }),
        })
            .then((res) => res.json())
            .then((res) => console.log(res));
        router.push("/quests");
    };

    if (quiz === undefined) return <></>;

    return (
        <div className="h-full w-full bg-white flex flex-col items-center">
            <div className="overflow-y-auto p-4 w-full flex-grow flex flex-col items-center">
                <div className="max-w-7xl flex flex-col items-start">
                    <div className="py-8 mx-auto w-full">
                        <h1 className="text-3xl font-extrabold text-gray-900 my-2">
                            QUIZ: {quiz.title}
                        </h1>
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
