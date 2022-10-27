import React from 'react'
import ReactDOM from 'react-dom/client'
import {AppRouter} from './routers/AppRouter'
import { MoviesProvider } from './context/MoviesProvider'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MoviesProvider>
        <AppRouter />
    </MoviesProvider>
  </React.StrictMode>
)
