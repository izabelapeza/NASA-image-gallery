import { useEffect, useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";

interface Props {
  imageUrl: string;
  title: string;
  dateCreated: string;
}

export default function PhotoCard({ imageUrl, title, dateCreated }: Props) {
  const photoRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(photoRef);

  return (
    <div
      className={`flex transition w-full h-full ${
        isVisible ? "cursor-pointer hover:scale-[102%]" : ""
      }`}
      ref={photoRef}
    >
      <div className="rounded-lg shadow-lg bg-white dark:bg-[rgb(var(--dark-theme-5))] w-full min-h-[312px]">
        {isVisible ? (
          <>
            <div
              className="h-[200px] w-[100%] bg-center rounded-t"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="p-6">
              <h5 className="text-gray-900 dark:text-zinc-100 text-xl font-medium mb-2">
                {title}
              </h5>
              <p className="text-gray-600 dark:text-zinc-500 text-sm mb-2">
                {dateCreated.split("T")[0]}
              </p>
            </div>
          </>
        ) : (
          <div className="w-full h-full rounded bg-gradient-to-r from-[rgb(var(--light-theme-1))] to-[rgb(var(--light-theme-2))] dark:from-[rgb(var(--dark-theme-1))] dark:to-[rgb(var(--dark-theme-2))] background-animate"></div>
        )}
      </div>
    </div>
  );
}
