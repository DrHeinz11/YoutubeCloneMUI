import React, { createContext, useContext, useState } from "react";

type FocusType = {
  value: string;
};

type SidebarContextType = {
  focus: FocusType;
  setFocus: React.Dispatch<React.SetStateAction<FocusType>>;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SideBarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [focus, setFocus] = useState<FocusType>({ value: "home" });

  return (
    <SidebarContext.Provider value={{ focus, setFocus }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = (): SidebarContextType => {
  const sidebarContext = useContext(SidebarContext);

  if (!sidebarContext) {
    throw new Error(
      "useSidebarContext must be used within a SidebarContextProvider"
    );
  }

  return sidebarContext;
};
