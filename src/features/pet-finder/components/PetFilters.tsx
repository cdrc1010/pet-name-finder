import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
  description: string | null;
}

interface FilterGroup {
  id: string;
  label: string;
  categoryIds: string[];
}

interface FilterData {
  data: Category[];
  filterGroups: FilterGroup[];
}

interface PetFiltersProps {
  filterData: FilterData;
}

const PetFilters = ({ filterData }: PetFiltersProps) => {
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  const { data: categories, filterGroups } = filterData;

  const getCategoriesByIds = (ids: string[]) =>
    categories.filter((cat) => ids.includes(cat.id));

  const handleToggle = (id: string) => {
    setOpenFilter((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full border-t border-b border-gray-200 bg-white">
      <div className="flex items-center justify-center">
        <div className="px-6 py-4 ">
          <span className="text-sm font-bold text-gray-800">Filters:</span>
        </div>

        <div className="flex items-center flex-wrap px-4 py-3 gap-1 border-r border-l border-gray-200">
          {filterGroups.map((group) => {
            const isOpen = openFilter === group.id;
            const resolvedCategories = getCategoriesByIds(group.categoryIds);

            return (
              <div key={group.id} className="relative">
                <button
                  onClick={() => handleToggle(group.id)}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-700 rounded transition-colors duration-150 hover:bg-gray-50",
                    isOpen && "text-red-600",
                  )}
                >
                  <span>{group.label}</span>
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 text-red-600 transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="absolute top-full left-0 mt-1 z-10 bg-white border border-gray-200 rounded-md shadow-md py-1">
                    {resolvedCategories.map((cat) => (
                      <button
                        key={cat.id}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PetFilters;
