import { cn } from "@/lib/utils";
import usePetNameContext from "../hooks/usePetNameContext";

const GENDER_OPTIONS = [
  { label: "Male", value: "M" },
  { label: "Female", value: "F" },
  { label: "Both", value: "Both" },
] as const;

const GenderSelection = () => {
  const { filters, setFilters } = usePetNameContext();

  return (
    <div className="flex flex-col items-center gap-4 py-6">
      <p className="text-base text-gray-700 font-medium">
        Choose your pet's gender
      </p>
      <div className="flex items-center gap-2">
        {GENDER_OPTIONS.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setFilters((prev) => ({ ...prev, gender: value }))}
            className={cn(
              "px-5 py-2 rounded-[5px] text-sm font-medium border transition-colors duration-150 border-red-600",
              filters.gender === value
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-white text-red-700 hover:bg-gray-50",
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenderSelection;
