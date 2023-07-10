import { useContext } from 'react'
import { SidebarContext, SidebarContextType } from './context'

export const useSidebarContext = (): SidebarContextType => {
  const sidebarContext = useContext(SidebarContext)

  if (!sidebarContext) {
    throw new Error('useSidebarContext must be used within a SidebarContextProvider')
  }

  return sidebarContext
}
