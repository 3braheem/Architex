import Card from "./Card.tsx";
import Content from "./Content.tsx";
import { IContent } from "./Content.tsx";

type Filter = {
  searchFilter: (input: IContent[]) => IContent[];
  buildings: IContent[];
  isDeleting: boolean;
};

const BuildingGroups = ({ searchFilter, buildings, isDeleting }: Filter) => {
  return (
    <>
      {searchFilter(buildings).map((item) => (
        <>
          <Card
            onHover="hover:border-green-400 hover:saturate-100"
            className={isDeleting ? "border-red-400 hover:border-red-400" : ""}
          >
            <Content
              description={item.description}
              location={item.location}
              src={item.src}
              alt={item.alt}
              isDeleting={isDeleting}
            />
          </Card>
        </>
      ))}
    </>
  );
};

export default BuildingGroups;
