import { createContext } from "react";
import type { PetName } from "../types/PetNameResponse.types";

export type PetNameFilters = {
  gender: string;
  category: string[];
  firstLetter: string;
};

export type PetNameContextProps = {
  filters: PetNameFilters;
  setFilters: React.Dispatch<React.SetStateAction<PetNameFilters>>;
  nameOptionsBasedOnFilter: PetName[];
};

const PetNameContext = createContext<PetNameContextProps>({
  filters: {
    gender: "",
    category: [],
    firstLetter: "",
  },
  setFilters: () => {},
  nameOptionsBasedOnFilter: [],
});

export default PetNameContext;
