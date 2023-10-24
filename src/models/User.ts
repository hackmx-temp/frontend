import axios from "axios";

export type User = {
    name: string;
    last_name: string;
    email: string;
    phone_number: string;
    campus: string;
    career: string;
    semester: string;
    enrollment_id: string;
    gender: string;
    bus_required: boolean;
    allergies: string;
    medical_conditions: string;
}

export type RegisteredUser = {
    email: string;
    password: string;
}

export type LogedUser = {
    email: string;
    password: string;
}

export type ResetPasswordData = {
    password: string;
    confirmPassword: string;
}

// Get base path from environment variable
const BACK_HACK = 'http://localhost:5000/hackMX';

export async function createUser(user: User) {
    const json = JSON.stringify(user);
    const url = `${BACK_HACK}/user`;
    return await axios.post(url, json, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function getCount() {
    const url = `${BACK_HACK}/hackMX/user/count`;
    return await axios.get(url);
}

export async function signUpUser(user: RegisteredUser) {
    const json = JSON.stringify(user);
    const url = `${BACK_HACK}/auth/signup`;
    return await axios.post(url, json, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function signInUser(user: LogedUser) {
    const json = JSON.stringify(user);
    const url = `${BACK_HACK}/auth/login`;
    return await axios.post(url, json, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function resetPassword(data: ResetPasswordData) {
    const json = JSON.stringify(data);
    const url = `${BACK_HACK}/auth/reset-password`; 
    return await axios.post(url, json, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
