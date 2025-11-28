import './App.css'
import Router from './router'
import { Navbar } from './router/Navbar'
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
    <Toaster
        position="top-center"
        reverseOrder={false}
      />
    <Navbar/>
    <Router/>
    </>
  )
}

export default App
