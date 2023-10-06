import Image from "next/image";
import ArticleSampleImage1 from "../../public/article-sample-image-1.jpeg";
import ArticleSampleImage2 from "../../public/article-sample-image-2.jpeg";
import ArticleSampleImage3 from "../../public/article-sample-image-3.jpeg";
import Link from "next/link";

const quests = [
    {
        id: "1",
        title: "Title goes here",
        description: "Article description goes here",
        icon: ArticleSampleImage1,
    },
    {
        id: "2",
        title: "Title goes here",
        description: "Article description goes here",
        icon: ArticleSampleImage2,
    },
    {
        id: "3",
        title: "Title goes here",
        description: "Article description goes here",
        icon: ArticleSampleImage3,
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
                                        <h1 className="mt-3 text-lg font-semibold leading-6 text-gray-900 bg-white group-hover:text-gray-600">
                                            <span className="absolute inset-0" />
                                            {quest.title}
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