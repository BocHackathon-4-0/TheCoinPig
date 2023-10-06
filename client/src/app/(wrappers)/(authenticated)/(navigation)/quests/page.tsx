import QuestGrid from "@/components/quest-grid";

export default function Page() {
    return (
        <div className="relative w-full h-full overflow-y-auto pb-16">
            <div className="max-w-2xl mx-auto text-center">
                <p className="justify-center mt-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:justify-normal">
                    Quests
                </p>
            </div>
            <div className="relative flex justify-center items-center">
                <div className="flex justify-end items-center w-[200px]">
                    <p className="text-black font-semibold text-lg">
                        Budgeting
                    </p>
                </div>
                <div className="w-[70%] overflow-y-auto">
                    <QuestGrid />
                </div>
            </div>
            <div className="relative flex justify-center items-center">
                <div className="flex justify-end items-center w-[200px]">
                    <p className="text-black font-semibold text-lg">
                        Investments
                    </p>
                </div>
                <div className="w-[70%] overflow-y-auto">
                    <QuestGrid />
                </div>
            </div>
            <div className="relative flex justify-center items-center">
                <div className="flex justify-end items-center w-[200px]">
                    <p className="text-black font-semibold text-lg">
                        Stocks and Crypto
                    </p>
                </div>
                <div className="w-[70%] overflow-y-auto">
                    <QuestGrid />
                </div>
            </div>
        </div>
    );
}
