import React from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Home from './Pages/Home'
import AddEdit from './Pages/AddEdit'
import View from './Pages/View'
import About from './Pages/About'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header'
import './App.css'
import Search from './Pages/Search'

const App = () => {
  return (
   <BrowserRouter>
   <div className='App'></div>
   <Header/>
   <ToastContainer position="top-center"/>
    <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/add' Component={AddEdit}/>
        <Route exact path='/update/:id' Component={AddEdit}/>
        <Route exact path='/view/:id' Component={View}/>
        <Route exact path='/about' Component={About}/>
        <Route exact path='/search' Component={Search}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App