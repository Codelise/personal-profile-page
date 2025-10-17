"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [theme, setTheme] = useState("dark");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.body.className = savedTheme === "light" ? "light-mode" : "";
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.className = newTheme === "light" ? "light-mode" : "";
    localStorage.setItem("theme", newTheme);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header className="hidden lg:flex justify-between items-center border-b border-theme px-4 py-3 header-bg sticky top-0 z-50 animate-slideDown">
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/logo.svg"
            width="64"
            height="64"
            alt="coding logo"
          />
          <h2 className="text-primary text-3xl font-['Bitcount_Prop_Single'] font-bold tracking-tight hover:text-[var(--accent-color)] transition-colors">
            AERYUN
          </h2>
        </div>
        <nav className="flex items-center gap-6 font-['Bitcount_Prop_Single']">
          <Link
            href="/"
            className="text-primary text-xl font-medium relative hover:text-[var(--accent-color)] transition-colors after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:bg-[var(--accent-color)] after:transition-all hover:after:w-full"
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="text-primary text-xl font-medium relative hover:text-[var(--accent-color)] transition-colors after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:bg-[var(--accent-color)] after:transition-all hover:after:w-full"
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            className="text-primary text-xl font-medium relative hover:text-[var(--accent-color)] transition-colors after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:bg-[var(--accent-color)] after:transition-all hover:after:w-full"
          >
            CONTACT
          </Link>
          {/* COMMENT KO MUNA, NAGLOLOKO PA */}
          {/* <button
            onClick={toggleTheme}
            className="card-bg border border-theme rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-primary"
            >
              {theme === "dark" ? (
                <path
                  d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              ) : (
                <path
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              )}
            </svg>
          </button> */}
        </nav>
      </header>

      <header className="lg:hidden flex justify-between items-center border-b border-theme px-4 py-3 header-bg sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/logo.svg"
            width="48"
            height="48"
            alt="coding logo"
          />
          <h2 className="text-primary text-2xl font-['Bitcount_Prop_Single'] font-bold tracking-tight">
            AERYUN
          </h2>
        </div>

        <div className="flex items-center gap-4">
          {/* Comment ko muna, nagloloko pa */}
          {/* <button
            onClick={toggleTheme}
            className="card-bg border border-theme rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-primary"
            >
              {theme === "dark" ? (
                <path
                  d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              ) : (
                <path
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              )}
            </svg>
          </button> */}

          <button
            onClick={toggleSidebar}
            className="card-bg border border-theme rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
          >
            <svg
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-primary"
            >
              <path
                d="M3 7C3 6.44772 3.44772 6 4 6H26C26.5523 6 27 6.44772 27 7C27 7.55228 26.5523 8 26 8H4C3.44772 8 3 7.55228 3 7Z"
                fill="currentColor"
              />
              <path
                d="M3 15C3 14.4477 3.44772 14 4 14H26C26.5523 14 27 14.4477 27 15C27 15.5523 26.5523 16 26 16H4C3.44772 16 3 15.5523 3 15Z"
                fill="currentColor"
              />
              <path
                d="M4 22C3.44772 22 3 22.4477 3 23C3 23.5523 3.44772 24 4 24H26C26.5523 24 27 23.5523 27 23C27 22.4477 26.5523 22 26 22H4Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </header>

      <aside
        className={`
        lg:hidden fixed top-0 right-0 w-80 h-full header-bg border-l border-theme z-50 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-primary text-2xl font-['Bitcount_Prop_Single'] font-bold">
              Menu
            </h2>
            <button
              onClick={closeSidebar}
              className="text-primary text-2xl hover:text-[var(--accent-color)] transition-colors"
            >
              ×
            </button>
          </div>

          <nav className="flex flex-col space-y-6 flex-1">
            <Link
              href="/"
              onClick={closeSidebar}
              className="text-primary text-xl font-['Bitcount_Prop_Single'] font-medium py-3 px-4 rounded-lg hover:card-bg hover:text-[var(--accent-color)] transition-all duration-200 border-l-4 border-transparent hover:border-[var(--accent-color)]"
            >
              HOME
            </Link>
            <Link
              href="/about"
              onClick={closeSidebar}
              className="text-primary text-xl font-['Bitcount_Prop_Single'] font-medium py-3 px-4 rounded-lg hover:card-bg hover:text-[var(--accent-color)] transition-all duration-200 border-l-4 border-transparent hover:border-[var(--accent-color)]"
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              onClick={closeSidebar}
              className="text-primary text-xl font-['Bitcount_Prop_Single'] font-medium py-3 px-4 rounded-lg hover:card-bg hover:text-[var(--accent-color)] transition-all duration-200 border-l-4 border-transparent hover:border-[var(--accent-color)]"
            >
              CONTACT
            </Link>
          </nav>

          {/* Comment ko muna, nagloloko eh */}
          {/* <div className="pt-6 border-t border-theme">
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-between text-primary text-xl font-['Bitcount_Prop_Single'] font-medium py-3 px-4 rounded-lg hover:card-bg hover:text-[var(--accent-color)] transition-all duration-200"
            >
              <span>THEME</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                {theme === "dark" ? (
                  <path
                    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                ) : (
                  <path
                    d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                )}
              </svg>
            </button>
          </div> */}
        </div>
      </aside>
    </>
  );
}
