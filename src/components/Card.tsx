import { ReactNode } from "react";
import { cn } from "../../@/lib/utils";

interface ICard {
  children: ReactNode;
  className?: string;
  onHover?: string;
}

const Card = ({ children, onHover, className }: ICard) => {
  const navClasses = "saturate-[.75] border-black border m-3 pr-3";
  const styles = cn(navClasses, onHover, className);

  return <div className={styles}>{children}</div>;
};

export default Card;
