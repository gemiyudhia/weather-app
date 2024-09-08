import axios from "axios";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { optionType } from "./types";
import Tagline from "./Fragments/Tagline";
import InputForm from "./Fragments/InputForm";

// Komponen untuk menampilkan cuaca
const DisplayWeather = () => {
  const [city, setCity] = useState<string>(""); // State untuk menyimpan nama kota
  const [weather, setWeather] = useState<string | null>(null); // State untuk menyimpan cuaca
  const [options, setOptions] = useState<[]>([]); // State untuk menyimpan opsi pencarian

  const getSearchOptions = async (value: string) => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }?q=${value.trim()}&limit=5&appid=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }`
      );
      setOptions(response.data);
    } catch (error) {
      console.error("Error fetching search options:", error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setCity(value);

    if (value) {
      getSearchOptions(value);
    }
  };

  const getForecast = async (cityName: string) => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_CURRENT_API
        }?q=${cityName}&units=metric&appid=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching forecast:", error);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (city) {
        getForecast(city);
      }
    }
  };

  const handleOptionSelect = (option: optionType) => {
    setCity(option.name);
    setOptions([]);
    getForecast(option.name);
  };

  useEffect(() => {
    if (weather) {
      console.log(weather);
      setOptions([]);
    }
  }, [weather]);

  return (
    <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg rounded-lg drop-shadow-lg text-zinc-700">
      <Tagline>
        Enter below a place you want to know the weather of and select an option
        from the dropdown.
      </Tagline>

      <InputForm
        city={city}
        options={options}
        handleInputChange={handleInputChange}
        handleKeyPress={handleKeyPress}
        handleOptionSelect={handleOptionSelect}
      />
    </section>
  );
};

export default DisplayWeather;
