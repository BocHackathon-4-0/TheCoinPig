import React from "react";
import { Box } from "@mui/material";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EuroIcon from '@mui/icons-material/Euro';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CreditCardOffIcon from '@mui/icons-material/CreditCardOff';
import SchoolIcon from '@mui/icons-material/School';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HeroIcon from '../../../../../public/abstract-image-hero-section.png';
import Image from "next/image";

const insuranceTypes = [
    { id: 1, name: 'Financial Independence', price:'Early Budgeting Skills', description: 'Learning how to budget at a young age sets you up for a lifetime of financial independence and smart money choices. You’ll be ahead of the game when it comes to managing expenses, saving, and even investing.' },
    { id: 2, name: 'Future Planning', price:'Investment and Savings Knowledge', description: 'Understanding investments and savings accounts like notice accounts can help you grow your money over time. This knowledge is not just for adults; it’s a head start on planning for bigger life goals like college, travel, or even starting your own business.' },
    { id: 3, name: 'Technological Literacy', price:'Understanding Cryptocurrency and Blockchain', description: 'As digital currencies and blockchain technology become more integrated into our daily lives, understanding these concepts will give you an edge in the modern world. Plus, it’s a cool way to impress your friends and family with your tech-savvy knowledge.' },
  ];

export default function Home() {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8,
            }}
            className="w-full flex flex-col justify-center items-center overflow-y-auto h-full"
        >
            <div className="grid grid-cols-3 max-w-7xl gap-x-16 mt-[900px]">
            <div className="absolute inset-x-0 overflow-hidden z-0 transform-gpu blur-3xl" aria-hidden="true">
                <div 
                    className="relative z-10 aspect-[2/1] w-[100%] h-[250px] max-w-none bg-gradient-to-tr from-pink-300 via-purple-400 to-pink-600 opacity-70 rotate-0" 
                    style={{ 
                    clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' 
                    }}
                />
            </div>
            <div className="absolute inset-x-0 overflow-hidden z-0 transform-gpu blur-3xl" aria-hidden="true">
                <div 
                    className="relative z-10 aspect-[2/1] w-[100%] h-[250px] max-w-none bg-gradient-to-tr from-pink-300 via-purple-400 to-pink-600 opacity-70 rotate-180" 
                    style={{ 
                    clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' 
                    }}
                />
            </div>
                <div className="flex flex-col justify-end items-end col-span-1 font-semibold tracking-[-4px] z-10">
                    <h1 className="text-black text-8xl">
                        The
                    </h1>
                    <h1 className="text-yellow-500 text-8xl">
                        Coin
                    </h1>
                    <h1 className="text-pink-400 text-8xl">
                        Pig
                    </h1>
                </div>
                <div className="flex flex-col col-span-2 justify-center h-full mt-3 z-10">
                    <h2 className="flex text-black text-3xl tracking-wide">
                        Where<p className="text-blue-600 px-2 font-semibold">Young</p>Savings Cultivate Financial<p className="text-purple-700 pl-2 font-semibold">Success!</p>
                    </h2>
                    <div className="flex items-center justify-start h-auto">
                        <ul className="text-black font-semibold text-4xl">
                            <p className="pt-6 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent"> <SchoolIcon className="mx-2 text-4xl font-normal text-gray-700"/> Learn About financial blipblops</p>
                            <p className="py-6 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent"> <TrackChangesIcon className="mx-2 text-4xl font-normal text-yellow-800"/> Set and achieve your goals</p>
                            <p className="bg-gradient-to-r from-pink-900 to-pink-500 bg-clip-text text-transparent"> <TrendingUpIcon className="mx-2 text-4xl font-normal text-pink-500"/> Invest in a virtual environment</p>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex items-center w-full justify-center pt-12 pb-8 z-10">
                <div className="w-full bg-slate-200 flex items-center justify-center">
                    <div className="p-4 max-w-7xl w-full">
                        <div className="w-full flex justify-center items-center pb-6">
                            <h1 className="text-3xl font-extrabold text-gray-900 px-4 pt-4">
                                My Portfolio
                            </h1>
                        </div>
                        <div className="grid grid-cols-12 gap-4 pb-8">
                        {/* Stock Card 1 */}
                        <div className="col-span-12 sm:col-span-6 md:col-span-3 border-2 border-blue-700 rounded-xl">
                            <div className="flex flex-row bg-white shadow-sm rounded-xl p-4">
                                <div className="flex flex-col flex-grow ml-4">
                                    <div className="text-sm text-gray-500">
                                        <div className="col-span-12">
                                            <a href="#" className="rounded-full text-white bg-blue-700 text-xl font-semibold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 w-full flex items-center justify-center">
                                                Current Balance
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center pt-2">
                                        <div className="font-bold text-xl text-black">€9,000.00</div>
                                        <div className="grow" />
                                        <CreditCardIcon className="text-black"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stock Card 2 */}
                        <div className="col-span-12 sm:col-span-6 md:col-span-3 border-2 border-green-600 rounded-xl">
                            <div className="flex flex-row bg-white shadow-sm rounded-xl p-4">
                            <div className="flex flex-col flex-grow ml-4">
                                <div className="text-sm text-gray-500">
                                <div className="col-span-12 lg:col-span-8">
                                    <a href="#" className="rounded-full text-white bg-green-600 text-xl font-semibold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 w-full flex items-center justify-center">
                                        Savings Account
                                    </a>
                                </div>
                                </div>
                                <div className="flex items-center justify-center pt-2">
                                    <div className="font-bold text-xl text-black">€900.00</div>
                                    <div className="grow" />
                                    <EuroIcon className="text-black"/>
                                </div>
                            </div>
                            </div>
                        </div>

                        {/* Stock Card 3 */}
                        <div className="col-span-12 sm:col-span-6 md:col-span-3 border-2 border-purple-500 rounded-xl">
                            <div className="flex flex-row bg-white shadow-sm rounded-xl p-4">
                            <div className="flex flex-col flex-grow ml-4">
                                <div className="text-sm text-gray-500">
                                <div className="col-span-12 lg:col-span-8">
                                    <a href="#" className="rounded-full text-white bg-purple-500 text-xl font-semibold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 w-full flex items-center justify-center">
                                        ETF Investments
                                    </a>
                                </div>
                                </div>
                                <div className="flex items-center justify-center pt-2">
                                    <div className="font-bold text-xl text-black">€3,000.00</div>
                                    <div className="grow" />
                                    <CurrencyExchangeIcon className="text-black"/>
                                </div>
                            </div>
                            </div>
                        </div>

                        {/* Stock Card 4 */}
                        <div className="col-span-12 sm:col-span-6 md:col-span-3 border-2 border-red-500 rounded-xl">
                            <div className="flex flex-row bg-white shadow-sm rounded-xl p-4">
                            <div className="flex flex-col flex-grow ml-4">
                                <div className="text-sm text-gray-500">
                                <div className="col-span-12 lg:col-span-8">
                                    <a href="#" className="rounded-full text-white bg-red-500 text-xl font-semibold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 w-full flex items-center justify-center">
                                        Notice Account
                                    </a>
                                </div>
                                </div>
                                <div className="flex items-center justify-center pt-2">
                                    <div className="font-bold text-xl text-black">€510.00</div>
                                    <div className="grow" />
                                    <CreditCardOffIcon className="text-black"/>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                    
                </div>

                <div className="mx-auto max-w-7xl z-10">
                    <div className="w-full flex justify-center items-center pb-6">
                        <h1 className="text-3xl font-extrabold text-gray-900 px-4">
                            Adventures
                        </h1>
                    </div>
                    <div className="grid flex-col items-center justify-center w-auto h-auto grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
                        <form className="relative sm:mx-auto col-span-1 bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-500 rounded-xl h-[250px] w-[500px]">
                            <h2 className="w-auto px-6 pt-6 text-3xl font-bold tracking-tight text-white break-words sm:text-4xl sm:px-10 sm:pt-10">
                                Goals Achieved
                            </h2>
                            <p className="px-6 mt-0 xxs:mt-4 text-white text-[calc(5px+3vw)] sm:text-lg sm:px-10">
                                Save €13 to achieve next goal
                            </p>
                            <div className="absolute flex flex-col w-full px-6 xxs:flex-row bottom-6 gap-x-4 sm:px-10 sm:bottom-10 gap-y-2">
                                <div className="grid grid-cols-10 w-full h-[18px] border-4 border-white rounded-xl">
                                    <div className="col-span-7 bg-green-600 h-full rounded-l-xl" />
                                    <div className="col-span-3 bg-white h-full rounded-r-xl" />
                                </div>
                            </div>
                        </form>
                        <form className="relative sm:mx-auto col-span-1 bg-gradient-to-br from-pink-500 via-pink-600 to-pink-500 rounded-xl h-[250px] w-[500px]">
                            <h2 className="w-auto px-6 pt-6 text-3xl font-bold tracking-tight text-white break-words sm:text-4xl sm:px-10 sm:pt-10">
                                Quests Progress
                            </h2>
                            <p className="px-6 mt-0 xxs:mt-4 text-white text-[calc(5px+3vw)] sm:text-lg sm:px-10">
                                3/10 quests completed
                            </p>
                            <div className="absolute flex flex-col w-full px-6 xxs:flex-row bottom-6 gap-x-4 sm:px-10 sm:bottom-10 gap-y-2">
                                <div className="grid grid-cols-10 w-full h-[18px] border-4 border-white rounded-xl">
                                    <div className="col-span-3 bg-green-600 h-full rounded-l-xl" />
                                    <div className="col-span-7 bg-white h-full rounded-r-xl" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div className='my-20 w-full bg-slate-200 z-10'>
                    <div className="px-4 mx-auto max-w-7xl lg:px-8 py-8">
                    <div className="w-full flex justify-center items-center">
                        <h1 className="text-3xl font-extrabold text-gray-900 px-4">
                            Why Should I Learn To Manage My Money
                        </h1>
                    </div>
                    {insuranceTypes.map((type) => (
                        <div key={type.id} className='grid max-w-5xl pt-8 mx-auto gap-y-4'>
                        <div className='relative flex flex-col items-center w-full text-gray-900 sm:flex-row justify-left sm:gap-x-8 gap-y-1'>
                            <div className={`flex flex-col sm:divide-y divide-pink-500 w-full sm:w-auto ${type.id % 2 === 0 ? 'sm:order-1 sm:left' : 'sm:text-right sm:text-auto'}`}>
                            <p className='py-1 font-semibold'>{type.name}</p>
                            <div className='flex items-center justify-center w-full grid-cols-8 sm:hidden'>
                                <div className='flex items-center justify-center w-[75%] h-[1px] bg-blue-700' />
                            </div>
                            <p className={`py-1 font-semibold text-right ${type.id % 2 !== 0 ? 'sm:text-right' : 'sm:text-left'}`}>{type.price}</p>
                            </div>
                            <div 
                            className={`relative w-full h-auto p-[0.2rem] from-pink-500 to-white rounded-lg 
                            ${type.id % 2 !== 0 ? 'order-1 sm:order-2 bg-gradient-to-r' : 'bg-gradient-to-l text-right'}`}
                            >
                            <div className='w-full h-full px-4 py-4 bg-white rounded-md sm:py-8'>
                                <p>{type.description}</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
        </Box>
    );
}
