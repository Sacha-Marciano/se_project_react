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
      info.temp = data.main.temp;
      info.condition = data.weather[0].main;
      info.isDay =
        data.sys.sunrise * 1000 < Date.now() &&
        Date.now() < data.sys.sunset * 1000;
      info.type = getType(data.main.temp);
      return info;
    });
};

const getType = (temperature) => {
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
