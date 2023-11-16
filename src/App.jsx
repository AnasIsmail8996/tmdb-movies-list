import { BrowserRouter, Route, Router , Routes } from 'react-router-dom'
import './App.css'
import './App.scss'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import TvShows from './Components/TvShows';
import Movies from './Components/Movies';
import RecentlyAdded from './Components/RecentlyAdded';
import MyList from './Components/MyList';

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tvshows' element={<TvShows/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/recentlyadded' element={<RecentlyAdded/>}/>
      <Route path='/mylist' element={<MyList/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
