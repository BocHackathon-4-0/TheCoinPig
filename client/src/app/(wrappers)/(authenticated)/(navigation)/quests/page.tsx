import QuestGrid from "@/components/quest-grid";
import QuestGrid2 from "@/components/quest-grid-2";
import QuestGrid3 from "@/components/quest-grid-3";
import QuestGrid4 from "@/components/quest-grid-4";

export default function Page() {
    return (
        <div className="relative w-full h-full overflow-y-auto pb-16">
            <div className="max-w-2xl mx-auto text-center">
                <p className="justify-center mt-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:justify-normal">
                    Quests
                </p>
            </div>
            <div className="relative flex justify-center items-center">
                <div className="justify-end items-center w-[200px]">
                    <p className="text-black font-semibold text-4xl">
                        Budgeting
                    </p>
                    <div className="w-full h-auto mt-2">
                        <p className="text-white font-semibold text-lg bg-green-500 rounded-xl p-2">
                            +10 Antamivi points
                        </p>
                    </div>
                </div>
                <div className="w-[70%] overflow-y-auto">
                    <QuestGrid />
                </div>
            </div>
            <div className="relative flex justify-center items-center">
                <div className="justify-end items-center w-[200px]">
                    <div className="w-full flex justify-end">
                        <p className="text-black font-semibold text-4xl">
                            Notice
                        </p>
                    </div>
                    <div className="w-full flex justify-end">
                        <p className="text-black font-semibold text-4xl">
                            Accounts
                        </p>
                    </div>
                    <div className="w-full h-auto mt-2">
                        <p className="text-white font-semibold text-lg bg-green-500 rounded-xl p-2">
                            +15 Antamivi points
                        </p>
                    </div>
                </div>
                <div className="w-[70%] overflow-y-auto">
                    <QuestGrid2 />
                </div>
            </div>
            <div className="relative flex justify-center items-center">
                <div className="justify-end items-center w-[200px]">
                    <div className="w-full flex justify-end">
                        <p className="text-black font-semibold text-4xl">
                            Investments
                        </p>
                    </div>
                    <div className="w-full h-auto mt-2">
                        <p className="text-white font-semibold text-lg bg-green-500 rounded-xl p-2">
                            +5 Antamivi points
                        </p>
                    </div>
                </div>
                <div className="w-[70%] overflow-y-auto">
                    <QuestGrid3 />
                </div>
            </div>
            <div className="relative flex justify-center items-center">
                <div className="justify-end items-center w-[200px]">
                    <div className="w-full flex justify-end">
                        <p className="text-black font-semibold text-4xl">
                            Crypto
                        </p>
                    </div>
                    <div className="w-full h-auto mt-2">
                        <p className="text-white font-semibold text-lg bg-green-500 rounded-xl p-2">
                            +10 Antamivi points
                        </p>
                    </div>
                </div>
                <div className="w-[70%] overflow-y-auto">
                    <QuestGrid4 />
                </div>
            </div>
        </div>
    );
}
