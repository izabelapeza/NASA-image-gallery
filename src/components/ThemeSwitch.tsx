import { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiWeatherSunny, mdiWeatherNight } from "@mdi/js";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<"dark" | "light" | undefined>(undefined);

  useEffect(() => {
    const currentTheme =
      localStorage.getItem("theme") === "dark" ? "dark" : "light";
    setTheme(currentTheme);
  }, []);

  const changeTheme = () => {
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  };
  return (
    <button onClick={changeTheme}>
      <div className="max-h-10 overflow-hidden">
        <div
          className={`${
            theme === "light"
              ? "opacity-70 hover:opacity-100 h-auto"
              : "opacity-0 h-0"
          } transition text-basicGray dark:text-white`}
        >
          <Icon path={mdiWeatherSunny} title="Sun" size={1.3} />
        </div>
        <div
          className={`${
            theme === "dark"
              ? "opacity-70 hover:opacity-100 h-auto"
              : "opacity-0 h-0"
          } transition text-basicGray dark:text-white`}
        >
          <Icon path={mdiWeatherNight} title="Moon" size={1.2} />
        </div>
      </div>
    </button>
  );
}
