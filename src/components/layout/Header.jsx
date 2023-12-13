import Dropdown from "./Dropdown";
export default function Header() {
  return (
    <header className="fixed md:top-2 md:rounded-md left-0 md:left-[270px] right-0 md:right-2 z-50 h-16 bg-gray-500  transition-all">
      <div className="flex items-center justify-center h-full w-full">
        <Dropdown />
      </div>
    </header>
  );
}
