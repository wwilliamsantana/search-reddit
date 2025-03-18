import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { RedditContextProvider } from './context/ContextAPI.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RedditContextProvider>
      <App />
    </RedditContextProvider>
  </StrictMode>,
)
