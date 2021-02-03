export const REGISTER_LINK = "https://forms.gle/rigzes89tJA2dWcu7";

export const challenges = [
  {
    company: "Vandebron",
    website: "https://vandebron.nl/",
    title: "Will be announced shortly. Stay tuned!",
    logo: "/images/greentech-hackathon/logo-vandebron.jpg",
    hero: "/images/hero.jpg",
    description: "Will be announced shortly. Stay tuned!",
    technology: "TBA",
  },
  {
    company: "Top Dutch Solar Racing",
    website: "https://solarracing.nl/",
    title: "Solar Car Performance Optimalization",
    logo: "/images/greentech-hackathon/logo-top-dutch-solar.jpg",
    hero: "/images/greentech-hackathon/hero-top-dutch-solar-racing.jpg",
    description: `During the Bridgestone World Solar Challenge, solar cars race 3000 km through the outback of Australia. Finishing the race successfully requires accurate predictions and monitoring of the car’s performance. There are many aspects to this challenge. The performance can be predicted and optimized based on weather and route data. The car might then drive faster where it’s cloudy and slower where it’s sunny. Also, a significant fraction of the available energy is harvested outside racing hours, in the evening and morning. The amount of energy that can be harvested there must be predicted accurately. Incoming energy might also be maximised through optimisation of the MPPTs, which determine the optimal voltage for the solar cells. For monitoring, an especially relevant parameter is the state of charge of the battery, which must be calculated based on charge flow and the battery’s voltage.`,
    technology:
      "Datasets are available for the MPPTs and battery. Historic weather data along the route in Australia is available, but solutions should of course also work with new weather predictions.",
  },
  {
    company: "Hack the Planet",
    title: "Discover Climate Change With Camera-traps ",
    website: "https://hack-the-planet.io/",
    logo: "/images/greentech-hackathon/logo-hack-planet.jpg",
    hero: "/images/greentech-hackathon/hero-hack-planet.jpg",
    description:
      'Camera-traps are widely used for conservation and monitoring. Being great in taking photos in challenging conditions they lack something very important... Hack the Planet\'s system modifies existing camera-traps and uses Machine Learning to analyse photos in realtime on-device to detect animals and humans, but could also be used to detech environmental dangers. The system sends alerts to rangers if something of interest was detected. Equipped with a satellite uplink the system can operate anywhere on the globe without any dependency on a GSM / Wifi or Lora network. In this challenge you can use their technology to detect environmental dangers like forest fires or water pollution, and "hack" one of the planets biggest issues!',
    technology:
      "Usage of the camera-trap and its software, access to datasets from previous detected wildlife monitoring",
  },
];

export default {
  REGISTER_LINK,
  challenges,
};
