import Image from "next/image";
import Header from "./components/Header";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AddProducts from "./components/AddProducts";
import CurrentProducts from "./components/CurrentProducts";
import SearchBar from "./components/Search";
import { ComboboxDemo } from "./components/temp";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mx-auto space-y-10">
        <SearchBar />
        <AddProducts />
        <CurrentProducts />
      </div>
    </>
  );
}
