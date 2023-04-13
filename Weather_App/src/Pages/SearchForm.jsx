import React, { useContext, useState } from "react";
import { Button, Box, Input } from "@chakra-ui/react";
import { WeatherContext } from "../Context/WeatherProvider";

const SearchForm = () => {
  const { getWeatherData, error, getLocationWeather } = useContext(
    WeatherContext
  );
  const [cityName, setCityName] = useState("");

  const handleOnchange = (e) => {
    setCityName(e.target.value);
  };

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      await getWeatherData(cityName);
      setCityName("");
    }
  };
  const handleDeviceLocation = async () => {
    await getLocationWeather();
  };

  return (
    <Box mt="5rem">
      <Box className="search">
        <Box bg="white">
          {error ? (
            <Box color="white" bg="red.400" p={2} mb="1rem" borderRadius="10px">
              Something went wrong
            </Box>
          ) : (
            ""
          )}
        </Box>
        <Input
          type="text"
          onChange={handleOnchange}
          value={cityName}
          onKeyPress={handleSearch}
          placeholder="Enter city name"
        />
        <br />
        or
        <br />
        <Button w="100%" colorScheme="twitter" onClick={handleDeviceLocation}>
          Get Device Location
        </Button>
      </Box>
    </Box>
  );
};
export default SearchForm;
