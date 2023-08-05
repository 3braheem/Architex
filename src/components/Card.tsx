import { ReactNode } from "react";

interface ICard {
  children: ReactNode;
  onHover?: string;
}

const Card = ({ children, onHover }: ICard) => {
  const navClasses =
    "hover:border-green-400 hover:saturate-100 saturate-[.75] border-black border m-3 pr-3";
  const styles = onHover ? navClasses.concat(" ", onHover) : navClasses;

  return <div className={styles}>{children}</div>;
};

export default Card;
