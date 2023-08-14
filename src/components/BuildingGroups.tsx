import Card from "./Card.tsx";
import Content from "./Content.tsx";
import { IContent } from "./Content.tsx";

type Filter = {
  searchFilter: (input: IContent[]) => IContent[];
  buildings: IContent[];
};

const BuildingGroups = ({ searchFilter, buildings }: Filter) => {
  return (
    <>
      {searchFilter(buildings).map((item) => (
        <>
          <Card onHover="hover:border-green-400 hover:saturate-100">
            <Content
              description={item.description}
              location={item.location}
              src={item.src}
              alt={item.alt}
            />
          </Card>
        </>
      ))}
    </>
  );
};

export default BuildingGroups;
