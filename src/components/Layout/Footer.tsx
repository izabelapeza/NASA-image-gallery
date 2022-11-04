export default function Footer() {
  return (
    <footer className="w-full flex justify-center border-t-[1px] border-black dark:border-white border-opacity-10 dark:border-opacity-10 mt-6">
      <span className="text-sm text-gray-500 text-center dark:text-gray-400 py-4">
        © 2022{" "}
        <a
          href="https://github.com/izabelapeza"
          target="_blank"
          className="hover:underline"
        >
          Izabela Pęza
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
