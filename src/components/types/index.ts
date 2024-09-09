export type optionType = {
    name: string,
    lat: number,
    lon: number
}

export type forecastType = {
  name: string;
  country: string;
  sunrise: number;
  sunset: number;
  list: [
    {
      dt: number;
      main: {
        temp: number;
        feels_like: number;
        pressure: number;
        humidity: number;
        temp_min: number;
        temp_max: number;
      };
      weather: [
        {
          description: string;
        }
      ];
    },
    weather: [
      {
        main: string;
        description: string;
        icon: string;
      }
    ],
    wind: {
      speed: number;
      deg: number;
      gust: number;
    },
    clouds: {
      all: number;
    },
    pop: number,
    visibility: number
  ];
};