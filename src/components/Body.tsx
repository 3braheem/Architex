import { ReactNode } from "react";

interface IBody {
  children: ReactNode;
}

const Body = ({ children }: IBody) => {
  return (
    <div className="relative flex w-full flex-wrap items-center justify-center font-body">
      {children}
    </div>
  );
};

export default Body;
