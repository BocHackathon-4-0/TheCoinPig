"use client";

import React from "react";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

type TQuestPageParams = {
    params: { questId: string };
};

export default function QuestPage({ params: { questId } }: TQuestPageParams) {
    const router = useRouter();
    const title: string = "TEST QUEST";
    const description: string = `
        HFUEOISALLF HUIOEASHFUIOESA HIFOUPAESHUIOF EAHSUIOFHUISAEHF
        USAHDUILOAHAF UIAEUIHOFSAUILHDF ILUASHUIFLADSHFUILDSAHUFILS
        DAHFUILSADHFUDISAL FDHSUAODHUASIODHUSHA UID HU ADSHUOIDASDS
        DHUSIAODHSAOLDHAS udosah DHOSUADDHDUSAHDSUAOI HUODSAHDOUIAS
        FHASFHOIUDHF DSFJFSDHNBJCDSBJKDCSJDCBNKOJUJAO DHJSAIDHOISAH
    `;

    return (
        <div className="h-full w-full bg-white flex flex-col">
            <div className="overflow-y-auto flex-grow">
                <div className="py-8 px-4 sm:px-6 lg:px-8 mx-auto">
                    <h1 className="text-3xl font-extrabold text-gray-900 my-2">
                        {title}: {questId}
                    </h1>
                    <h2 className="text-lg text-gray-700 mb-16 break-words">
                        {description}
                    </h2>
                </div>
            </div>
            <div className="bg-gray-100 w-full h-20 p-2 flex flex-row justify-end items-center">
                <Button
                    variant="contained"
                    onClick={() => router.push(questId + "/quiz")}
                    className="h-full"
                >
                    <Typography variant="h4">Take Quiz</Typography>
                </Button>
            </div>
        </div>
    );
}
