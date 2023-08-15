import { useState } from "react";
import SearchBar from "./SearchBar.tsx";
import Card from "./Card.tsx";
import BuildingGroups from "./BuildingGroups.tsx";
import { IContent } from "./Content.tsx";
import AddBuilding from "./AddBuilding.tsx";
import DeleteBuilding from "./DeleteBuilding.tsx";

const Body = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const filterBuildings = (data: IContent[]) => {
    return data.filter(
      (item: IContent) =>
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const lideta =
    "https://s3.amazonaws.com/media.archnet2.org/f8evrga5pew66zagkysmjri5p3zz?response-content-disposition=inline%3B%20filename%3D%2201_4929.jpg%22%3B%20filename%2A%3DUTF-8%27%2701_4929.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY5HI6LAFBDPCQ43G%2F20230804%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230804T214625Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=b38095774a82e72c81475ff25c58fffd9ede6aa62fc11f5717b52be02f7b5712";
  const sliceHouse =
    "https://admin.archnet.org/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMG1vQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--ba4607db13a6a4f35ae95bc72efd55ef8c573ca4/04_P06008.jpg";
  const kingdomMediator =
    "https://admin.archnet.org/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK2VuQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--fd2af14796c4f3b75eebaff8c1d5e28488cdc573/04_5878.jpg";
  const rossLangdon =
    "https://admin.archnet.org/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd2VmQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c4db41bafbbdddb76bacd609b8b0d73874d1f1e2/01_4910.jpg";
  const alKhalifiyyah =
    "https://admin.archnet.org/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMTJnQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--132ab7c892aa8dc9d47140f978e40eda7afc87f2/01_5071.jpg";
  const aabaan =
    "https://admin.archnet.org/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMnQxQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--412eb06535dbb641f200e20fd02eeddc7f8a3873/01_4933.jpg";

  const buildings: IContent[] = [
    {
      description: "Lideta Market",
      location: "Addis Ababa, Ethiopia",
      src: lideta,
      alt: "A Contemporary/Traditional mall in Addis Ababa, Ethiopia.",
    },
    {
      description: "Slice House",
      location: "Kuwait City, Kuwait",
      src: sliceHouse,
      alt: "A Contemporary but Modern house in Kuwait.",
    },
    {
      description: "Kingdom Mediator HQ",
      location: "Rabat, Morocco",
      src: kingdomMediator,
      alt: "Contemporary take on Traditional Moroccan medinas in a government building.",
    },
    {
      description: "Ross Langdon Hall",
      location: "Mannya, Uganda",
      src: rossLangdon,
      alt: "A village hall designed for health education in a Sustainable style.",
    },
    {
      description: "Al-Khalifiyyah Library",
      location: "Muharraq, Bahrain",
      src: alKhalifiyyah,
      alt: "A Contemporary public library.",
    },
    {
      description: "Aabaan Communal Kitchen",
      location: "Tehran, Iran",
      src: aabaan,
      alt: "Contemporary communal kitchen design in a run-down Tehran neighborhood.",
    },
  ];

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
