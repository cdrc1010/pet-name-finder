import { useState, useMemo } from "react";
import {
  ChevronUp,
  ChevronDown,
  Mars,
  Venus,
  Share2,
  Heart,
  BookmarkPlus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import NAME_OPTIONS from "../../../lib/data/names.json";
import Dog from "../../../assets/896666b218bed98b9ef8553ee936646ef57108a3.png";
import { Button } from "@/components/ui/button";

interface PetName {
  id: string;
  title: string;
  definition: string;
  gender: string[];
  categories: string[];
}

const VISIBLE_COUNT = 9;
const ACTIVE_INDEX = 4;

const stripHtml = (html: string) =>
  html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();

const PetNameSelections = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedName, setSelectedName] = useState<PetName | null>(null);

  const groupedNames = useMemo(() => {
    return NAME_OPTIONS.data.reduce<Record<string, PetName[]>>((acc, name) => {
      const key = name.title.charAt(0).toUpperCase();
      acc[key] = [...(acc[key] ?? []), name as PetName];
      return acc;
    }, {});
  }, []);

  const names = groupedNames["A"] ?? [];
  const visibleNames = names.slice(startIndex, startIndex + VISIBLE_COUNT);

  const canScrollUp = startIndex > 0;
  const canScrollDown = startIndex + VISIBLE_COUNT < names.length;

  const handleNameSelect = (name: PetName) => {
    setSelectedName((prev) => (prev?.id === name.id ? null : name));
  };

  const getGenderIcon = (gender: string[]) => {
    if (gender.includes("M"))
      return <Mars className="w-4 h-4 text-gray-500" strokeWidth={1.5} />;
    return <Venus className="w-4 h-4 text-gray-500" strokeWidth={1.5} />;
  };

  const getCategoryLabel = (name: PetName) =>
    name.categories.length === 0
      ? "General"
      : `${name.categories.length} categor${name.categories.length === 1 ? "y" : "ies"}`;

  const relatedNames = useMemo(() => {
    if (!selectedName) return [];
    const letter = selectedName.title.charAt(0).toUpperCase();
    const group = groupedNames[letter] ?? [];
    const idx = group.findIndex((n) => n.id === selectedName.id);
    return group
      .filter((_, i) => i !== idx)
      .slice(0, 3)
      .map((n) => n.title);
  }, [selectedName, groupedNames]);

  return (
    <div className="flex flex-row overflow-hidden">
      {!selectedName && (
        <div className="w-2/5 flex items-end justify-center">
          <img
            src={Dog}
            alt="Pet"
            className="w-full h-64 object-contain object-bottom"
          />
        </div>
      )}

      <div className={cn("flex flex-col", selectedName ? "w-fit" : "w-3/5")}>
        <div
          className={cn(
            "flex flex-row self-start",
            selectedName && "flex-row-reverse mr-10",
          )}
        >
          <div
            className={cn(
              "flex flex-col pr-4 w-37.5",
              selectedName ? "pl-10" : "",
            )}
          >
            {visibleNames.map((name, idx) => {
              const isActive = idx === ACTIVE_INDEX;
              const isNearActive =
                idx === ACTIVE_INDEX - 1 || idx === ACTIVE_INDEX + 1;
              const isSelected = selectedName?.id === name.id;

              return (
                <Button
                  key={name.id}
                  onClick={() => handleNameSelect(name)}
                  className={cn(
                    "text-left leading-7 select-none transition-all duration-150  bg-transparent hover:bg-transparent hover:text-red-500",
                    isSelected
                      ? "text-red-600 font-bold text-xl"
                      : isActive && !selectedName
                        ? "text-red-600 font-bold text-2xl leading-9"
                        : isNearActive && !selectedName
                          ? "text-gray-500 text-lg font-medium"
                          : "text-gray-300 text-lg",
                  )}
                >
                  {name.title}
                </Button>
              );
            })}
          </div>

          <div className="flex flex-col justify-between">
            <Button
              onClick={() => setStartIndex((i) => Math.max(0, i - 1))}
              disabled={!canScrollUp}
              className={cn(
                "text-red-600 transition-opacity bg-transparent hover:bg-transparent",
                !canScrollUp && "opacity-20 cursor-not-allowed",
              )}
            >
              <ChevronUp className="size-10" />
            </Button>
            <Button
              onClick={() => setStartIndex((i) => (canScrollDown ? i + 1 : i))}
              disabled={!canScrollDown}
              className={cn(
                "text-red-600 transition-opacity  bg-transparent hover:bg-transparent",
                !canScrollDown && "opacity-20 cursor-not-allowed",
              )}
            >
              <ChevronDown className="size-10" />
            </Button>
          </div>
        </div>
      </div>

      {selectedName && (
        <div className="w-3/5 flex flex-col justify-between ">
          {/* Top section */}
          <div>
            {/* Gender + category */}
            <div className="flex items-center gap-2 mb-5">
              {getGenderIcon(selectedName.gender)}
              <span className="text-sm text-gray-500">
                {getCategoryLabel(selectedName)}
              </span>
            </div>

            <Separator className="mb-6 bg-gray-200" />

            {/* Definition */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {stripHtml(selectedName.definition)}
            </p>
          </div>

          {/* Bottom section */}
          <div>
            <Separator className="mb-4 bg-gray-200" />
            <p className="text-xs text-gray-400 mb-2 text-center">
              Related name
            </p>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                {relatedNames.join(" · ")}
              </p>
              <div className="flex items-center gap-2">
                <button className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <Heart className="w-3 h-3 text-gray-400" />
                </button>
                <button className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <BookmarkPlus className="w-3 h-3 text-gray-400" />
                </button>
                <button className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <Share2 className="w-3 h-3 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetNameSelections;
