import axios from "axios";
import { BACK_HACK } from "./Constants";

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
    token: string;
    password: string;
}

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

// Send email
export async function sendEmail(email: string) {
    const json = JSON.stringify({email: email});
    const url = `${BACK_HACK}/email/resetPassword`; 
    return await axios.post(url, json, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

// Verify token
export async function verifyToken(token: string) {
    const json = JSON.stringify({token: token});
    const url = `${BACK_HACK}/passwordResetToken/validate`; 
    return await axios.post(url, json, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function resetPassword(data: ResetPasswordData) {
    const json = JSON.stringify(data);
    const url = `${BACK_HACK}/auth/resetPassword`; 
    return await axios.patch(url, json, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

// Verify jwt
export async function verifyJWT(token: string) {
    const url = `${BACK_HACK}/auth/verifyJWT`;
    const json = JSON.stringify({
        token: token
    });
    return await axios.post(url, json, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}
