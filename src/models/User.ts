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

// Get base path from environment variable
const BASE_PATH = 'api.hackmx.mx';

export async function createUser(user: User) {
    const json = JSON.stringify(user);
    const url = `${BASE_PATH}/hackMX/user`;
    return await axios.post(url, json, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function getCount() {
    const url = `${BASE_PATH}/hackMX/user/count`;
    return await axios.get(url);
}
