import { useState } from 'react'
import {Register} from "./components/Register"
import {Login} from "./components/login"
import {Mainpage} from './components/main'
import './App.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import img from '../imagenes/fondo.jpg'


export function App() {
  const [view, setview] = useState("login")


  const MyStBc = {
    backgroundImage : img,
    backgroundSize : 'cover'
  }

  function Changeview(view){
    setview(view)
  }

  return (
    <>
      <div className="appContainer">
        {view == "login" && <Login Changeview={Changeview}/>}
        {view == "register" && <Register Changeview={Changeview}/>}
        {view == "mainpage" && <Mainpage Changeview={Changeview}/>}
      </div>
    </>
  )
}