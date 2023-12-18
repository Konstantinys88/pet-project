
export interface IDataWeather {
    data: {
        city: {
            id: number;
            name: string;
        },
        list: [
            main: {
                main: {
                    temp: number;
                    temp_min: number;
                    temp_max: number;
                    pressure: number;
                    grnd_level: number;
                    humidity: number;
                },
                clouds: {
                     all: number,   
                },
                wind: {
                    speed: number,
                },
                pop: number,
                dt_txt: string,
            },
        ],
    };
}