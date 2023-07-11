import { useContext } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { CollapsableContext, ICollapsableContext } from "./Context/CollapsableContext";

interface ICollapsableHeader {
  children: JSX.Element | JSX.Element[];
}

export default function CollapsableHeader({ children }: ICollapsableHeader) {
  const { isCollapsed, setIsCollapsed } = useContext(CollapsableContext) as ICollapsableContext;

  return (
    <div
      onClick={() => setIsCollapsed(!isCollapsed)}
      className={`flex flex-row ${
        !isCollapsed && "bg-gray300"
      } hover:bg-gray300 items-center gap-2 rounded p-2 cursor-pointer`}
    >
      {isCollapsed ? <FaChevronRight color="#7CD95B" /> : <FaChevronDown color="#7CD95B" />}
      {children}
    </div>
  );
}
