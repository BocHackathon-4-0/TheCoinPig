"use client";

import React, { useState } from 'react';
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

type TQuestPageParams = {
    params: { questId: string };
};

export default function QuestPage({ params: { questId } }: TQuestPageParams) {
    const router = useRouter();
    const title: string = "TEST QUEST";
    const description: string = `
        HFUEOISALLF HUIOEASHFUIOESA HIFOUPAESHUIOF EAHSUIOFHUISAEHF
        USAHDUILOAHAF UIAEUIHOFSAUILHDF ILUASHUIFLADSHFUILDSAHUFILS
        DAHFUILSADHFUDISAL FDHSUAODHUASIODHUSHA UID HU ADSHUOIDASDS
        DHUSIAODHSAOLDHAS udosah DHOSUADDHDUSAHDSUAOI HUODSAHDOUIAS
        FHASFHOIUDHF DSFJFSDHNBJCDSBJKDCSJDCBNKOJUJAO DHJSAIDHOISAH
    `;

    const [interestRate, setInterestRate] = useState(5);
    const [quizResult, setQuizResult] = useState('Try Again.');
    const [benefitsVisible, setBenefitsVisible] = useState(false);
    const [penaltyAmount, setPenaltyAmount] = useState(0);

    const updateInterestRate = (event: React.ChangeEvent<HTMLInputElement>) => {
        const rate = parseInt(event.target.value, 10) / 10;
        setInterestRate(rate);
    };

    const checkAnswer = (answer: string) => {
        if (answer === 'b') {
        setQuizResult('Correct!');
        } else {
        setQuizResult('Try Again.');
        }
    };

    const toggleBenefits = () => {
        setBenefitsVisible(!benefitsVisible);
    };

    const calculatePenalty = (event: React.ChangeEvent<HTMLInputElement>) => {
        const amount = parseInt(event.target.value, 10);
        const penalty = amount * 0.02;
        setPenaltyAmount(penalty);
    };

    const finishCourse = () => {
        alert('Congratulations, you have completed the course!');
    };

    return (
        <div className="h-full w-full bg-white flex flex-col text-black items-center">
            <div className="overflow-y-auto flex-grow max-w-7xl">
                <div>
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="justify-center my-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:justify-normal">
                            Notice Accounts: Risks vs Rewards
                        </p>
                    </div>
                    <div className="container" data-np-autofill-form-type="other" data-np-watching="1">
                        <div className="section bg-gray-200 rounded-lg p-4 mb-4 flex-col">
                        <h2 className='text-2xl mb-4'>What is a Notice Account?</h2>
                        <p>A Notice Account is a type of savings account where you need to give a notice before making a withdrawal. This period can range from 30 to 180 days.</p>
                        <div className="interactive-element flex items-center" id="interest-slider">
                            <div className='border-2 border-green-500 text-green-500 rounded-lg p-2 text-lg bg-white flex items-center justify-center w-[300px] mr-4'>
                                <p id="interest-rate">Interest Rate: {interestRate}%</p>
                            </div>
                            <div className='border-2 border-blue-500 text-blue-500 rounded-lg p-2 h-[47.2px] bg-white flex items-center w-[300px]'>
                                <input
                                    id="interest"
                                    max="180"
                                    min="30"
                                    onChange={updateInterestRate}
                                    step="10"
                                    type="range"
                                    data-np-intersection-state="visible"
                                    className='w-full'
                                />
                            </div>
                        </div>
                        </div>
                        <div className="section bg-gray-200 rounded-lg p-4 mb-4">
                        <h2 className='text-2xl mb-4'>Risks of Notice Accounts</h2>
                        <p className='mb-2'>The primary risk is the inaccessibility of your funds during the notice period. What's the biggest risk of a Notice Account?</p>
                        <div className="interactive-element" id="risk-quiz">
                            <div className='grid grid-cols-4 gap-x-4 items-center font-extrabold text-lg'>
                                <button className='border-2 border-green-500 text-green-500 rounded-lg p-2 bg-white' onClick={() => checkAnswer('a')}>A. Low Interest</button>
                                <button className='border-2 border-blue-500  text-blue-500 rounded-lg p-2 bg-white' onClick={() => checkAnswer('b')}>B. Inaccessibility</button>
                                <button className='border-2 border-pink-500  text-pink-500 rounded-lg p-2 bg-white' onClick={() => checkAnswer('c')}>C. High Fees</button>
                                <p id="quiz-result" className='text-black font-bold text-lg border-2 border-black rounded-lg p-2 bg-white'>{quizResult}</p>
                            </div>
                            
                        </div>
                        </div>
                        <div className="section bg-gray-200 rounded-lg p-4 mb-4">
                        <h2 className='text-2xl mb-4'>Benefits of Notice Accounts</h2>
                        <p className='mb-2'>Notice Accounts generally offer higher interest rates and are low-risk.</p>
                        <div className="interactive-element flex" id="benefit-toggle">
                            <button className='w-[300px] border-2 border-green-500 text-green-500 rounded-lg p-2 bg-white text-lg mr-4' onClick={toggleBenefits}>Show Benefits</button>
                            <ul id="benefits-list" className={`${ benefitsVisible ? 'flex justify-center items-center' : 'hidden' }`} >
                            <li className='border-2 border-blue-500  text-blue-500 rounded-lg p-2 text-lg bg-white w-[300px] mr-4'>Higher Interest Rates</li>
                            <li className='border-2 border-pink-500  text-pink-500 rounded-lg p-2 text-lg bg-white w-[300px] mr-4'>Low Risk</li>
                            <li className='border-2 border-black  text-black rounded-lg p-2 text-lg bg-white w-[300px]'>Flexible Terms</li>
                            </ul>
                        </div>
                        </div>
                        <div className="section bg-gray-200 rounded-lg p-4 mb-4">
                        <h2 className='text-2xl mb-4'>Withdrawal Penalties</h2>
                        <p className='mb-2'>If you withdraw money before the notice period ends, you may incur a penalty.</p>
                        <div className="interactive-element" id="withdrawal-calc">
                            <div className='flex justify-start items-center'>
                                <div className='border-2 border-green-500  text-green-500 rounded-lg p-2 text-lg bg-white w-[300px] mr-4'>
                                    <label htmlFor="withdrawal" >Amount to Withdraw:</label>
                                    <input
                                        id="withdrawal"
                                        max="1000"
                                        min="100"
                                        onChange={calculatePenalty}
                                        step="50"
                                        type="number"
                                        data-np-intersection-state="visible"
                                        placeholder='0.00'
                                        className='border-2 border-green-500 rounded-lg ml-1 pl-[4px] placeholder:text-green-500'
                                    /> 
                                </div>
                            <div className='border-2 border-blue-500  text-blue-500 rounded-lg p-2 text-lg bg-white w-[300px] mr-4'>
                                <p id="penalty-amount">Penalty Amount: ${penaltyAmount.toFixed(2)}</p>
                            </div>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="absolute right-8 bottom-8">
                <button
                    onClick={() => router.push(questId + "/quiz")}
                    className="h-[50px] w-auto px-6 rounded-xl bg-green-500"
                >
                    <p className='text-white text-2xl'>Take Quiz</p>
                </button>
            </div>
        </div>
    );
}
