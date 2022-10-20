import BaseSearch from "./BaseSearch";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  return (
    <nav className="sticky top-0">
      <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
        <div className="flex justify-between items-center px-8 py-2 max-w-[1440px] m-auto">
          <div className="flex items-center gap-6">
            <p className="font-black text-2xl text-white">Space Explorer</p>
            <BaseSearch />
          </div>
          <div>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}
