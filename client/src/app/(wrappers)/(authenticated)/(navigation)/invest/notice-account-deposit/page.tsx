export default function Page() {
    return (
        <div className="relative w-full h-full overflow-y-auto pb-16">
            <div className="relative z-0 flex flex-col items-center justify-center w-full px-2 bg-white xxs:px-4 py-14 sm:py-12 lg:py-16 isolate lg:px-8">
                <div className="z-20 max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Make deposit</h2>
                </div>
                <form action="#" method="POST" className="w-[400px] col-span-1 sm:mt-12 bg-gray-200 rounded-lg p-2 pb-4 px-4">
                    <div className="sm:col-span-2 gapy-6">
                        <div className="flex items-center justify-center gap-x-4 sm:col-span-2">
                            <p className="text-black ">Balance</p>
                            <div className="mt-2.5 w-full">
                                <input disabled placeholder='363.79 EUR' className="block w-full bg-gray-200 hover:cursor-not-allowed rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 h-[40px]" />
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-x-4 sm:col-span-2">
                            <p className="text-black">Amount</p>
                            <div className="mt-2.5 w-full">
                                <input placeholder='0.00 EUR' className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 h-[40px]" />
                            </div>
                        </div>
                    </div>
                </form>
                <div className="grid grid-cols-2 w-[400px] mt-6 gap-x-12">
                    <a href="notice-account-management" className="block w-full rounded-md bg-gradient-to-tr from-green-800 to-green-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                        Cancel
                    </a>
                    <a href="notice-account-management" className="block w-full rounded-md bg-gradient-to-tr from-red-800 to-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                        Deposit
                    </a>
                </div>
            </div>
        </div>
    );
 }