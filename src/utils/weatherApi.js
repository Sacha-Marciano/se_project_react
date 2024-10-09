const getInfo = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    })
    .then((data) => {
      const info = {};
      info.location = data.name;
      info.temp = [];
      info.temp.F = `${Math.round(data.main.temp)} \u00B0F`;
      info.temp.C = `${Math.round(((data.main.temp - 32) * 5) / 9)} \u00B0C`;
      info.condition = data.weather[0].main;
      info.isDay = _getDay(data.sys, Date.now());
      info.type = _getType(data.main.temp);
      return info;
    });
};

const _getDay = (data, now) => {
  return data.sunrise * 1000 < now && now < data.sunset * 1000;
};

const _getType = (temperature) => {
  if (temperature > 86) {
    return "hot";
  } else if (temperature > 66 && temperature < 86) {
    return "warm";
  } else {
    return "cold";
  }
  //to change type comment if statement and return "type"
};

export default getInfo;
