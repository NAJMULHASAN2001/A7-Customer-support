import { Suspense} from "react"
import Cards from "./components/cards"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Navbar from "./components/Navbar"

const fetchData = async()=>{
  const res = await fetch('/cards.json')
  return res.json()
}




function App() {
const dataPromise =fetchData()
  return (
    <>
     <Navbar/>
     {/* <Main/> */}
     <Suspense>
        <Cards dataPromise={dataPromise} />
     </Suspense>
     <Footer/>
  
    </>
  )
}

export default App
