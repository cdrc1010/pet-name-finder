import type { PetNameFilters } from "../context/PetNameContext";
import NAME_OPTIONS from "../../../lib/data/names.json";
import { useEffect, useState } from "react";
import type { PetName } from "../types/PetNameResponse.types";

const usePetNameOptions = (filter: PetNameFilters) => {
  const [nameOptionsBasedOnFilter, setNameOptionsBasedOnFilter] = useState<
    PetName[]
  >(NAME_OPTIONS.data);

  useEffect(() => {
    const filteredNames = NAME_OPTIONS.data.filter((option) => {
      const matchesGender =
        filter.gender === "" ||
        filter.gender === "Both" ||
        option.gender.includes(filter.gender);

      const matchesCategory =
        filter.category.length === 0 ||
        filter.category.some((cat) => option.categories.includes(cat));

      const matchesFirstLetter =
        filter.firstLetter === "" ||
        option.title.toUpperCase().startsWith(filter.firstLetter.toUpperCase());

      return matchesGender && matchesCategory && matchesFirstLetter;
    });

    setNameOptionsBasedOnFilter(filteredNames);
  }, [filter]);

  return { nameOptionsBasedOnFilter };
};

export default usePetNameOptions;
