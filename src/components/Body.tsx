import { useState } from "react";
import SearchBar from "./SearchBar.tsx";
import Card from "./Card.tsx";
import BuildingGroups from "./BuildingGroups.tsx";
import { IContent } from "./Content.tsx";
import AddBuilding from "./AddBuilding.tsx";
import DeleteBuilding from "./DeleteBuilding.tsx";
import { useBuildings } from "../api/index.tsx";

const Body = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const buildings = useBuildings();
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
        <BuildingGroups
          searchFilter={filterBuildings}
          buildings={buildings}
          isDeleting={isDeleting}
        />
      </div>
      <div className="grid lg:grid-cols-2 justify-stretch p-1">
        <AddBuilding isDeleting={isDeleting} />
        <DeleteBuilding setIsDeleting={setIsDeleting} isDeleting={isDeleting} />
      </div>
    </>
  );
};

export default Body;
