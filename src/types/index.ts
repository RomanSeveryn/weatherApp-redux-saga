export type WeatherDayType = {
  clouds: {
    all: number;
  };
  dt: number;
  dt_txt: string;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
  };
  pop: number;
  sys: {
    pod: string;
  };
  visibility: number;
  weather: Array<{
    description: string;
    icon: string;
    id: string;
    main: string;
  }>;
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
};

export type CurrentWeatherDayType = {
  day: WeatherDayType;
  city: string;
};
