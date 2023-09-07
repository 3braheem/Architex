import { Button } from "../../@/components/ui/button";
import { Label } from "../../@/components/ui/label";
import { Input } from "../../@/components/ui/input";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useForm, SubmitHandler } from "react-hook-form";

interface IAddBuilding {
  isDeleting: boolean;
}

type Inputs = {
  name: string,
  location: string,
  img: string,
  alt: string,
}

const AddBuilding = ({ isDeleting }: IAddBuilding) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  const disabledOrNot = isDeleting
    ? "font-body p-3 m-1 border border-black opacity-50"
    : "font-body p-3 m-1 border border-black hover:border-green-700";
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button className={disabledOrNot} disabled={isDeleting}>
          Add
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-stone-200/30 fixed inset-0" />
        <Dialog.Content className="bg-white shadow-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 focus:outline-none w-96 lg:w-1/3">
          <Dialog.Title className="pb-4 text-xl font-display">
            Add a Building
          </Dialog.Title>
          <Dialog.Description className="pb-4 font-body text-slate-800">
            Enter the given parameters to add a building of your choice to the
            site.
          </Dialog.Description>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="flex gap-8 mb-2 items-center">
              <Label
                className="font-body text-slate-600 text-sm w-24"
                htmlFor="name"
              >
                Name
              </Label>
              <Input
                className="flex justify-center items-center focus:outline-none focus:border-green-400 p-2 font-body text-slate-700 border border-black w-full"
                id="name"
                {...register("name", { required: true })}
              />{errors.name && <span>This field is required</span>}
            </fieldset>
            <fieldset className="flex gap-8 mb-2 items-center">
              <Label
                className="font-body text-slate-700 text-sm w-24"
                htmlFor="location"
              >
                Location
              </Label>
              <Input
                className="flex justify-center items-center focus:outline-none focus:border-green-400 p-2 font-body text-slate-700 border border-black w-full"
                id="location"
                {...register("location", { required: true })}
              />{errors.location && <span>This field is required</span>}
            </fieldset>
            <fieldset className="flex gap-8 mb-2 items-center">
              <Label
                className="font-body text-slate-600 text-sm w-24"
                htmlFor="imglink"
              >
                Image URL
              </Label>
              <Input
                className="flex justify-center items-center focus:outline-none focus:border-green-400 p-2 font-body text-slate-700 border border-black w-full"
                id="imglink"
                {...register("img", { required: true })}
              />{errors.img && <span>This field is required</span>}
            </fieldset>
            <fieldset className="flex gap-8 items-center">
              <Label
                className="font-body text-slate-600 text-sm w-24"
                htmlFor="alttext"
              >
                Alt
              </Label>
              <Input
                className="flex justify-center items-center focus:outline-none focus:border-green-400 p-2 font-body text-slate-700 border border-black w-full"
                id="alttext"
                {...register("alt", { required: true })}
              />{errors.alt && <span>This field is required</span>}
            </fieldset>
            <div
              style={{
                display: "flex",
                marginTop: 25,
                justifyContent: "flex-end",
              }}
            ></div>
            <div className="flex justify-between">
              <Dialog.Close asChild>
                <Button className="IconButton" aria-label="Close">
                  <Cross2Icon />
                </Button>
              </Dialog.Close>
              <Button type="submit" value="Submit" className="bg-slate-400 hover:bg-green-400 text-white font-body p-2">
                Submit
              </Button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root >
  );
};

export default AddBuilding;
