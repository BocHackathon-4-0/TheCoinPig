"use client";

import { TInvestment, TInvestmentProduct } from "@/shared/types";
import React, { useEffect, useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import BuyProductDialog from "@/components/buy-product-dialog";
import Image from "next/image";
import BOCIcon from "../../../../../../public/partners-logo/Bank_of_Cyprus-Logo.png";
import { apiFetch } from "@/shared/utils";
import { useCookies } from "@/hooks/useCookies";
import Link from "next/link";
import { CircularProgress } from "@mui/material";

type TProductWithInvestment = TInvestmentProduct & {
    currentInvestment?: TInvestment;
};

export default function Page() {
    const [productsWithInvestment, setProductsWithInvestment] = useState<
        TProductWithInvestment[]
    >([]);
    const [cookies] = useCookies();

    useEffect(() => {
        apiFetch(`investments/getInvestments/?uid=${cookies.auth?.uid}`)
            .then((res) => res.json())
            .then((res) =>
                setProductsWithInvestment(
                    res.map(
                        (rec: any) =>
                            ({
                                id: rec.id,
                                name: rec.name,
                                description: rec.description,
                                successRate: rec.success_rate,
                                neutralRate: rec.neutral_rate,
                                failRate: rec.failure_rate,
                                profitYield: rec.profit_yield,
                                lossYield: rec.loss_yield,
                                frequencyRate: rec.frequency_readable,
                                isNotice: rec.is_notice ?? false,
                                currentInvestment:
                                    rec.currentInvestment === undefined
                                        ? undefined
                                        : ({
                                              id: rec.currentInvestment.id,
                                              startAmount:
                                                  rec.currentInvestment
                                                      .start_amount,
                                              reward: rec.currentInvestment
                                                  .reward,
                                              startDate:
                                                  rec.currentInvestment
                                                      .start_date,
                                              endDate:
                                                  rec.currentInvestment
                                                      .end_date,
                                              productId:
                                                  rec.currentInvestment.product,
                                          } as TInvestment),
                            } as TProductWithInvestment)
                    )
                )
            );
    }, []);
    return (
        <div className="overflow-y-auto h-full">
            <div className="flex-col items-center mx-auto justify-center max-w-7xl shadow-sm">
                <h1 className="text-4xl font-extrabold text-gray-900 px-4 pt-16 pb-2 text-center">
                    My Portfolio
                </h1>
                <div className="flex items-center justify-center w-full">
                    <div
                        className={
                            "p-4 w-full" +
                            (productsWithInvestment.filter(
                                (rec) => rec.currentInvestment !== undefined
                            ).length === 0
                                ? "w-full h-full flex items-center justify-center"
                                : "")
                        }
                    >
                        {productsWithInvestment.filter(
                            (rec) => rec.currentInvestment !== undefined
                        ).length === 0 ? (
                            <CircularProgress />
                        ) : (
                            <div className="flex flex-row overflow-x-auto gap-4 p-2">
                                {productsWithInvestment
                                    .filter(
                                        (rec) =>
                                            rec.currentInvestment !== undefined
                                    )
                                    .map((investment) => (
                                        <div className="flex-grow w-auto">
                                            <div className="flex flex-row bg-gray-200 shadow-sm rounded-xl p-4">
                                                <div className="flex flex-col flex-grow ml-4">
                                                    <div className="text-sm text-gray-500">
                                                        <div className="">
                                                            <a
                                                                href=""
                                                                className="inline-block rounded-full text-white bg-green-500 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1"
                                                            >
                                                                {productsWithInvestment.find(
                                                                    (rec) =>
                                                                        rec.id ===
                                                                        investment
                                                                            .currentInvestment
                                                                            ?.productId
                                                                )?.name ??
                                                                    "Unknown"}
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="font-bold text-lg text-black">
                                                        €
                                                        {
                                                            investment
                                                                .currentInvestment
                                                                ?.startAmount
                                                        }
                                                    </div>
                                                    <span className="text-red-500">
                                                        {
                                                            investment
                                                                .currentInvestment
                                                                ?.startDate
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="bg-white pt-8 pb-24">
                    <div className={"mx-auto w-7xl px-4"}>
                        <h2 className="mx-auto text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                            Investment Options
                        </h2>
                        {productsWithInvestment.length === 0 ? (
                            <div
                                className={
                                    productsWithInvestment.length === 0
                                        ? "w-full h-full flex items-center justify-center mt-6"
                                        : ""
                                }
                            >
                                <CircularProgress />
                            </div>
                        ) : (
                            productsWithInvestment.map((product) => (
                                <div className="mt-16 rounded-xl bg-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:w-7xl">
                                    <div className="p-8 sm:p-10 lg:flex-auto">
                                        <div className="flex items-center">
                                            <h3 className="text-4xl font-bold tracking-tight text-gray-900">
                                                {product.name}
                                                {product.isNotice === true &&
                                                    " |"}
                                            </h3>
                                            {product.isNotice === true && (
                                                <Image
                                                    src={BOCIcon}
                                                    alt="Bank of Cyprus logo"
                                                    className="w-[240px] h-auto ml-2"
                                                />
                                            )}
                                        </div>
                                        <p className="mt-6 text-lg leading-7 text-gray-600">
                                            {product.description}
                                        </p>
                                        <div className="mt-6 flex items-center gap-x-4">
                                            <h4 className="flex-none text-lg font-semibold leading-6 text-green-600">
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
                                                    className="h-6 w-5 flex-none text-green-600"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <ThumbUpIcon />
                                                </svg>
                                                Success rate:{" "}
                                                {product.successRate}%
                                            </li>
                                            <li className="flex gap-x-3">
                                                <svg
                                                    className="h-6 w-5 flex-none text-green-600"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <TrendingUpIcon />
                                                </svg>
                                                Profit yield:{" "}
                                                {product.profitYield}%
                                            </li>
                                            <li className="flex gap-x-3">
                                                <svg
                                                    className="h-6 w-5 flex-none text-green-600"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <ThumbDownIcon />
                                                </svg>
                                                Fail rate: {product.failRate}%
                                            </li>
                                            <li className="flex gap-x-3">
                                                <svg
                                                    className="h-6 w-5 flex-none text-green-600"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <TrendingDownIcon />
                                                </svg>
                                                Loss yield: {product.lossYield}%
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                                        <div className="rounded-2xl bg-gradient-to-br from-white via-pink-100 to-white py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                            <div className="mx-auto max-w-xs px-8">
                                                <p className="text-base font-semibold text-gray-600">
                                                    Currently invested
                                                </p>
                                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                                                        {product
                                                            .currentInvestment
                                                            ?.startAmount ?? 0}
                                                    </span>
                                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                                                        Euro
                                                    </span>
                                                </p>
                                                {product.isNotice === true ? (
                                                    <Link
                                                        href="invest/notice-account-creation"
                                                        className="mt-10 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                                    >
                                                        Open account
                                                    </Link>
                                                ) : (
                                                    <BuyProductDialog
                                                        productId={product.id}
                                                        productName={
                                                            product.name
                                                        }
                                                    />
                                                )}

                                                <p className="mt-6 text-xs leading-5 text-gray-600">
                                                    T & Cs apply.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
