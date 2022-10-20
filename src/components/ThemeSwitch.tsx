export default function ThemeSwitch() {
  let currentTheme = localStorage.getItem("theme");
  const changeTheme = () => {
    if (currentTheme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      currentTheme = "light";
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      currentTheme = "dark";
    }
  };
  return <button onClick={changeTheme}>ThemeSwitch</button>;
}
