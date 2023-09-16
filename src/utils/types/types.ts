export enum ROLES {
    ADMIN = "ADMIN",
    MANAGER = "MANAGER",
    VOLUNTEER = "VOLUNTEER",
    GUEST = "GUEST"
}

export type RegisterType = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
    role: string;
    age: number;
}
export type LoginType = {
    email: string;
    password: string
}

export type InitialState = {
    role: ROLES;
    token: string;
    isAuthorized: boolean;
    isLoading: boolean;
}