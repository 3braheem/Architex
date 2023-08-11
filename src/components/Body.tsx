import { useState } from "react";
import SearchBar from "./SearchBar.tsx";
import Card from "./Card.tsx";
import BuildingGroups from "./BuildingGroups.tsx";
import { IContent } from "./Content.tsx";

const Body = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filterBuildings = (data: IContent[]) => {
    return data.filter((item: IContent) =>
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <>
      <Card>
        <SearchBar handleSearch={setSearchTerm} />
      </Card>
      <div className="relative flex w-full flex-wrap items-center justify-center font-body">
        <BuildingGroups filterBy={filterBuildings} />
      </div>
    </>
  );
};

export default Body;
