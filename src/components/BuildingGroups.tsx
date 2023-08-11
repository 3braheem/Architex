import Card from "./Card.tsx";
import Content from "./Content.tsx";
import { IContent } from "./Content.tsx";
import { useInfiniteQuery } from "react-query";
import { useRef, useEffect, useState } from "react";

type Filter = {
  filterBy: (input: IContent[]) => IContent[];
};

const BuildingGroups = ({ filterBy }: Filter) => {
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

  const repeatedBuildings: IContent[] = [];

  for (let i = 0; i < 8; i++) {
    repeatedBuildings.push(...buildings);
  }

  const fetchGroup = async (page: number) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return repeatedBuildings.slice((page - 1) * 6, page * 6);
  };

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ["query"],
    async ({ pageParam = 1 }) => {
      const res = await fetchGroup(pageParam);
      return res;
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
      initialData: {
        pages: [repeatedBuildings.slice(0, 6)],
        pageParams: [1],
      },
    }
  );

  /*   const elementRef = useRef();
  const [isVisible, setVisible] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
    });
    //observer.observe(elementRef.current);
  }, []); */

  return (
    <>
      {filterBy(repeatedBuildings).map((item) => (
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
      {/* <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
        {isFetchingNextPage
          ? "Loading More..."
          : (data?.pages.length ?? 0) < 8
          ? "Load More"
          : "Nothing More to Load."}
      </button> */}
    </>
  );
};

export default BuildingGroups;
