import { createContext, ReactNode, useState } from "react";

interface RedditContextProps { }

export const RedditContext = createContext({} as RedditContextProps)

interface RedditContextProviderProps {
  children: ReactNode
}

export function RedditContextProvider({ children }: RedditContextProviderProps) {
  const [data, setData] = useState()



  return (
    <RedditContext.Provider value={ }>
      {children}
    </RedditContext.Provider>
  )
}