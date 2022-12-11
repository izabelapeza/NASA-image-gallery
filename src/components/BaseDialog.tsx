import { useClickOutside } from "../hooks/useClickOutside";
import { Photo } from "../types/photo";
import { Icon } from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { useEffect } from "react";

interface Props {
  closeDialog: () => void;
  photo: Photo;
}

export default function BaseDialog({ closeDialog, photo }: Props) {
  const dialogRef = useClickOutside(closeDialog);

  return (
    <div className="fixed top-0 w-full h-[100vh] flex justify-center items-center text-gray-900 dark:text-zinc-100 backdrop-blur-sm z-20">
      <div
        ref={dialogRef}
        className="p-4 bg-[rgb(var(--light-theme-1))] dark:bg-[rgb(var(--dark-theme-5))] shadow-xl rounded px-4 pb-6 mx-4"
      >
        <div className="flex justify-between items-center pb-[0.5rem]">
          <span className="text-sm opacity-50">{photo.data[0].title}</span>
          <div
            onClick={closeDialog}
            className="opacity-50 hover:opacity-100 hover:rotate-[90deg] transition-all cursor-pointer"
          >
            <Icon path={mdiClose} title="Sun" size={0.8} />
          </div>
        </div>
        <img className="rounded" src={photo.links[0].href} alt="Logo" />
      </div>
    </div>
  );
}
