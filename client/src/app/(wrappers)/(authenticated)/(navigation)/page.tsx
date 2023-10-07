import React from "react";
import { OverviewBalance } from "@/components/overview-balance";
import { OverviewGoals } from "@/components/overview-goals";
import { OverviewInvestments } from "@/components/overview-investments";
import { OverviewQuests } from "@/components/overview-quests";
import { Box, Container, Grid } from "@mui/material";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EuroIcon from '@mui/icons-material/Euro';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CreditCardOffIcon from '@mui/icons-material/CreditCardOff';

export default function Home() {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8,
            }}
            className="w-full flex flex-col justify-center items-center"
        >
            <div className="flex items-center w-full justify-center pb-20">
                    <div className="p-4 max-w-7xl w-full">
                        <div className="grid grid-cols-12 gap-4">
                        {/* Stock Card 1 */}
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <div className="flex flex-row bg-gray-200 shadow-sm rounded-xl p-4">
                                <div className="flex flex-col flex-grow ml-4">
                                    <div className="text-sm text-gray-500">
                                        <div className="col-span-12">
                                            <a href="#" className="rounded-full text-white bg-blue-700 text-lg font-semibold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 w-full flex items-center justify-center">
                                                Current Balance
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center pt-2">
                                        <div className="font-bold text-lg text-black">€9,000.00</div>
                                        <div className="grow" />
                                        <CreditCardIcon className="text-black"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stock Card 2 */}
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <div className="flex flex-row bg-gray-200 shadow-sm rounded-xl p-4">
                            <div className="flex flex-col flex-grow ml-4">
                                <div className="text-sm text-gray-500">
                                <div className="col-span-12 lg:col-span-8">
                                    <a href="#" className="rounded-full text-white bg-green-600 text-lg font-semibold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 w-full flex items-center justify-center">
                                        Savings Account
                                    </a>
                                </div>
                                </div>
                                <div className="flex items-center justify-center pt-2">
                                    <div className="font-bold text-lg text-black">€900.00</div>
                                    <div className="grow" />
                                    <EuroIcon className="text-black"/>
                                </div>
                            </div>
                            </div>
                        </div>

                        {/* Stock Card 3 */}
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <div className="flex flex-row bg-gray-200 shadow-sm rounded-xl p-4">
                            <div className="flex flex-col flex-grow ml-4">
                                <div className="text-sm text-gray-500">
                                <div className="col-span-12 lg:col-span-8">
                                    <a href="#" className="rounded-full text-white bg-purple-500 text-lg font-semibold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 w-full flex items-center justify-center">
                                        ETF Investments
                                    </a>
                                </div>
                                </div>
                                <div className="flex items-center justify-center pt-2">
                                    <div className="font-bold text-lg text-black">€3,000.00</div>
                                    <div className="grow" />
                                    <CurrencyExchangeIcon className="text-black"/>
                                </div>
                            </div>
                            </div>
                        </div>

                        {/* Stock Card 4 */}
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <div className="flex flex-row bg-gray-200 shadow-sm rounded-xl p-4">
                            <div className="flex flex-col flex-grow ml-4">
                                <div className="text-sm text-gray-500">
                                <div className="col-span-12 lg:col-span-8">
                                    <a href="#" className="rounded-full text-white bg-red-500 text-lg font-semibold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 w-full flex items-center justify-center">
                                        Notice Account
                                    </a>
                                </div>
                                </div>
                                <div className="flex items-center justify-center pt-2">
                                    <div className="font-bold text-lg text-black">€510.00</div>
                                    <div className="grow" />
                                    <CreditCardOffIcon className="text-black"/>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            <Container>
                <Grid container gap={2}>
                    <Grid xs={12} sm>
                        <OverviewBalance sx={{ height: "100%" }} />
                    </Grid>
                    <Grid xs={12} sm>
                        <OverviewInvestments sx={{ height: "100%" }} />
                    </Grid>
                    <Grid xs={12} sm>
                        <OverviewQuests sx={{ height: "100%" }} />
                    </Grid>
                    <Grid xs={12} sm>
                        <OverviewGoals sx={{ height: "100%" }} />
                    </Grid>
                    <Grid xs={12} lg={8}></Grid>
                    <Grid xs={12} md={6} lg={4}></Grid>
                </Grid>
            </Container>
        </Box>
    );
}
