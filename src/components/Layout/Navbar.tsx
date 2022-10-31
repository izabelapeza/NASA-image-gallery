import BaseSearch from "../SearchElements/BaseSearch";
import RandomSearchBtn from "../SearchElements/RandomSearchBtn";
import ThemeSwitch from "../ThemeSwitch";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const pathname = () => {
    let name = location.pathname.split("/")[2].replace("%20", " ");
    return name
      .split(" ")
      .map((word) => word.slice(0, 1).toLocaleUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <nav className="sticky top-0 z-10">
      <div className="gradient-nav border-b-[1px] border-black dark:border-white border-opacity-10 dark:border-opacity-10">
        <div className="flex justify-between items-center px-8 py-2 max-w-[1440px] m-auto">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-5 text-basicGray dark:text-white">
              <span
                onClick={() => {
                  navigate("/");
                }}
                className="font-black text-2xl cursor-pointer"
              >
                Space Explorer
              </span>
              <span className="text-md h-full translate-y-[0.1rem]">
                {pathname()}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <RandomSearchBtn />
            <ThemeSwitch />
            <BaseSearch onlyLightSearch={false} />
          </div>
        </div>
      </div>
    </nav>
  );
}
