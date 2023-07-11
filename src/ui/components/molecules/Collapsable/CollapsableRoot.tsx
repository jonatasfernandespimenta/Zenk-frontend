import { useState } from "react";

import { CollapsableContext } from "./Context/CollapsableContext";

interface ICollapsableRoot {
  children: JSX.Element | JSX.Element[];
}

export default function CollapsableRoot({ children }: ICollapsableRoot) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  return (
    <CollapsableContext.Provider value={{ isCollapsed, setIsCollapsed }}>
      <div>{children}</div>
    </CollapsableContext.Provider>
  );
}
