"use client"
import './weatherHeader.scss';
import weatherApi from '@/services/weatherApi/weatherApi';
import Image from 'next/image';

import backgroundImageWinter from "../../../../public/winter.jpg";
import backgroundImageSummer from "../../../../public/summer.webp";
import backgroundImageSpring from "../../../../public/spring.jpeg";
import backgroundImageFall from "../../../../public/fall.jpg";

const WeatherHeader = () => {

    let backgroundImage = backgroundImageFall;

    let weatherIconRain = "/rain.svg";
    let weatherIconCloudy = "/cloudy.svg";
    let weatherIconSnow = "/snow.svg";
    let weatherIconSunny = "/sunny.svg";
    let weatherIcon = weatherIconSunny;


    const { getResource } = weatherApi();
    getResource(0).then(res => console.log(res));

    return (
        <div className="weatherHeader"
            style={{
                backgroundImage: `url(${backgroundImage.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "100vh",
            }}>
            <div className="weatherHeader__info">
                <h2 className='weatherHeader__title'>Moscow: 19.12.2023</h2>
                <div className="weatherHeader__list">
                    <div className="weatherHeader__list_temp">
                        <p className='weatherHeader__item '>1 &#8451; /</p>
                        <p className='weatherHeader__item '>max: 2 &#8451; /</p>
                        <p className='weatherHeader__item '>min: 0 &#8451;</p>
                    </div>
                    <p className='weatherHeader__item'>Атмосферное давление: 736</p>
                    <p className='weatherHeader__item'>Облачность: 30%</p>
                    <p className='weatherHeader__item'>Вероятность осадков: 50 %</p>
                    <p className='weatherHeader__item'>Влажность: 50 %</p>
                </div>

            </div>
            <div className="weatherHeader__image">
                <Image
                    className='weatherHeader__image_icon'
                    src={`${weatherIcon}`}
                    width={100}
                    height={100}
                    alt="Picture of the author" />
            </div>



        </div>
    )
}

export default WeatherHeader;