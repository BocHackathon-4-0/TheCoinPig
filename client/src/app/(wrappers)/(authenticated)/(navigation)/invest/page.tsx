import React from "react";

export default function Page() {
    return (
        <div className="overflow-y-auto h-full">
            <div className="flex-col items-center mx-auto justify-center max-w-7xl shadow-sm">
                <h1 className="text-3xl font-extrabold text-gray-900 px-4 pt-4">
                    My Portfolio
                </h1>
                <div className="flex items-center">
                    <div className="p-4 w-full">
                        <div className="grid grid-cols-12 gap-4">
                        {/* Stock Card 1 */}
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <div className="flex flex-row bg-gray-200 shadow-sm rounded-xl p-4">
                                <div className="flex flex-col flex-grow ml-4">
                                    <div className="text-sm text-gray-500">
                                        <div className="col-span-12 lg:col-span-8">
                                            <a href="#" className="inline-block rounded-full text-white bg-blue-700 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1">
                                                Kolokasi
                                            </a>
                                        </div>
                                    </div>
                                    <div className="font-bold text-lg text-black">€91,000.00</div>
                                    <span className="text-red-500">▲ 2.48%</span>
                                </div>
                            </div>
                        </div>

                        {/* Stock Card 2 */}
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <div className="flex flex-row bg-gray-200 shadow-sm rounded-xl p-4">
                            <div className="flex flex-col flex-grow ml-4">
                                <div className="text-sm text-gray-500">
                                <div className="col-span-12 lg:col-span-8">
                                    <a href="#" className="inline-block rounded-full text-white bg-black text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1">
                                        TITOS COIN
                                    </a>
                                </div>
                                </div>
                                <div className="font-bold text-lg text-black">€880.02</div>
                                <span className="text-gray-500">- 0.00%</span>
                            </div>
                            </div>
                        </div>

                        {/* Stock Card 3 */}
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <div className="flex flex-row bg-gray-200 shadow-sm rounded-xl p-4">
                            <div className="flex flex-col flex-grow ml-4">
                                <div className="text-sm text-gray-500">
                                <div className="col-span-12 lg:col-span-8">
                                    <a href="#" className="inline-block rounded-full text-black ring-black ring-2 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1">
                                        VBUCKS
                                    </a>
                                </div>
                                </div>
                                <div className="font-bold text-lg text-black">€3,148.45</div>
                                <span className="text-blue-500">▼ 0.12%</span>
                            </div>
                            </div>
                        </div>

                        {/* Create New Card */}
                        <button className="col-span-12 sm:col-span-6 md:col-span-3 group">
                            <div className="flex flex-row bg-white shadow-sm rounded-xl">
                            <div id="empty-cover-art" className="py-5 h-full rounded-xl sm:w-full text-center opacity-50 md:border-solid md:border-2 md:border-gray-400">
                                <center>
                                <svg width="48" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-black group-hover:scale-125 duration-300">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                </center>
                                <div className="text-black">Create New</div>
                            </div>
                            </div>
                        </button>
                        </div>
                    </div>
                </div>
                <h1 className="text-3xl font-extrabold text-gray-900 px-4 pt-8 pb-4">
                    Compare The Market
                </h1>
                <header className="flex-none flex px-4 items-center">
                    <a href="#" className="inline-block rounded-full text-blue-700 bg-blue-100 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1">
                        United States
                    </a>
                    <a href="#" className="inline-block rounded-full text-black bg-white text-xs mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1">
                        Asia
                    </a>
                    <a href="#" className="inline-block rounded-full text-black bg-white text-xs mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1">
                        Europe
                    </a>
                    <a href="#" className="inline-block rounded-full text-black bg-white text-xs mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1">
                        Currency
                    </a>
                    <a href="#" className="inline-block rounded-full text-black bg-white text-xs mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1">
                        Crypto
                    </a>
                </header>
                <div className="flex items-center">
                    <div className="p-4 w-full">
                    <div className="grid grid-cols-12 gap-4">
                        {/* Stock Card 1 */}
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <div className="flex flex-row bg-gray-200 shadow-sm rounded-xl p-4">
                                <div className="flex flex-col flex-grow ml-4">
                                    <div className="text-sm text-gray-500">
                                        <div className="col-span-12 lg:col-span-8">
                                            <a href="#" className="inline-block rounded-full text-white bg-blue-700 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1">
                                                Savas with 1 v
                                            </a>
                                        </div>
                                    </div>
                                    <div className="font-bold text-lg text-black">€91,000.00</div>
                                    <span className="text-red-500">▲ 2.48%</span>
                                </div>
                            </div>
                        </div>

                        {/* Stock Card 2 */}
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <div className="flex flex-row bg-gray-200 shadow-sm rounded-xl p-4">
                            <div className="flex flex-col flex-grow ml-4">
                                <div className="text-sm text-gray-500">
                                <div className="col-span-12 lg:col-span-8">
                                    <a href="#" className="inline-block rounded-full text-white bg-black text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1">
                                        Farail
                                    </a>
                                </div>
                                </div>
                                <div className="font-bold text-lg text-black">€880.02</div>
                                <span className="text-gray-500">- 0.00%</span>
                            </div>
                            </div>
                        </div>

                        {/* Stock Card 3 */}
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <div className="flex flex-row bg-gray-200 shadow-sm rounded-xl p-4">
                            <div className="flex flex-col flex-grow ml-4">
                                <div className="text-sm text-gray-500">
                                <div className="col-span-12 lg:col-span-8">
                                    <a href="#" className="inline-block rounded-full text-black ring-black ring-2 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1">
                                        Nikkolas
                                    </a>
                                </div>
                                </div>
                                <div className="font-bold text-lg text-black">€3,148.45</div>
                                <span className="text-blue-500">▼ 0.12%</span>
                            </div>
                            </div>
                        </div>

                        {/* See More Card */}
                        <button className="col-span-12 sm:col-span-6 md:col-span-3 group">
                            <div className="flex flex-row bg-white shadow-sm rounded-xl">
                            <div id="empty-cover-art" className="py-5 h-full rounded-xl sm:w-full text-center opacity-50 md:border-solid md:border-2 md:border-gray-400">
                                <center>
                                <svg width="48" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-black group-hover:scale-125 duration-300">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                                </center>
                                <div className="text-black">See More</div>
                            </div>
                            </div>
                        </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white pt-12 pb-24">
                    <div className="mx-auto w-7xl px-4">
                        <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="mx-auto text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Purchase Options</h2>
                        </div>
                        <div className="mt-16 rounded-xl bg-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:w-7xl">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">The safe option</h3>
                            <p className="mt-6 text-base leading-7 text-gray-600">Lorem ipsum blip blop description</p>
                            <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">Some details</h4>
                            </div>
                            <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                            <li className="flex gap-x-3">
                                <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                omg slow
                            </li>
                            <li className="flex gap-x-3">
                                <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                stable reward
                            </li>
                            <li className="flex gap-x-3">
                                <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                idk something else
                            </li>
                            <li className="flex gap-x-3">
                                <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                wow amazing design
                            </li>
                            </ul>
                        </div>
                        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                            <div className="rounded-2xl bg-gradient-to-br from-white via-blue-100 to-white py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-600">Invest omgomgomg</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                <span className="text-5xl font-bold tracking-tight text-gray-900">€100000</span>
                                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">Euro</span>
                                </p>
                                <a href="#" className="mt-10 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Get access</a>
                                <p className="mt-6 text-xs leading-5 text-gray-600">Invoices and receipts available for easy company reimbursement</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
  );
};