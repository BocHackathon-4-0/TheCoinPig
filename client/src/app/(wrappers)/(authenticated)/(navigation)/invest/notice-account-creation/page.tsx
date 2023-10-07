import { Checkbox } from "@mui/material"

export default function Page() {
    return (
        <div className="relative w-full h-full overflow-y-auto pb-16">
            <div className="relative z-0 flex flex-col items-center justify-center w-full px-2 bg-white xxs:px-4 py-14 sm:py-12 lg:py-16 isolate lg:px-8">
            <div className="z-20 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Notice Account Creation</h2>
            </div>
            <div className='z-20 flex flex-col max-w-6xl grid-cols-2 px-2 mx-auto xs:px-4 sm:px-8 lg:space-x-16 lg:flex-row'>
            <form action="#" method="POST" className="max-w-[32rem] w-auto col-span-1 sm:mt-12">
                <div className="sm:col-span-2">
                    <div className="relative mt-2.5">
                        <div className="flex items-center">
                            <p className="text-black pr-[16px]">Type</p>
                            <label htmlFor="country" className="sr-only">Country</label>
                            <select id="country" name="country" autoComplete='off' className=" w-[400px] block rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 h-[40px]">
                                <option>e-Notice 8 days | 0.2%/month</option>
                                <option>e-Notice 35 days | 0.3%/month</option>
                                <option>e-Notice 90 days | 0.5%/month</option>
                                <option>e-Notice 180 days | 1.0%/month</option>
                            </select>
                            <div className="grow" />
                        </div>
                    </div>
                <div className="flex items-center gap-x-4 sm:col-span-2">
                    <p className="text-black ">Type</p>
                    <div className="mt-2.5 w-full">
                        <input disabled placeholder='363.79 EUR' className="block w-full bg-gray-200 hover:cursor-not-allowed rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 h-[40px]" />
                    </div>
                </div>
                <div className="flex items-center gap-x-4 sm:col-span-2">
                <p className="text-black">Type</p>
                    <div className="mt-2.5 w-full">
                        <input placeholder='0.00 EUR' className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 h-[40px]" />
                    </div>
                </div>
                <div className="flex items-center gap-x-4 sm:col-span-2">
                    <Checkbox/>
                    <div className="text-sm leading-6 text-gray-900" id="switch-1-label">
                    I accept the
                    <a href="privacy-policy" className="font-semibold text-blue-700"> Privacy policy.</a>
                    </div>
                </div>
                </div>
                <div className="mt-2 sm:mt-4">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <a href='notice-account-management' className="block w-full rounded-md bg-gradient-to-tr from-blue-800 to-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</a>
                </div>
            </form>
            </div>
        </div>
        </div>
    );
}
