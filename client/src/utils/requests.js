// React
import { useState, useEffect, useCallback } from 'react';

// setCookie
import setCookie from './setCookie';

// other imports
import axios from 'axios';
import cookie from 'js-cookie';

const baseURL_server = import.meta.env.VITE_SERVER_URL;

// GET
export function GetInfo(route, user = false) {
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
export function postInfo(route, infoObj, id) {
    if(id) {
        axios.post(`${baseURL_server}/${route}/${id}`, {
            info: infoObj
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
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