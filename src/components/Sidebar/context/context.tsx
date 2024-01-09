import React, { createContext, useState } from 'react'

type FocusType = {
  value: string
}

export type SidebarContextType = {
  focus: FocusType
  setFocus: React.Dispatch<React.SetStateAction<FocusType>>
  isOpen?: () => void
}

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export const SideBarProvider: React.FC<{ children: React.ReactNode; isOpen?: () => void }> = ({
  children,
  isOpen
}) => {
  const [focus, setFocus] = useState<FocusType>({ value: 'home' })

  return (
    <SidebarContext.Provider value={{ focus, setFocus, isOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}
