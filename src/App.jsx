import axios from "axios"
import { useEffect, useState } from "react"


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
      <div className="content">
        <h1 className="p-4">VI PRESENTIAMO GLI ATTORI</h1>
        <div className="row g-2 justify-content-center">
          {
            man.map(items => (
              <div key={items.id} className="card col-12 col-md-4 col-lg-2 align-items-center m-2">
                <img src={items.image} alt="" />
                <h4>{items.name}</h4>
                <p>{items.birth_year}</p>
                <p>{items.nationality}</p>
                <p>{items.biography}</p>
                <p>{items.awards.join(", ")}</p>
              </div>
            ))
          }

          {
            girl.map(items => (
              <div key={items.id} className="card col-12 col-md-4 col-lg-2 align-items-center m-2">
                <img src={items.image} alt="" />
                <h4>{items.name}</h4>
                <p>{items.birth_year}</p>
                <p>{items.nationality}</p>
                <p>{items.biography}</p>
                <p>{items.awards}</p>
              </div>
            ))
          }
          {
            all.map(items => (
              <div key={items.id} className="card col-12 col-md-4 col-lg-2 align-items-center m-2">
                <img src={items.image} alt="" />
                <h4>{items.name}</h4>
                <p>{items.birth_year}</p>
                <p>{items.nationality}</p>
                <p>{items.biography}</p>
              </div>
            ))
          }
        </div>
        <button onClick={handleClick} className="btn btn-dark">Press</button>
      </div>


    </>
  )
}

export default App
