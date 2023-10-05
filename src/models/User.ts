import axios from "axios";

export type User = {
    name: string;
    last_name: string;
    email: string;
    password: string;
    phone_number: string;
    university: string;
    campus: string;
    career: string;
    semester: string;
    is_from_tec: boolean;
    enrollment_id: string;
    gender: string;
}

const BASE_PATH = 'http://localhost:5000';

export async function createUser(user: User) {
    const json = JSON.stringify(user);
    const url = `${BASE_PATH}/hackMX/auth/signup`;
    console.log(json);
    return await axios.post(url, json, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

// To debug
export async function defaultCreateUser(){
    const user: User = {
        name: 'Juan',
        last_name: 'Perez Martinez',
        email: 'ex@ex.com',
        password: 'Hola#124',
        phone_number: '1234567890',
        university: 'ITESM',
        campus: 'MTY',
        career: 'ITC',
        semester: '8',
        is_from_tec: true,
        gender: 'M',
        enrollment_id: 'A01234567'
    }
    return await createUser(user);
}
