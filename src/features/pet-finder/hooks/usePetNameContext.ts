import { useContext } from "react";
import PetNameContext from "../context/PetNameContext";

const usePetNameContext = () => {
  return useContext(PetNameContext);
};

export default usePetNameContext;
