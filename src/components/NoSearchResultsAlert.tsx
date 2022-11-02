import { useLocation } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiEmoticonSad } from "@mdi/js";

export default function NoSearchResultsAlert() {
  const location = useLocation();

  const pathname = () => {
    let name = location.pathname.split("/")[2].replace("%20", " ");
    return name
      .split(" ")
      .map((word) => word.slice(0, 1).toLocaleUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="flex items-center gap-1 text-lg md:text-xl text-basicGray dark:text-zinc-100 bg-[rgb(var(--light-theme-4))] dark:bg-[rgb(var(--dark-theme-4))] w-full p-4 rounded border-[1px] border-black dark:border-white border-opacity-10 dark:border-opacity-10">
      <Icon path={mdiEmoticonSad} title="Menu" size={1.7} className="pr-2" /> No
      results found for:<span className="font-bold">{pathname()}</span>
    </div>
  );
}
