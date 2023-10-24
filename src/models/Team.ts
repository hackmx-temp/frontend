import axios from "axios";
import { BACK_HACK } from "./Constants";

function getToken(){
    const stringToken = localStorage.getItem('token');
    return stringToken;
}

export type Member = {
    name: string;
    email: string;
    campus: string;
    semester: number;
    enrollment_id: string;
}

export type MyTeamType = {
    id: number,
    name: string,
    is_completed: boolean,
    members: Member[]
}

export type TeamRequest = {
    name: string;
    email: string;
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

// Create team request
export async function createTeamRequest(team_name: string) {
    const json = JSON.stringify({team_name: team_name});
    const url = `${BACK_HACK}/registeredUser/createTeamRequest`; 
    return await axios.post(url, json, {
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
        requested_email: email,
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
export async function updateTeamName(newName: string) {
    const url = `${BACK_HACK}/registeredUser/updateTeamName`;
    const json = JSON.stringify({
        new_team_name: newName
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