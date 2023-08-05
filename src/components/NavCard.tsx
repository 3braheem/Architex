import { ReactNode } from "react";

interface INavCard {
  children: ReactNode;
}

const Card = ({ children }: INavCard) => {
  return (
    <div className="border-black border m-3 p-3 hover:bg-green-400 hover:text-white">
      {children}
    </div>
  );
};

export default Card;
