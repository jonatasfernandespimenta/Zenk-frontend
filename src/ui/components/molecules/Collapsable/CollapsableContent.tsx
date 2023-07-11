import { useContext } from "react";
import { CollapsableContext, ICollapsableContext } from "./Context/CollapsableContext";

interface ICollapsableContent {
  children: JSX.Element;
}

export default function CollapsableContent({ children }: ICollapsableContent) {
  const { isCollapsed } = useContext(CollapsableContext) as ICollapsableContext;

  return (
    <>      {!isCollapsed && <div className="bg-gray300 p-4 -mt-14 rounded">          {children}        </div>}    </>
  );
}
