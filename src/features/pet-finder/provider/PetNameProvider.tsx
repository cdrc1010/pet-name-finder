import { useState, type FunctionComponent, type ReactNode } from "react";
import PetNameContext, { type PetNameFilters } from "../context/PetNameContext";
import usePetNameOptions from "../hooks/usePetNameOptions";

type PetNameProviderProps = {
  children: ReactNode;
};

const PetNameProvider: FunctionComponent<PetNameProviderProps> = ({
  children,
}) => {
  const [filters, setFilters] = useState<PetNameFilters>({
    gender: "",
    category: [],
    firstLetter: "",
  });

  const { nameOptionsBasedOnFilter } = usePetNameOptions(filters);
  return (
    <PetNameContext.Provider
      value={{ filters, setFilters, nameOptionsBasedOnFilter }}
    >
      {children}
    </PetNameContext.Provider>
  );
};

export default PetNameProvider;
