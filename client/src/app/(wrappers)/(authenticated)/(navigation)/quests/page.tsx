"use client";

import QuestGrid from "@/components/quest-grid";
import { useCookies } from "@/hooks/useCookies";
import { TQuest, TQuestCategory } from "@/shared/types";
import { apiFetch } from "@/shared/utils";
import { useEffect, useState } from "react";

export default function Page() {
    const [quests, setQuests] = useState<TQuest[]>([]);
    const [categories, setCategories] = useState<TQuestCategory[]>([]);
    const [cookies] = useCookies();

    useEffect(() => {
        apiFetch(`quests/get_quests/?user_id=${cookies.auth?.uid}`)
            .then((res) => res.json())
            .then((res) =>
                setQuests(
                    [
                        ...res.completed_quests.map((rec: any) => ({
                            ...rec,
                            state: "completed",
                        })),
                        ...res.not_completed_quests,
                    ].map(
                        (quest: any) =>
                            ({
                                id: quest.quest_id,
                                name: quest.quest_name,
                                description: quest.quest_description,
                                categoryId: quest.quest_category,
                                order: quest.quest_order,
                                state: quest.state,
                            } as TQuest)
                    )
                )
            );
        apiFetch("quests/get_quests_categories/")
            .then((res) => res.json())
            .then((res) => setCategories(res.categories));
    }, []);

    useEffect(() => console.log({ quests, categories }));

    return (
        <div className="relative w-full h-full overflow-y-auto pb-16">
            <div className="max-w-2xl mx-auto text-center">
                <p className="justify-center mt-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:justify-normal">
                    Quests
                </p>
            </div>
            {categories.map((category) => (
                <div
                    className="relative flex justify-center items-center"
                    key={category.id}
                >
                    <div className="justify-end items-center w-[200px]">
                        <div className="flex text-end justify-end">
                            <p className="text-black font-semibold text-4xl">
                                {category.title}
                            </p>
                        </div>
                        
                        <div className="w-full h-auto mt-2">
                            <p className="text-white font-semibold text-lg bg-green-500 rounded-xl p-2">
                                +10 Antamivi points
                            </p>
                        </div>
                    </div>
                    <div className="w-[70%] overflow-y-auto">
                        <QuestGrid
                            quests={quests.filter(
                                (rec) => rec.categoryId === category.id
                            )}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
