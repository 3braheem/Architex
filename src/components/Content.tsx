import DeleteBuildingDialog from "./DeleteBuildingDialog";

export interface IContent {
  id?: number;
  name: string;
  location: string;
  image: string;
  alt: string;
  isDeleting?: boolean;
}

const Content = ({ name, location, image, alt, isDeleting }: IContent) => {
  return (
    <>
      <div className="flex justify-items-start lg:w-[33rem] h-72 overflow-hidden">
        <img src={image} alt={alt} className="w-full h-full object-cover" />
        <div className="flex flex-col content-end pl-3 pt-3">
          <h2>{name}</h2>
          <h3 className="text-xs text-slate-600">{location}</h3>
        </div>
      </div>
      <DeleteBuildingDialog isDeleting={isDeleting} />
    </>
  );
};

export default Content;
