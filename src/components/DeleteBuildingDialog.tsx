import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "../../@/components/ui/button";
import * as Dialog from "@radix-ui/react-dialog";

interface IDeleteBuildingDialog {
  isDeleting: boolean | undefined;
}

const DeleteBuildingDialog = ({ isDeleting }: IDeleteBuildingDialog) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
          className={isDeleting ? "absolute bottom-0 right-0 p-2" : "hidden"}
          aria-label="Close"
        >
          <Cross2Icon color="#f87171" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-stone-200/30 fixed inset-0" />
        <Dialog.Content className="bg-white shadow-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 focus:outline-none w-96 lg:w-1/3">
          <Dialog.Title className="pb-4 text-xl font-display">
            Delete Building
          </Dialog.Title>
          <Dialog.Description className="pb-4 font-body text-slate-800">
            WARNING! Are you sure you want to delete this entry?
          </Dialog.Description>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          ></div>
          <div className="flex justify-end">
            <Dialog.Close asChild>
              <Button className="bg-slate-400 hover:bg-red-400 text-white font-body p-2 mx-2 w-12">
                Yes
              </Button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Button className="bg-slate-400 hover:bg-slate-500 text-white font-body p-2 mx-2 w-12">
                No
              </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DeleteBuildingDialog;
