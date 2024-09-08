import React from "react";
import { optionType } from "../types";

interface OptionItemProps {
  option: optionType;
  handleOptionSelect: (option: optionType) => void;
}

const OptionItem: React.FC<OptionItemProps> = ({
  option,
  handleOptionSelect,
}) => {
  return (
    <li>
      <button
        type="button"
        className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1"
        onClick={() => handleOptionSelect(option)}
      >
        {option.name}
      </button>
    </li>
  );
};

export default OptionItem;
