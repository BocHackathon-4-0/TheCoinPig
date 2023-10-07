import Image from "next/image";
import image1 from "../../public/crypto/380173849_6568253836593706_8332946624679721441_n.png";
import image2 from "../../public/crypto/380331401_695846225791577_8260957516060948305_n.png";
import image3 from "../../public/crypto/380386416_915206660026012_7663609007230592654_n.png";
import Link from "next/link";
import CheckIcon from '@mui/icons-material/Check';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const quests = [
    {
        id: "1",
        title: "Crypto for Newbies",
        description: "Step into the future of money by learning what cryptocurrencies like Bitcoin and Ethereum are all about.",
        icon: image1,
        status: CheckIcon,
        css: 'text-green-500'
    },
    {
        id: "2",
        title: "Blockchain Unlocked",
        description: "Get the scoop on blockchain, the tech magic behind cryptocurrencies, and why it's more than just digital money.",
        icon: image2,
        status: LockOpenIcon,
        css: 'text-blue-500'
    },
    {
        id: "3",
        title: "Crypto Trading Tactics",
        description: "Master the art of trading cryptocurrencies and learn strategies to maximize your profits effectively.",
        icon: image3,
        status: LockIcon,
        css: 'text-red-600'
    },
];

export default function QuestGrid4() {
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
