import React, { ChangeEvent, KeyboardEvent } from "react";
import { optionType } from "../types";
import OptionItem from "./OptionItem";

interface InputFormProps {
  city: string;
  options: optionType[];
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
  handleOptionSelect: (option: optionType) => void;
}

const InputForm: React.FC<InputFormProps> = ({
  city,
  options,
  handleInputChange,
  handleKeyPress,
  handleOptionSelect,
}) => {
  return (
    <div className="relative flex mt-3">
      <input
        type="text"
        placeholder="Enter a city"
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        value={city}
        className="px-2 py-1 rounded-tl-md rounded-br-md border-white shadow-sm outline-none focus:ring-1 focus:ring-blue-400 mt-10 md:mt-4"
      />
      <ul className="absolute top-[52px] w-full bg-white ml-1 rounded-b-md">
        {options.map((option, index) => (
          <OptionItem
            key={option.name + "-" + index}
            option={option}
            handleOptionSelect={handleOptionSelect}
          />
        ))}
      </ul>
    </div>
  );
};

export default InputForm;
