"use client"
import './weather.scss';
import weatherApi from '@/services/weatherApi/weatherApi';


export default function Weather() {

    const { getResource } = weatherApi();
    getResource(0).then(res => console.log(res));
    getResource(8).then(res => console.log(res));
    getResource(16).then(res => console.log(res));


    return (
        <div className='weather'>
            Погода
        </div>
    )
}