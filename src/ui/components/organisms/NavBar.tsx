import TextWithIcon from "@molecules/TextWithIcon";
import { MdTerminal } from "react-icons/md";

export default function NavBar() {
  return (
    <div className="flex gap-4 fixed bg-gray500 h-screen p-10 items-center justify-start flex-col">
      <a href="/">
        <p className="font-rocksalt mb-10 text-primary text-bold text-5xl">Z</p>
      </a>
      <TextWithIcon
        text="Logs"
        icon={<MdTerminal size={30} />}
        className="text-primary font-bold cursor-pointer hover:bg-gray300 rounded p-1"
      />
    </div>
  );
}
