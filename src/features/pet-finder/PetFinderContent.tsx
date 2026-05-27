import PetFilters from "./components/PetFilters";
import FILTER_OPTIONS from "../../lib/data/categories.json";
import AlphabetSelection from "./components/AlphabetSelection";
import GenderSelection from "./components/GenderSelection";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import PetNameSelections from "./components/PetNameSelections";

const PetFinderContent = () => {
  return (
    <div>
      <GenderSelection />
      <PetFilters filterData={FILTER_OPTIONS} />
      <Card className="mx-auto w-full max-w-5xl space-y-4 ring-0 shadow-none py-0">
        <CardHeader className="flex flex-col  items-start text-center pt-6 pb-0">
          <h2 className="text-lg font-semibold mb-4">All Pet Names</h2>
          <AlphabetSelection />
        </CardHeader>
        <CardContent>
          <PetNameSelections />
        </CardContent>
      </Card>
    </div>
  );
};

export default PetFinderContent;
