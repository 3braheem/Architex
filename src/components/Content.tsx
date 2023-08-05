export interface IContent {
  key?: number;
  description: string;
  location: string;
  src: string;
  alt: string;
}

const Content = ({ description, location, src, alt }: IContent) => {
  return (
    <div className="flex justify-items-start w-[22rem] h-56 overflow-hidden">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      <div className="flex flex-col content-end pl-3 pt-3">
        <h2>{description}</h2>
        <h3 className="text-xs text-slate-600">{location}</h3>
      </div>
    </div>
  );
};

export default Content;
