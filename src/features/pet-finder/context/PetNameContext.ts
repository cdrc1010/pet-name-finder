import { createContext } from "react";
import type { PetName } from "../types/PetNameResponse.types";

export type PetNameFilters = {
  gender: string;
  category: string[];
  firstLetter: string;
};

export type PetNameContextType = {
  filters: PetNameFilters;
  setFilters: React.Dispatch<React.SetStateAction<PetNameFilters>>;
  nameOptionsBasedOnFilter: PetName[];
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
};

const PetNameContext = createContext<PetNameContextType>({
  filters: {
    gender: "",
    category: [],
    firstLetter: "",
  },
  setFilters: () => {},
  nameOptionsBasedOnFilter: [],
  page: 0,
  setPage: () => {},
  totalPages: 0,
});

export default PetNameContext;
