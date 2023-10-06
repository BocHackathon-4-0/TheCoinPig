import { OverviewQuests } from "@/components/overview-quests";
import ArticlesGrid from "@/components/articles";

export default function Page() {
    return (
        <div className="relative w-full h-full overflow-y-auto pb-16">
            <div className="relative flex justify-center items-center">
                <div className="flex justify-end items-center w-[200px]">
                    <p className="text-black font-semibold text-lg">Budgeting</p>
                </div>
                <div className="w-[70%] overflow-y-auto">
                    <ArticlesGrid />
                </div>
            </div>
            <div className="relative flex justify-center items-center">
                 <div className="flex justify-end items-center w-[200px]">
                    <p className="text-black font-semibold text-lg">Investments</p>
                </div>
                <div className="w-[70%] overflow-y-auto">
                    <ArticlesGrid />
                </div>
            </div>
            <div className="relative flex justify-center items-center">
                <div className="flex justify-end items-center w-[200px]">
                    <p className="text-black font-semibold text-lg">Stocks and Crypto</p>
                </div>
                <div className="w-[70%] overflow-y-auto">
                    <ArticlesGrid />
                </div>
            </div>
        </div>
    );
}
