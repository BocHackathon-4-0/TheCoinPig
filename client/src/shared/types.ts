export type TAccount = {
    username: string,
    password: string,
    permissions: 'parent' | 'child',
}

export type TCookies = {
    auth?: TAccount;
}