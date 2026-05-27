import { cn } from "@/lib/utils";
import ALPHABETS from "../../../lib/data/letters.json";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const AlphabetSelection = () => {
  const [activeLetter, setActiveLetter] = useState("A");

  const handleLetterChange = (letter: string) => {
    setActiveLetter(letter);
  };

  return (
    <div className="flex items-center gap-1 flex-wrap border border-gray-200 rounded-full bg-white px-4 py-2 w-fit mb-8">
      {ALPHABETS.data.map((letter) => (
        <Button
          key={letter}
          onClick={() => handleLetterChange(letter)}
          className={cn(
            "w-7 h-7 flex items-center justify-center rounded-full text-sm font-medium transition-colors duration-150 bg-transparent hover:bg-transparent",
            activeLetter === letter
              ? "bg-red-600 text-white"
              : "text-gray-600 hover:text-red-600",
          )}
        >
          {letter}
        </Button>
      ))}
    </div>
  );
};

export default AlphabetSelection;
