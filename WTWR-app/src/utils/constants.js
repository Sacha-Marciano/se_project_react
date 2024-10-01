import cloudyDay from "../assets/CloudyDay.png";
import cloudyNight from "../assets/CloudyNight.png";
import sunnyDay from "../assets/SunnyDay.png";
import sunnyNight from "../assets/SunnyNight.png";
import rainyDay from "../assets/RainyDay.png";
import rainyNight from "../assets/RainyNight.png";
import stormyDay from "../assets/StormyDay.png";
import stormyNight from "../assets/StormyNight.png";
import snowyDay from "../assets/SnowyDay.png";
import snowyNight from "../assets/SnowyNight.png";
import foggyDay from "../assets/FoggyDay.png";
import foggyNight from "../assets/FoggyNight.png";

export const weatherConditions = [
  {
    day: true,
    condition: "Clear",
    src: sunnyDay,
  },
  {
    day: true,
    condition: "Clouds",
    src: cloudyDay,
  },
  {
    day: true,
    condition: "Fog",
    src: foggyDay,
  },

  {
    day: true,
    condition: "Rain",
    src: rainyDay,
  },
  {
    day: true,
    condition: "Snow",
    src: snowyDay,
  },
  {
    day: true,
    condition: "Storm",
    src: stormyDay,
  },
  {
    day: false,
    condition: "Clear",
    src: sunnyNight,
  },
  {
    day: false,
    condition: "Clouds",
    src: cloudyNight,
  },
  {
    day: false,
    condition: "Fog",
    src: foggyNight,
  },
  {
    day: false,
    condition: "Rain",
    src: rainyNight,
  },
  {
    day: false,
    condition: "Snow",
    src: snowyNight,
  },
  {
    day: false,
    condition: "Storm",
    src: stormyNight,
  },
];
export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const position = {
  latitude: 32.0853,
  longitude: 34.781769,
};

export const APIkey = "cf7194b2a2d732dd6e31ed6c404edd07";

const positionTelAviv = {
  latitude: 32.0853,
  longitude: 34.781769,
};

const positionNewYork = {
  latitude: 40.712776,
  longitude: -74.005974,
};

const positionSydney = {
  latitude: -33.86882,
  longitude: 151.20929,
};

const positionLondon = {
  latitude: 51.507351,
  longitude: -0.127758,
};
