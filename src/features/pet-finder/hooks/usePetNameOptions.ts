import type { PetNameFilters } from "../context/PetNameContext";
import NAME_OPTIONS from "../../../lib/data/names.json";
import { useEffect, useState } from "react";
import type { PetName } from "../types/PetNameResponse.types";

const PAGE_SIZE = 9;

const usePetNameOptions = (filter: PetNameFilters) => {
  const [page, setPage] = useState(0);
  const [nameOptionsBasedOnFilter, setNameOptionsBasedOnFilter] = useState<
    PetName[]
  >([]);

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
    setPage(0);
  }, [filter]);

  const totalPages = Math.ceil(nameOptionsBasedOnFilter.length / PAGE_SIZE);
  const paginatedNames = nameOptionsBasedOnFilter.slice(
    page * PAGE_SIZE,
    (page + 1) * PAGE_SIZE,
  );

  return {
    nameOptionsBasedOnFilter: paginatedNames,
    allFilteredNames: nameOptionsBasedOnFilter,
    page,
    setPage,
    totalPages,
  };
};

export default usePetNameOptions;
