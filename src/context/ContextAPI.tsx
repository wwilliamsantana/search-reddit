import { createContext, ReactNode, useState } from "react";

interface RedditContextProps { }

export const RedditContext = createContext({} as RedditContextProps)

interface RedditContextProviderProps {
  children: ReactNode
}

export function RedditContextProvider({ children }: RedditContextProviderProps) {
  const [data, setData] = useState<any>()

  function searchData() {
    const data = fetch(`https://www.reddit.com/r/carros.json`)
    data.then(data => data.json()).then(data => setData(data))
  }

  searchData()

  return (
    <RedditContext.Provider value={data}>
      {children}
    </RedditContext.Provider>
  )
}