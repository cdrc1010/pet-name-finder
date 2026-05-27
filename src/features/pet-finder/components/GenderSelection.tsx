import { useState } from "react";
import { cn } from "@/lib/utils";
import { GENDER_OPTIONS, type Gender } from "../constants/genderOptions";

const GenderSelection = () => {
  const [selected, setSelected] = useState<Gender>(GENDER_OPTIONS[0]);

  return (
    <div className="flex flex-col items-center gap-4 py-6">
      <p className="text-base text-gray-700 font-medium">
        Choose your pet's gender
      </p>
      <div className="flex items-center gap-2">
        {GENDER_OPTIONS.map((option) => (
          <button
            key={option}
            onClick={() => setSelected(option)}
            className={cn(
              "px-5 py-2 rounded-[5px] text-sm font-medium border transition-colors duration-150 border-red-600",
              selected === option
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-white text-red-700 hover:bg-gray-50",
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenderSelection;
