import Image from "next/image";
import image1 from "../../public/budgeting/380083674_3587836871536553_4322588588215582888_n.png";
import image2 from "../../public/budgeting/380128153_2112990239044386_4955342612160854094_n.png";
import image3 from "../../public/budgeting/380398519_6643289889085061_935674131080540467_n.png";
import Link from "next/link";
import CheckIcon from "@mui/icons-material/Check";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { TQuest } from "@/shared/types";
import { orderBy } from "lodash";

const Completed = <CheckIcon className="text-green-500" />;
const Unlocked = <LockOpenIcon className="text-blue-500" />;
const Locked = <LockIcon className="text-red-600" />;

export default function QuestGrid({ quests }: { quests: TQuest[] }) {
    const getIconForQuest = (quest: TQuest) => {
        if (quest.state === "completed") return Completed;
        const sameCategoryQuests = quests.filter(
            (rec) => rec.categoryId === quest.categoryId && rec.id !== quest.id
        );
        const lastQuest = sameCategoryQuests.find(
            (rec) => rec.order === quest.order - 1
        );
        console.log({ curr: quest.id, lastQuest });
        if (lastQuest === undefined || lastQuest.state === "completed")
            return Unlocked;
        return Locked;
    };

    return (
        <div className="max-w-2xl px-4mx-auto sm:px-6 lg:max-w-7xl lg:px-8 ">
            <div className="px-6 mx-auto w-7xl lg:px-0">
                <div className="grid max-w-2xl grid-cols-1 mx-auto mt-8 sm:mt-16 gap-x-8 gap-y-8 sm:gap-y-12 lg:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 drop-shadow-md">
                    {orderBy(quests, "order", "asc").map((quest) => (
                        <article
                            key={quest.id}
                            className="flex flex-col items-start justify-between overflow-hidden rounded-xl group"
                        >
                            <Link href={`/quests/${quest.id}`}>
                                <div className="relative w-full overflow-hidden">
                                    <Image
                                        src={image1}
                                        alt={quest.description}
                                        className="aspect-[16/9] object-cover sm:aspect-[2/1] lg:aspect-[5/2] group-hover:scale-110 sm:group-hover:scale-105 duration-300 z-0"
                                    />
                                </div>
                                <div className=" bg-white p-4 w-[100%]">
                                    <div className="relative group">
                                        <h1 className="mt-3 text-lg font-semibold leading-6 text-gray-900 bg-white group-hover:text-gray-600 flex">
                                            <span className="absolute inset-0" />
                                            {quest.name}
                                            <div className="grow" />
                                            {getIconForQuest(quest)}
                                        </h1>
                                        <h2 className="mt-2 text-sm leading-6 text-gray-600 bg-white line-clamp-3">
                                            {quest.description}
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
