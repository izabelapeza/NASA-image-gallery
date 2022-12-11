import { Icon } from "@mdi/react";
import { mdiLayersSearch } from "@mdi/js";
import { useNavigate } from "react-router-dom";

export default function RandomSearchBtn() {
  const navigate = useNavigate();

  const samplePhrases = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
    "pluto",
    "sun",
    "black%20hole",
  ];

  const randomSearch = () => {
    navigate(
      `/image-gallery/${
        samplePhrases[Math.floor(Math.random() * samplePhrases.length)]
      }`
    );
  };

  return (
    <div
      onClick={randomSearch}
      className="group flex items-center align-center gap-2 whitespace-nowrap text-basicGray dark:text-white opacity-70 hover:opacity-100 h-[36px] cursor-pointer"
    >
      <div>
        <Icon path={mdiLayersSearch} title="Sun" size={1.3} />
      </div>
      <p className="w-[120px] md:w-[0px] overflow-hidden group-hover:w-[120px] transition-all flex items-center">
        Random search
      </p>
    </div>
  );
}
