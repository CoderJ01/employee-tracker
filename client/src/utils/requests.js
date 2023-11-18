// React
import { useState, useEffect, useCallback } from 'react';

// other imports
import axios from 'axios';

const baseURL_server = '';

export function GetInfo(route) {
    const [data, setData] = useState([]);

    const getInfo = useCallback(async() => {
        try {
            const response = await axios.get(`${baseURL_server}/${route}`);
            setData(response);
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