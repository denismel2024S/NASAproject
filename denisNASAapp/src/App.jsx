import {useState} from "react"
import { useEffect } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

function handleToggleModal(){
  setShowModal(!showModal)
}

useEffect(() => {
  async function fetchAPIData(){
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

    const today = (new Date()).toDateString()
    const localKey = 'NASA-${today}'
    if (localStorage.getItem(localKey)){
      const apiData = JSON.parse(localStorage.getItem(localKey))
      setData(apiData)
      return
    }
    localStorage.clear

    try{
      const res = await fetch(url)
      const apiData = await res.json()
      localStorage.setItem(localKey, JSON.stringify(apiData))

      setData(apiData)
      console.log('DATA\n', apiData)
    } catch(err){
      console.log(err.message)
    }
  }
fetchAPIData()
}, []) /*empty dependency array so that it executes on pageload */
  return (
    <>
      {data ? (<Main data ={data}/>):(
        <div className ="loadingState">
          <i class="fa-solid fa-face-smile"></i>
        </div>
      )}
      {showModal && (
        <Sidebar data ={data} handleToggleModal = {handleToggleModal}/>
        )}

      {data && (
        <Footer data ={data} handleToggleModal = {handleToggleModal}/>
        )}
    </>
  )
}

export default App
