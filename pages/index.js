import { useEffect } from "react"
import Navbar from "../Components/Navbar"
import Layouts from "../Components/Layouts"

export default function index() {
    useEffect(() => {
      console.log('Hei Next')
    }, [
      
    ])
  
  return (
    <div>
      <Layouts title="Home"/>
      <Navbar />
      <h2 className="text-center text-2xl text-white">Hay 👋 Welcome To Black Media Todo App</h2>
      <h2 className="text-center text-white text-sm mt-28">View Your Todo Just Click On Menu</h2>


    </div>
  )
}
