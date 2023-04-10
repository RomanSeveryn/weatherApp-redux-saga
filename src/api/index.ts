export const getWeather = () => {
  return fetch(
    'https://api.openweathermap.org/data/2.5/forecast?lat=47.838800&lon=35.139567&units=metric&appid=0de455aa28413a96a2db5a8c80578c74',
  )
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      return { cityName: res.city.name, weather: res.list };
    });
};
