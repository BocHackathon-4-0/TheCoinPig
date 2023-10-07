import Image from "next/image";
import image1 from "../../public/budgeting/380083674_3587836871536553_4322588588215582888_n.png";
import image2 from "../../public/budgeting/380128153_2112990239044386_4955342612160854094_n.png";
import image3 from "../../public/budgeting/380398519_6643289889085061_935674131080540467_n.png";
import Link from "next/link";
import CheckIcon from '@mui/icons-material/Check';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const quests = [
    {
        id: "1",
        title: "Budgeting Basics for Teens",
        description: "Learn how to manage your money like a pro, whether it's your allowance or your first paycheck.",
        icon: image1,
        status: CheckIcon,
        css: 'text-green-500'
    },
    {
        id: "2",
        title: "Zero to Hero Budgeting",
        description: "Discover a cool way to budget from scratch and make the most out of every dollar you have available.",
        icon: image2,
        status: LockOpenIcon,
        css: 'text-blue-500'
    },
    {
        id: "3",
        title: "Tech-Savvy Budgeting",
        description: "Get the lowdown on using various apps and tech tools to keep track of your money and savings goals.",
        icon: image3,
        status: LockIcon,
        css: 'text-red-600'
    },
];

export default function QuestGrid() {
    return (
        <div className="max-w-2xl px-4mx-auto sm:px-6 lg:max-w-7xl lg:px-8 ">
            <div className="px-6 mx-auto w-7xl lg:px-0">
                <div className="grid max-w-2xl grid-cols-1 mx-auto mt-8 sm:mt-16 gap-x-8 gap-y-8 sm:gap-y-12 lg:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 drop-shadow-md">
                    {quests.map((quest) => (
                        <article
                            key={quest.id}
                            className="flex flex-col items-start justify-between overflow-hidden rounded-xl group"
                        >
                            <Link href={`/quests/${quest.id}`}>
                                <div className="relative w-full overflow-hidden">
                                    <Image
                                        src={quest.icon}
                                        alt={quest.description}
                                        className="aspect-[16/9] object-cover sm:aspect-[2/1] lg:aspect-[5/2] group-hover:scale-110 sm:group-hover:scale-105 duration-300 z-0"
                                    />
                                </div>
                                <div className=" bg-white p-4 w-[100%]">
                                    <div className="relative group">
                                        <h1 className="mt-3 text-lg font-semibold leading-6 text-gray-900 bg-white group-hover:text-gray-600 flex">
                                            <span className="absolute inset-0" />
                                            {quest.title}
                                            <div className="grow" />
                                            <quest.status className={`${quest.css}`}/>
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
