

import '../App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { ErrorPage } from '../pages/ErrorPage';
import { SingleMovie } from '../pages/SingleMovie';

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

export function AppRouter() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies/:id' element={<SingleMovie />}/>
        <Route path='/*' element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  )
}
