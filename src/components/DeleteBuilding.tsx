import { Button } from "../../@/components/ui/button";

interface IDeleteBuilding {
  setIsDeleting: (arg: boolean) => void;
  isDeleting: boolean;
}

const DeleteBuilding = ({ setIsDeleting, isDeleting }: IDeleteBuilding) => {
  return (
    <Button
      className="font-body p-3 m-1 border border-black hover:border-green-700"
      onClick={() => setIsDeleting(!isDeleting)}
    >
      {isDeleting ? "Cancel" : "Delete"}
    </Button>
  );
};

export default DeleteBuilding;
