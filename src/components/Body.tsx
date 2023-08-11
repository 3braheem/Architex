import { useState } from "react";
import SearchBar from "./SearchBar.tsx";
import Card from "./Card.tsx";
import BuildingGroups from "./BuildingGroups.tsx";
import { IContent } from "./Content.tsx";

const Body = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filterBuildings = (data: IContent[]) => {
    return data.filter(
      (item: IContent) =>
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <>
      <Card>
        <SearchBar handleSearch={setSearchTerm} />
      </Card>
      <div className="grid lg:grid-cols-2 w-full items-center justify-center font-body">
        <BuildingGroups filterBy={filterBuildings} />
      </div>
    </>
  );
};

export default Body;
