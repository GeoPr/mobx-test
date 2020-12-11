import React, { createContext, useContext } from 'react'
import { Count } from './observables/count'
import { Notes } from './observables/notes'

interface IContextProps {
  count: Count
  notes: Notes
}

const Context = createContext<IContextProps>({} as IContextProps)

export const StateProvider: React.FC = ({ children }) => {
  const value: IContextProps = {
    count: new Count(),
    notes: new Notes()
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useContextValue = () => useContext(Context)
