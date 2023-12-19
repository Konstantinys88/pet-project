"use client"

import axios from 'axios';
import { IDataWeather } from './weatherApiType';

const weatherApi = () => {

    const lat = 55.7522;
    const lon = 37.6156;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=123487e4df3ac09825c736da4a0ff4af&units=metric`;

    const getResource = async (date: number) => {
        try {
            const response = await axios.get(apiUrl);
            // console.log(response.data.list[0].dt_txt);
            return transformWeatherDatas(response, date);
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * @param res 
     * name - город, temp - температура, pressure - Атмосферное давление на уровне моря по умолчанию, гПа, grnd - Атмосферное давление на уровне земли, гПа
     * humidity - Влажность %, clouds - Облачность %,
     * wingSpeed - Скорость ветра: метр/сек, pop - Вероятность осадков. Значения параметра варьируются от 0 до 1, где 0 равен 0%, 1 равен 100%,
     * data - дата и время
     * @returns 
     */
    const transformWeatherDatas = (res: IDataWeather, date: number) => {
        return {
            id: res.data.city.id,
            name: res.data.city.name,
            temp: Math.round(res.data.list[date].main.temp), 
            tempMin: Math.round(res.data.list[date].main.temp_min), 
            tempMax: Math.round(res.data.list[date].main.temp_max), 
            pressure: res.data.list[date].main.pressure, 
            grnd: Math.round(res.data.list[date].main.grnd_level * 0.750064), //переводит в мрт и округляет
            humidity: res.data.list[date].main.humidity, 
            clouds: res.data.list[date].clouds.all,
            wingSpeed: res.data.list[date].wind.speed,
            pop: res.data.list[date].pop,
            data: res.data.list[date].dt_txt,
        }
    }


    return {
        getResource,
    }
}

export default weatherApi;