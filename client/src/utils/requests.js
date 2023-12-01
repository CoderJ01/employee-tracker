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
        displayRegisterErrorMessage(error, 'duplicate key value violates unique constraint', '(email)', setErrorText, 'email');
        displayRegisterErrorMessage(error, 'duplicate key value violates unique constraint', '(phone_number)', setErrorText, 'phone number');
    });
}

function displayRegisterErrorMessage(error, constraint, infoType, setErrorText, takenType) {
    // constraint generated from Spring Boot (Java/Maven) backend and PostgreSQL database
    // trace = backend response
    if(error.response.data.trace.toString().includes(constraint) 
    && error.response.data.trace.toString().includes(infoType))
    {
        setErrorText(`This ${takenType} is already taken!`);
    }
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
        displayLoginErrorMessage(error, 'java.lang.RuntimeException: Username or email does not exists!', 'Username or email does not exist!', setErrorText);
        displayLoginErrorMessage(error, 'java.lang.RuntimeException: Wrong password!', 'The password does not match the user!', setErrorText);
    });
}

function displayLoginErrorMessage(error, message, output, setErrorText) {
    if(error.response.data.trace.toString().includes(message)) {
        setErrorText(output);
    }
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