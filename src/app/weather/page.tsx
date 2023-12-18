"use client"
import './weather.scss';
import weatherApi from '@/services/weatherApi';


export default function Weather() {

    const { getResource } = weatherApi();
    // getResource();
    getResource().then(res => console.log(res));
    // console.log(getResource())

    return (
        <div className='weather'>
            Погода
        </div>
    )
}