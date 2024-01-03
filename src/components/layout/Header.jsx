import { TERipple } from "tw-elements-react";
import Dropdown from "./Dropdown";
export default function Header() {
  return (
    <header className="fixed flex items-center  justify-between left-0 md:left-64 right-0  z-50 h-16 bg-oxford-blue-900  transition-all">
      <div className="ml-6 md:w-80">
        <div className="relative flex w-full flex-wrap items-stretch">
          <input
            type="text"
            className="relative pr-9 h-10 m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-lg border-solid
            bg-oxford-blue-950  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]
            text-neutral-400 outline-none transition duration-200 ease-in-out focus:z-[3]
            focus:border-blue-500 focus:text-neutral-200 focus:outline-none"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1"
          />
          <button
            className="right-7 relative z-50 text-neutral-400 hover:text-neutral-200 focus:text-neutral-200 focus:outline-none"
            type="button"
            id="button-addon1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="">
        <Dropdown />
      </div>
    </header>
  );
}
