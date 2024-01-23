// React
import { useState, useEffect, useCallback } from 'react';

// setCookie
import setCookie from './setCookie';

// inputValidation
import { displayErrorMessage, displayRegisterErrorMessage } from './errorMessage';

// other imports
import axios from 'axios';
import cookie from 'js-cookie';

const baseURL_server = import.meta.env.VITE_SERVER_URL;

// GET
export function useFetch(route, user = false) {
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
    }, [route]);

    useEffect(() => {
        getInfo();
    }, [getInfo]);

    return data;
}

function getUser(response, setData) {
    let userCookie = cookie.get('employee-tracker-cookie');
    for(let i = 0; i < response.data.length; i++) {
        if(response.data[i].sessionCookie === userCookie) {
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
        if(route.includes('employees') || route.includes('tasks')) location.reload(); 
    })
    .catch(error => {
        console.log(error);
        // register
        displayRegisterErrorMessage(error, 'Duplicate', `${import.meta.env.VITE_DUPLICATE_EMAIL}`, setErrorText, 'email');
        displayRegisterErrorMessage(error, 'Duplicate', `${import.meta.env.VITE_DUPLICATE_NUMBER}`, setErrorText, 'phone number');
        // create employee
        displayRegisterErrorMessage(error, 'Duplicate', `${import.meta.env.VITE_DUPLICATE_EMAIL_TABLE}`, setErrorText, 'email');
    });
}

export function loginUser(route, username, password, setErrorText) {
    axios.post(`${baseURL_server}/${route}`, 
    {
        username: username,
        password: password,
    })
    .then(response => {
        setCookie('employee-tracker-cookie', response.data.sessionCookie, 1);
        window.location.reload(false);
    })
    .catch(error => {
        console.log(error);
        displayErrorMessage(error, 'java.lang.RuntimeException: Username or email does not exists!', 'Username or email does not exist!', setErrorText);
        displayErrorMessage(error, 'java.lang.RuntimeException: Wrong password!', 'The password does not match the user!', setErrorText);
    });
}

// DELETE
export async function deleteInfo(route, setErrorText) {
    try {
        await axios.delete(`${baseURL_server}/${route}`);
    }
    catch(error) {
        console.log(error);
        if(error.response.data.trace.toString().includes('`tasks`') && error.response.data.trace.toString().includes('REFERENCES'))
        setErrorText('The employee cannot be deleted! Delete the task(s) made for said employee first!');
        return;
    }
    if(route.includes('employees') || route.includes('tasks')) location.reload();
}