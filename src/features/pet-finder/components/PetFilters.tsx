import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import usePetNameContext from "../hooks/usePetNameContext";

type Category = {
  id: string;
  name: string;
  description: string | null;
};

type FilterGroup = {
  id: string;
  label: string;
  categoryIds: string[];
};

type FilterData = {
  data: Category[];
  filterGroups: FilterGroup[];
};

type PetFiltersProps = {
  filterData: FilterData;
};

const PetFilters = ({ filterData }: PetFiltersProps) => {
  const { filters, setFilters } = usePetNameContext();
  const [openGroupFilter, setOpenGroupFilter] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setFilters((prev) => {
      const exists = prev.category.includes(categoryId);
      return {
        ...prev,
        category: exists
          ? prev.category.filter((id) => id !== categoryId)
          : [...prev.category, categoryId],
      };
    });
  };

  const { data: categories, filterGroups } = filterData;

  const getCategoriesByIds = (ids: string[]) =>
    categories.filter((cat) => ids.includes(cat.id));

  return (
    <div className="w-full border-t border-b border-gray-200 bg-white">
      <div className="flex items-center justify-center">
        <div className="px-6 py-4">
          <span className="text-sm font-bold text-gray-800">Filters:</span>
        </div>

        <div className="flex items-center flex-wrap px-4 py-3 gap-1 border-r border-l border-gray-200">
          {filterGroups.map((group) => {
            const isOpen = openGroupFilter === group.id;
            const resolvedCategories = getCategoriesByIds(group.categoryIds);

            return (
              <DropdownMenu
                key={group.id}
                open={isOpen}
                onOpenChange={(open) =>
                  setOpenGroupFilter(open ? group.id : null)
                }
              >
                <DropdownMenuTrigger asChild>
                  <button
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
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-screen shadow-none border-none ring-0 mt-2.5 p-4">
                  <div className="flex flex-row gap-1">
                    {resolvedCategories.map((cat) => (
                      <label
                        key={cat.id}
                        className="flex items-center gap-2.5 px-1 py-1 rounded cursor-pointer hover:bg-gray-50"
                      >
                        <Checkbox
                          checked={filters.category.includes(cat.id)}
                          onCheckedChange={() => toggleCategory(cat.id)}
                          className="border-red-700 data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600"
                        />
                        <span className="text-sm text-gray-700 select-none">
                          {cat.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PetFilters;
