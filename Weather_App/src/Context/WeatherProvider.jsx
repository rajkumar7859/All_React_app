import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const API_KEY = "d5511f6d348ee1cd5a339b4e6fded882";
  const [weather, setWeather] = useState({});
  const navigate = useNavigate();

  const [error, setError] = useState(false);

  const getWeatherData = async (cityName) => {
    try {
      const data = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      setWeather(data.data);
      setError(false);
      navigate("/weatherapp");
      console.log("data", data.data);
    } catch (error) {
      console.log(error.message);
      setError(true);
    }
  };

  const getWeatherDataFromLocation = async (position) => {
    try {
      const { latitude, longitude } = position.coords;
      const data = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
      );
      setWeather(data.data);
      setError(false);
      navigate("/weatherapp");
      console.log("data", data.data);
    } catch (error) {
      console.log(error.message);
      setError(true);
    }
  };

  const getLocationWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getWeatherDataFromLocation);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const contextValue = {
    weather,
    error,
    getWeatherData,
    getLocationWeather
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
