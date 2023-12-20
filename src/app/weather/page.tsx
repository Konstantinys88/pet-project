
import './weather.scss';
import WeatherHeader from '../../components/weather/weatherHeader/WeatherHeader'

export default function weather() {
    return (
        <div className='weather'>
            <div className="weather__container">
                <WeatherHeader />
            </div>
        </div>
    )
}