import axios from "axios"
import { useEffect, useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"


function App() {

  const attori = ' https://lanciweb.github.io/demo/api/actors/'
  const attrici = 'https://lanciweb.github.io/demo/api/actresses/'
  const [man, setMan] = useState([])
  const [girl, setGirl] = useState([])
  const [all, setAll] = useState([])
  function actor() {
    axios.get(attori)
      .then(resAttori => {
        setMan(resAttori.data)
      }
      ).catch(error => {
        console.error(error)
      })

    axios.get(attrici)
      .then(resAttrici => {
        setGirl(resAttrici.data)
      }).catch(error => {
        console.error(error)
      })
  }
  useEffect(actor, [])


  function handleClick() {
    setAll([...man, ...girl])

  }




  return (
    <>
      <Header />
      <Main handleClick={handleClick} man={man} girl={girl} all={all} />

    </>
  )
}

export default App
