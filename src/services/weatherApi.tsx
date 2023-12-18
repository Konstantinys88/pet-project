"use client"

import axios from 'axios';

const weatherApi = () => {

    const lat = 55.7522;
    const lon = 37.6156;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=123487e4df3ac09825c736da4a0ff4af&units=metric`;

    const getResource = async () => {
        try {
            const response = await axios.get(apiUrl);
            // console.log(response);
            return transformWeatherDatas(response);
        } catch (error) {
            console.error(error);
        }
    }

    interface responseDataWeather {
        data: {
            city: {
                id: number;
                name: string;
            };
        };
    }

    const transformWeatherDatas = (res: responseDataWeather) => {
        return {
            id: res.data.city.id,
            name: res.data.city.name,
        }
    }


    return {
        getResource,
    }
}

export default weatherApi;