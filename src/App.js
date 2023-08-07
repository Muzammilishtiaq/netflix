import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Screen/Home';
import Aboutus from './Screen/Aboutus';
import Contactus from './Screen/Contactus';
import MoviePage from './Screen/MoviePage';
import SingleMovie from './Screen/SingleMovie';
import WatchPage from './Screen/WatchPage';
import Login from './Screen/Login';
import Register from './Screen/Register';
import NotFound from './Screen/NotFound';
import Favorite from './Screen/Dashboard/Favorite';
import Profile from './Screen/Dashboard/Profile';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Password from './Screen/Dashboard/Password';
import User from './Screen/Dashboard/Admin/User';
import Categories from './Screen/Dashboard/Admin/Categories';
import Dashboard from './Screen/Dashboard/Admin/Dashboard';
import AddMovie from './Screen/Dashboard/Admin/AddMovie';
import MovieList from './Screen/Dashboard/Admin/MovieList';

function App() {
  AOS.init();
  return (
<Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/movie' element={<MoviePage/>} />
   <Route path='/movie/:id' element={<SingleMovie/>} />
   <Route path='/Aboutus' element={<Aboutus/>} />
   <Route path='/Contactus' element={<Contactus/>} />
   <Route path='/watch/:id' element={<WatchPage/>} />
   <Route path='/Login' element={<Login/>} />
   <Route path='/Register' element={<Register/>} />
   <Route path='/Profile' element={<Profile/>} />
   <Route path='/Password' element={<Password/>} />
   <Route path='/favorite' element={<Favorite/>} />
   <Route path='/users' element={<User/>} />
   <Route path='/Categories' element={<Categories/>} />
   <Route path='/dashboard' element={<Dashboard/>} />
   <Route path='/addmovie' element={<AddMovie/>} />
   <Route path='/movielist' element={<MovieList/>} />
   <Route path='/*' element={<NotFound/>} />
</Routes>
  );
}

// 4:14:36

export default App;
