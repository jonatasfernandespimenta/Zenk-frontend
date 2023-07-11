import { createContext } from "react";

export interface ICollapsableContext {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export const CollapsableContext = createContext<ICollapsableContext | null>(null);
