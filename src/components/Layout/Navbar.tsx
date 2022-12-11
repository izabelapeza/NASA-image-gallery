import BaseSearch from "../SearchElements/BaseSearch";
import RandomSearchBtn from "../SearchElements/RandomSearchBtn";
import ThemeSwitch from "../ThemeSwitch";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Icon } from "@mdi/react";
import { mdiMenu, mdiClose } from "@mdi/js";
import { useEffect, useState } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const windowWidth = useWindowWidth();

  const pathname = () => {
    let name = location.pathname.split("/")[2].replace("%20", " ");
    return name
      .split(" ")
      .map((word) => word.slice(0, 1).toLocaleUpperCase() + word.slice(1))
      .join(" ");
  };

  useEffect(() => {
    if (windowWidth > 768) setOpenMenu(false);
  }, [windowWidth]);

  return (
    <nav className="fixed w-full top-0 z-10">
      <div
        className={`gradient-nav border-b-[1px] border-black dark:border-white border-opacity-10 dark:border-opacity-10 transition-all ${
          openMenu ? "h-[120px]" : "h-[49px]"
        }`}
      >
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
          <div className="items-center gap-3 hidden md:flex">
            <RandomSearchBtn />
            <ThemeSwitch />
            <BaseSearch onlyLightSearch={false} />
          </div>
          <div className="flex md:hidden text-basicGray dark:text-white opacity-70 hover:opacity-100 cursor-pointer">
            <div
              className="relative h-[36px] w-[36px]"
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              <div
                className={`absolute top-0 left-0 ${
                  openMenu ? "opacity-100" : "opacity-0"
                } tranistion`}
              >
                <Icon path={mdiClose} title="Menu" size={1.3} />
              </div>
              <div
                className={`absolute top-0 left-0 ${
                  openMenu ? "opacity-0" : "opacity-100"
                } tranistion`}
              >
                <Icon path={mdiMenu} title="Menu" size={1.3} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex gap-2 justify-center items-center px-8 py-2 max-w-[1440px] m-auto overflow-hidden transition-all ${
            openMenu ? "h-[64px] opacity-100" : "h-[0px] opacity-0"
          }`}
        >
          <BaseSearch onlyLightSearch={false} />
          <RandomSearchBtn />
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
