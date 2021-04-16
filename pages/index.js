import { useEffect } from "react"
import Navbar from "../Components/Navbar"
import Layouts from "../Components/Layouts"
import Typed from 'react-typed';

export default function index() {
    useEffect(() => {
      console.log('Hei Next')
    }, [
      
    ])
  
  return (
    <div >
      <Layouts title="Home"/>
      <Navbar />

      <main className="flex justify-center text-white text-2xl mt-5">
        <Typed strings={['Hai 👋 what are you looking for ']} typeSpeed={20}/>
      </main>
      <main className="flex justify-center text-white text-2xl mt-5">
        <Typed strings={['Dont Forget Visit my Github ya 😑 ']} typeSpeed={100} loop/>
      </main>
      <div className="mt-40 flex justify-center">
          <div className="bg-white py-3 px-5 rounded-xl cursor-pointer hover:bg-yellow-300 hover:text-gray-50" ><a href="mailto:diooktar@gmail.com">Send me email</a></div>
      </div>
      <span className="flex justify-center text-white mt-10">This web still beta test [Updated : Sabtu 17 April 00:02]</span>
      <span className="flex justify-center text-white mt-10">Web ini dibuat menggunakan : Next JS + Tailwind</span>
    </div>
  )
}
