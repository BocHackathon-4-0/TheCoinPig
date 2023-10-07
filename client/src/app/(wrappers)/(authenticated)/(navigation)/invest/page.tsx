import { TInvestmentProduct } from "@/shared/types";
import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

type TPortfolio = {
    name: string;
    amount: string;
    startDate: number;
    productId: string;
}[];

const portfolio: TPortfolio = [
    {
        name: "Portfolio 1",
        amount: "1000",
        startDate: 1641043200000, // Timestamp for January 1, 2023
        productId: "1",
    },
    {
        name: "Portfolio 2",
        amount: "2000",
        startDate: 1640025600000, // Timestamp for December 21, 2022
        productId: "2",
    },
    {
        name: "Portfolio 3",
        amount: "1500",
        startDate: 1645324800000, // Timestamp for February 20, 2023
        productId: "3",
    },
    {
        name: "Portfolio 4",
        amount: "3000",
        startDate: 1646836800000, // Timestamp for March 10, 2023
        productId: "4",
    },
    {
        name: "Portfolio 5",
        amount: "500",
        startDate: 1636099200000, // Timestamp for November 5, 2022
        productId: "5",
    },
];

const investmentProducts: TInvestmentProduct[] = [
    {
        id: "1",
        name: "Product A",
        description: "This is Product A",
        successRate: 0.75,
        profitYield: 0.1,
        neutralRate: 0.15,
        failRate: 0.1,
        lossYield: -0.05,
        frequencyRate: "3 days",
    },
    {
        id: "2",
        name: "Product B",
        description: "This is Product B",
        successRate: 0.8,
        profitYield: 0.12,
        neutralRate: 0.1,
        failRate: 0.08,
        lossYield: -0.07,
        frequencyRate: "2 weeks",
    },
    {
        id: "3",
        name: "Product C",
        description: "This is Product C",
        successRate: 0.65,
        profitYield: 0.09,
        neutralRate: 0.2,
        failRate: 0.15,
        lossYield: -0.08,
        frequencyRate: "1 month",
    },
    {
        id: "4",
        name: "Product D",
        description: "This is Product D",
        successRate: 0.9,
        profitYield: 0.15,
        neutralRate: 0.05,
        failRate: 0.05,
        lossYield: -0.1,
        frequencyRate: "1 week",
    },
    {
        id: "5",
        name: "Product E",
        description: "This is Product E",
        successRate: 0.7,
        profitYield: 0.11,
        neutralRate: 0.18,
        failRate: 0.12,
        lossYield: -0.06,
        frequencyRate: "2 days",
    },
];

export default function Page() {
    return (
        <div className="overflow-y-auto h-full">
            <div className="flex-col items-center mx-auto justify-center max-w-7xl shadow-sm">
                <h1 className="text-3xl font-extrabold text-gray-900 px-4 pt-16">
                    My Portfolio
                </h1>
                <div className="flex items-center">
                    <div className="p-4 w-full">
                        <div className="flex flex-row overflow-x-auto gap-4 p-2">
                            {portfolio.map((investment) => (
                                <div className="flex-grow w-auto">
                                    <div className="flex flex-row bg-gray-200 shadow-sm rounded-xl p-4">
                                        <div className="flex flex-col flex-grow ml-4">
                                            <div className="text-sm text-gray-500">
                                                <div className="">
                                                    <a
                                                        href="#"
                                                        className="inline-block rounded-full text-white bg-blue-700 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1"
                                                    >
                                                        {investment.name}
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="font-bold text-lg text-black">
                                                €{investment.amount}
                                            </div>
                                            <span className="text-red-500">
                                                {new Date(
                                                    investment.startDate
                                                ).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <h1 className="text-3xl font-extrabold text-gray-900 px-4 pt-8 pb-4">
                    Compare The Market
                </h1>
                <header className="flex-none flex px-4 items-center">
                    <a
                        href="#"
                        className="inline-block rounded-full text-blue-700 bg-blue-100 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1"
                    >
                        United States
                    </a>
                    <a
                        href="#"
                        className="inline-block rounded-full text-black bg-white text-xs mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1"
                    >
                        Asia
                    </a>
                    <a
                        href="#"
                        className="inline-block rounded-full text-black bg-white text-xs mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1"
                    >
                        Europe
                    </a>
                    <a
                        href="#"
                        className="inline-block rounded-full text-black bg-white text-xs mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1"
                    >
                        Currency
                    </a>
                    <a
                        href="#"
                        className="inline-block rounded-full text-black bg-white text-xs mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1"
                    >
                        Crypto
                    </a>
                </header>
                <div className="flex items-center">
                    <div className="p-4 w-full">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 sm:col-span-6 md:col-span-3">
                                <div className="flex flex-row bg-gray-200 shadow-sm rounded-xl p-4">
                                    <div className="flex flex-col flex-grow ml-4">
                                        <div className="text-sm text-gray-500">
                                            <div className="col-span-12 lg:col-span-8">
                                                <a
                                                    href="#"
                                                    className="inline-block rounded-full text-white bg-blue-700 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1"
                                                >
                                                    Savas with 1 v
                                                </a>
                                            </div>
                                        </div>
                                        <div className="font-bold text-lg text-black">
                                            €91,000.00
                                        </div>
                                        <span className="text-red-500">
                                            ▲ 2.48%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 md:col-span-3">
                                <div className="flex flex-row bg-gray-200 shadow-sm rounded-xl p-4">
                                    <div className="flex flex-col flex-grow ml-4">
                                        <div className="text-sm text-gray-500">
                                            <div className="col-span-12 lg:col-span-8">
                                                <a
                                                    href="#"
                                                    className="inline-block rounded-full text-white bg-black text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1"
                                                >
                                                    Farail
                                                </a>
                                            </div>
                                        </div>
                                        <div className="font-bold text-lg text-black">
                                            €880.02
                                        </div>
                                        <span className="text-gray-500">
                                            - 0.00%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 md:col-span-3">
                                <div className="flex flex-row bg-gray-200 shadow-sm rounded-xl p-4">
                                    <div className="flex flex-col flex-grow ml-4">
                                        <div className="text-sm text-gray-500">
                                            <div className="col-span-12 lg:col-span-8">
                                                <a
                                                    href="#"
                                                    className="inline-block rounded-full text-black ring-black ring-2 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1"
                                                >
                                                    Nikkolas
                                                </a>
                                            </div>
                                        </div>
                                        <div className="font-bold text-lg text-black">
                                            €3,148.45
                                        </div>
                                        <span className="text-blue-500">
                                            ▼ 0.12%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button className="col-span-12 sm:col-span-6 md:col-span-3 group">
                                <div className="flex flex-row bg-white shadow-sm rounded-xl">
                                    <div
                                        id="empty-cover-art"
                                        className="py-5 h-full rounded-xl sm:w-full text-center opacity-50 md:border-solid md:border-2 md:border-gray-400"
                                    >
                                        <center>
                                            <svg
                                                width="48"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="text-black group-hover:scale-125 duration-300"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                                />
                                            </svg>
                                        </center>
                                        <div className="text-black">
                                            See More
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div> */}
                <div className="bg-white pt-8 pb-24">
                    <div className="mx-auto w-7xl px-4">
                        <div className=" max-w-2xl">
                            <h2 className="mx-auto text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Purchase Options
                            </h2>
                        </div>
                        {investmentProducts.map((product) => (
                            <div className="mt-16 rounded-xl bg-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:w-7xl">
                                <div className="p-8 sm:p-10 lg:flex-auto">
                                    <h3 className="text-4xl font-bold tracking-tight text-gray-900">
                                        {product.name}
                                    </h3>
                                    <p className="mt-6 text-lg leading-7 text-gray-600">
                                        {product.description}
                                    </p>
                                    <div className="mt-6 flex items-center gap-x-4">
                                        <h4 className="flex-none text-lg font-semibold leading-6 text-blue-600">
                                            Return frequency:{" "}
                                            {product.frequencyRate}
                                        </h4>
                                    </div>
                                    <ul
                                        role="list"
                                        className="mt-8 grid grid-cols-1 gap-4 text-xl leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                                    >
                                        <li className="flex gap-x-3">
                                            <svg
                                                className="h-6 w-5 flex-none text-blue-600"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <ThumbUpIcon />
                                            </svg>
                                            Success rate: {product.successRate}
                                        </li>
                                        <li className="flex gap-x-3">
                                            <svg
                                                className="h-6 w-5 flex-none text-blue-600"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <TrendingUpIcon />
                                            </svg>
                                            Profit yield: {product.profitYield}
                                        </li>
                                        <li className="flex gap-x-3">
                                            <svg
                                                className="h-6 w-5 flex-none text-blue-600"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <ThumbDownIcon />
                                            </svg>
                                            Fail rate: {product.failRate}
                                        </li>
                                        <li className="flex gap-x-3">
                                            <svg
                                                className="h-6 w-5 flex-none text-blue-600"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <TrendingDownIcon />
                                            </svg>
                                            Loss yield{product.lossYield}
                                        </li>
                                    </ul>
                                </div>
                                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                                    <div className="rounded-2xl bg-gradient-to-br from-white via-blue-100 to-white py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                        <div className="mx-auto max-w-xs px-8">
                                            <p className="text-base font-semibold text-gray-600">
                                                Currently invested
                                            </p>
                                            <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                                <span className="text-5xl font-bold tracking-tight text-gray-900">
                                                    {portfolio.find(
                                                        (rec) =>
                                                            rec.productId ===
                                                            product.id
                                                    )?.amount ?? 0}
                                                </span>
                                                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                                                    Euro
                                                </span>
                                            </p>
                                            <a
                                                href="#"
                                                className="mt-10 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                            >
                                                Invest
                                            </a>
                                            <p className="mt-6 text-xs leading-5 text-gray-600">
                                                T & Cs apply.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
