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

function getToken(){
    const stringToken = JSON.parse(localStorage.getItem('token') || "token: ''").token;
    return stringToken;
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
    const url = `${BACK_HACK}/auth/verify-token`; 
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

// Create team
export async function createTeam(team_name: string) {
    const json = JSON.stringify({team_name: team_name});
    const url = `${BACK_HACK}/registeredUser/createTeam`; 
    return await axios.post(url, json, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    });
}

// Get all teams
export async function getTeams() {
    const url = `${BACK_HACK}/team/all`;
    return await axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    });
}

// Get my team
export async function getMyTeam() {
    const url = `${BACK_HACK}/registeredUser/getTeam`;
    return await axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    });
}

// Get join team requests
export async function getJoinTeamRequests() {
    const url = `${BACK_HACK}/registeredUser/getTeamRequests`;
    return await axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    });
}

// Manage join team requests with patch
export async function manageJoinTeamRequests(email: string, status: Boolean) {
    const url = `${BACK_HACK}/registeredUser/manageTeamRequest`;
    const json = JSON.stringify({
        email: email,
        status: status
    });
    return await axios.patch(url, json, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    });
}

// Delete team
export async function deleteTeam() {
    const url = `${BACK_HACK}/registeredUser/deleteTeam`;
    return await axios.delete(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    });
}

// Update team name 
export async function updateTeamName(oldName: string) {
    const url = `${BACK_HACK}/registeredUser/updateTeamName`;
    const json = JSON.stringify({
        new_team_name: oldName
    });
    return await axios.patch(url, json, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    });
}

// Remove team member
export async function removeMember(email: string) {
    const url = `${BACK_HACK}/registeredUser/removeMember`;
    const json = JSON.stringify({
        requested_email: email
    });
    return await axios.post(url, json, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    });
}

// Add team member
export async function addMember(email: string) {
    const url = `${BACK_HACK}/registeredUser/addMember`;
    const json = JSON.stringify({
        requested_email: email
    });
    return await axios.post(url, json, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    });
}
