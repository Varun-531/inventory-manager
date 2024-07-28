import { Input } from "@/components/ui/input";
import { ComboboxDemo } from "./temp";
import { Search } from "lucide-react";
const SearchBar = () => {
  return (
    <div className="container">
      <div className="flex items-center gap-1">
        <Input placeholder="Search" icon={<Search />} />
        <ComboboxDemo />
      </div>
    </div>
  );
};

export default SearchBar;
