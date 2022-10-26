import BaseSearch from "./BaseSearch";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10">
      <div className="gradient-nav border-b-[1px] border-black dark:border-white border-opacity-10 dark:border-opacity-10">
        <div className="flex justify-between items-center px-8 py-2 max-w-[1440px] m-auto">
          <div className="flex items-center gap-6">
            <p className="font-black text-2xl text-basicGray dark:text-white">
              Space Explorer
            </p>
          </div>
          <div className="flex items-center gap-3">
            <ThemeSwitch />
            <BaseSearch onlyLightSearch={false} />
          </div>
        </div>
      </div>
    </nav>
  );
}
