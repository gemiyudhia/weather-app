import axios from "axios";
import { ChangeEvent, useState } from "react";
import { optionType } from "./types";

// Komponen untuk menampilkan cuaca
const DisplayWeather = () => {
  // State untuk menyimpan nama kota
  const [city, setCity] = useState<string>("");
  const [options, setOptions] = useState<[]>([]);

  // Fungsi untuk mendapatkan opsi pencarian dari API
  const getSearchOptions = async (value: string) => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }?q=${value.trim()}&limit=5&appid=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }`
      );
      // Proses respons API jika diperlukan
      setOptions(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // Handler untuk perubahan input
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setCity(value);

    // Panggil API jika ada input yang valid
    if (value) {
      getSearchOptions(value);
    }
  };

  const handleOptionSelect = (option: optionType) => {
    console.log(option.name)
  }

  return (
    <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-zinc-700">
      <h1 className="text-4xl font-thin">
        Weather <span className="font-black">Forecast</span>
      </h1>

      <p className="text-sm mt-2">
        Enter below a place you want to know the weather of and select an option
        from the dropdown.
      </p>
      <div className="relative flex mt-3">
        <input
          type="text"
          placeholder="Enter a city"
          onChange={handleInputChange}
          className="px-2 py-1 rounded-tl-md rounded-br-md border-white shadow-sm outline-none focus:ring-1 focus:ring-blue-400 mt-10 md:mt-4"
        />
        <ul className="absolute top-[52px] w-full bg-white ml-1 rounded-b-md">
          {options.map((option: optionType, index: number) => (
            <li key={option.name + '-' + index}>
              <button className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1" onClick={() => handleOptionSelect(option)}>{option.name}</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DisplayWeather;
