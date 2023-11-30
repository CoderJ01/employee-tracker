// React
import { useState, useEffect, useCallback } from 'react';

// setCookie
import setCookie from './setCookie';

// other imports
import axios from 'axios';
import cookie from 'js-cookie';

const baseURL_server = import.meta.env.VITE_SERVER_URL;

// GET
export function getInfo(route, user = false) {
    const [data, setData] = useState([]);

    const getInfo = useCallback(async() => {
        try {
            const response = await axios.get(`${baseURL_server}/${route}`);
    
            if(user) getUser(response, setData);
            else setData(response);
        }
        catch(error) {
            console.log(error);
        }
    }, [data]);

    useEffect(() => {
        getInfo();
    }, [getInfo]);

    return data;
}

function getUser(response, setData) {
    let userCookie = cookie.get('employee-tracker-cookie');
    for(let i = 0; i < response.data.length; i++) {
        if(response.data[i].randomString === userCookie) {
            setData(response.data[i]);
        }
    }
}

// POST
export function postInfo(route, infoObj, setErrorText) {
    axios.post(`${baseURL_server}/${route}`, {
        lastName: infoObj.lastname, 
        firstName: infoObj.firstname, 
        email: infoObj.email, 
        phoneNumber: infoObj.phonenumber, 
        password: infoObj.password,
        companyName: infoObj.companyname,
        role: infoObj.role,
        department: infoObj.department,
        salary: infoObj.salary,
        title: infoObj.title,
        description: infoObj.description
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
        displayErrorMessage(error, 'duplicate key value violates unique constraint', '(email)', setErrorText, 'email');
        displayErrorMessage(error, 'duplicate key value violates unique constraint', '(phone_number)', setErrorText, 'phone number');
    });
}

function displayErrorMessage(error, constraint, infoType, setErrorText, takenType) {
    // trace = backend response
    if(error.response.data.trace.toString().includes(constraint) 
    && error.response.data.trace.toString().includes(infoType))
    {
        setErrorText(`This ${takenType} is already taken!`);
    }
}

export function loginUser(route, username, password) {
    axios.post(`${baseURL_server}/${route}`, 
    {
        username: username,
        password: password,
    },
    {
        withCredentials: true,
        credentials: 'include'
    })
    .then(response => {
        setCookie('employee-tracker-cookie', response.data.data.randomString, 1);
        console.log(response);
        window.location.reload(false);
    })
    .catch(error => {
        console.log(error);
    });
}

// DELETE
export async function deleteInfo(route, id) {
    if(id) {
        try {
            await axios.delete(`${baseURL_server}/${route}`);
        }
        catch(error) {
            console.log(error);
        }
    }
}