import { TInvestmentProduct } from "@/shared/types";
import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import BuyProductDialog from "@/components/buy-product-dialog";
import Image from "next/image";
import BOCIcon from '../../../../../../public/partners-logo/Bank_of_Cyprus-Logo.png';

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
                <h1 className="text-4xl font-extrabold text-gray-900 px-4 pt-16 pb-2 text-center">
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
                                                        href=""
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
                <div className="bg-white pt-8 pb-24">
                    <div className="mx-auto w-7xl px-4">
                        <h2 className="mx-auto text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                            Investment Options
                        </h2>
                        <div className="mt-16 rounded-xl bg-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:w-7xl">
                                <div className="p-8 sm:p-10 lg:flex-auto">
                                    <div className="flex items-center">
                                        <h3 className="text-4xl font-bold tracking-tight text-gray-900 mr-2">
                                            Notice Account | 
                                        </h3>
                                        <Image
                                            src={BOCIcon}
                                            alt="Bank of Cyprus logo"
                                            className="w-[240px] h-auto"
                                        />
                                    </div>
                                    <p className="mt-6 text-lg leading-7 text-gray-600">
                                        Notice accounts require advance notice for withdrawals, balancing accessibility with potentially higher interest rates.
                                    </p>
                                    <div className="mt-6 flex items-center gap-x-4">
                                        <h4 className="flex-none text-lg font-semibold leading-6 text-blue-600">
                                            Return frequency: 3 months
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
                                            Success rate: 100%
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
                                            Profit yield: 0.2-1.0%
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
                                            Fail rate: 0%
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
                                            Loss yield: 0%
                                        </li>
                                    </ul>
                                </div>
                                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                                    <div className="rounded-2xl bg-gradient-to-br from-white via-blue-100 to-white py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                        <div className="mx-auto max-w-xs px-8">
                                            <p className="text-base font-semibold text-gray-600">
                                                Minimum investment
                                            </p>
                                            <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                                <span className="text-5xl font-bold tracking-tight text-gray-900">
                                                    10
                                                </span>
                                                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                                                    Euro
                                                </span>
                                            </p>
                                            <a href="notice-account-creation" className="mt-10 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                                                Open account
                                            </a>
                                            <p className="mt-6 text-xs leading-5 text-gray-600">
                                                T & Cs apply.
                                            </p>
                                        </div>
                                    </div>
                                </div>
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
                                            Loss yield: {product.lossYield}
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
                                            <BuyProductDialog
                                                productId={product.id}
                                                productName={product.name}
                                            />
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
