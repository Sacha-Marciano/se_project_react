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

const weatherConditions = [
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

const position = {
  latitude: 32.0853,
  longitude: 34.781769,
};

const APIkey = "cf7194b2a2d732dd6e31ed6c404edd07";

export { APIkey, position, weatherConditions };
// Different cities coordonates
// const positionTelAviv = {
//   latitude: 32.0853,
//   longitude: 34.781769,
// };

// const positionNewYork = {
//   latitude: 40.712776,
//   longitude: -74.005974,
// };

// const positionSydney = {
//   latitude: -33.86882,
//   longitude: 151.20929,
// };

// const positionLondon = {
//   latitude: 51.507351,
//   longitude: -0.127758,
// };
