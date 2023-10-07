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
    id: number;
    text: string;
};

export type TQuestion = {
    questionId: number;
    question: string;
    options: TQuestionOption[];
    answerId: number;
};

export type TQuiz = {
    title: string;
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

export type TQuest = {
    id: number;
    name: string;
    description: string;
    categoryId: number;
    order: number;
    state?: "unlocked" | "completed";
};

export type TQuestCategory = {
    id: number;
    title: string;
};

export type TInvestment = {
    id: number;
    startAmount: number;
    reward: number;
    startDate: string;
    endDate: string;
    productId: string;
};
