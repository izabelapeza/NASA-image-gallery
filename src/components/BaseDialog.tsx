import { useClickOutside } from "../utils/useClickOutside";

interface Props {
  closeDialog: () => void;
}

export default function BaseDialog({ closeDialog }: Props) {
  const dialogRef = useClickOutside(closeDialog);

  return (
    <div className="fixed top-0 w-full h-[100vh] flex justify-center items-center">
      <div ref={dialogRef} className="p-4 bg-zinc-200">
        BaseDialog
        <button onClick={closeDialog}>close</button>
      </div>
    </div>
  );
}
