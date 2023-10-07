export type TAccount = {
    uid: string;
    username: string;
    password: string;
    permissions: "parent" | "child";
};

export type TCookies = {
    auth?: TAccount;
};

export type TNavBarOptions = {
    path: string;
    label: string;
};

export type TGoal = {
    id: string;
    title: string;
    description?: string;
    targetBalance: number;
    currentBalance: number;
    achieved: boolean;
};

export type TQuestionOption = {
    id: string;
    text: string;
};

export type TQuestion = {
    questionId: string;
    question: string;
    options: TQuestionOption[];
    answerId: string;
};

export type TQuiz = {
    questions: TQuestion[];
};

export type TInvestmentProduct = {
    id: string;
    name: string;
    description: string;
    successRate: number;
    profitYield: number;
    neutralRate: number;
    failRate: number;
    lossYield: number;
    frequencyRate: string; // e.g. 3 days or 2 weeks
};
