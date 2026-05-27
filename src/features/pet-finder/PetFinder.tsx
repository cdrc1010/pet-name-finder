import PetFinderContent from "./PetFinderContent";
import PetNameProvider from "./provider/PetNameProvider";

const PetFinder = () => {
  return (
    <PetNameProvider>
      <PetFinderContent />
    </PetNameProvider>
  );
};

export default PetFinder;
