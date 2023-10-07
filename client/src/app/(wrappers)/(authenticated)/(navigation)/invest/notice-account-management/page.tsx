'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Page() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="relative w-full h-full overflow-y-auto pb-16">
            <div className="relative z-0 flex flex-col items-center justify-center w-full px-2 bg-white xxs:px-4 py-14 sm:py-12 lg:py-16 isolate lg:px-8">
                <div className="z-20 max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Notice Account Management</h2>
                </div>
                <div className="flex items-center gap-x-4 sm:col-span-2 w-[60%] mt-10 py-4 bg-gray-200 shadow-md rounded-2xl">
                    <div className="grid grid-cols-2 w-full h-auto gap-x-6 gap-y-4 text-lg">
                        <div className="col-span-1 flex justify-end items-center w-full">
                            <p className="text-black ">Account Type:</p>
                        </div>
                        <div className="col-span-1 flex justify-start items-center">
                            <p className="text-black ">e-Notice 90 days</p>
                        </div>
                        <div className="col-span-1 flex justify-end items-center w-full">
                            <p className="text-black ">Credit interest rate</p>
                        </div>
                        <div className="col-span-1 flex justify-start items-center">
                            <p className="text-black ">0.3%</p>
                        </div>
                        <div className="col-span-1 flex justify-end items-center w-full">
                            <p className="text-black ">Accrued interest receivable:</p>
                        </div>
                        <div className="col-span-1 flex justify-start items-center">
                            <p className="text-black ">3,38</p>
                        </div>
                        <div className="col-span-1 flex justify-end items-center w-full">
                            <p className="text-black ">Accrued interest payable:</p>
                        </div>
                        <div className="col-span-1 flex justify-start items-center">
                            <p className="text-black ">0,00</p>
                        </div>
                        <div className="col-span-1 flex justify-end items-center w-full">
                            <p className="text-black ">Current account balance:</p>
                        </div>
                        <div className="col-span-1 flex justify-start items-center">
                            <p className="text-black ">147.23</p>
                        </div>
                        <div className="col-span-1 flex justify-end items-center w-full">
                            <p className="text-black ">Notice account balance:</p>
                        </div>
                        <div className="col-span-1 flex justify-start items-center">
                            <p className="text-black ">35.00</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 w-[60%] mt-10 gap-x-12">
                    <button onClick={handleOpen} className="block w-full rounded-md bg-gradient-to-tr from-green-800 to-green-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Give notice
                    </button>
                    <button className="block w-full rounded-md bg-gradient-to-tr from-green-800 to-green-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Make deposit
                    </button>
                    <button className="block w-full rounded-md bg-gradient-to-tr from-red-800 to-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Withdraw without notice
                    </button>
                    <button className="block w-full rounded-md bg-slate-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Withdraw with notice
                    </button>
                </div>
                <div className='w-full h-full'>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" className='text-black'>
                            Notice given, you can withdraw in 90 days.
                        </Typography>
                        </Box>
                    </Modal>
                </div>
            </div>
        </div>
    );
}
