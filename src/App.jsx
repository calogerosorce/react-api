import axios from "axios"
import { useState } from "react"


function App() {

  const attori = ' https://lanciweb.github.io/demo/api/actors/'
  const attrici = 'https://lanciweb.github.io/demo/api/actresses/'
  const [man, setMan] = useState([])
  const [girl, setGirl] = useState([])
  const [all, setAll] = useState([])
  axios.get(attori)
    .then(resAttori => {
      setMan(resAttori.data)
      /* setAll(resAttori.data) */


    }
    ).catch(error => {
      console.error(error)
    })
  axios.get(attrici)
    .then(resAttrici => {
      setGirl(resAttrici.data)

      /* setAll(resAttrici.data) */
    }).catch(error => {
      console.error(error)
    })



  return (
    <>
      <div className="content">
        <h1>VI PRESENTIAMO GLI ATTORI</h1>
        <div className="row">
          {
            man.map(items => (
              <div key={items.id} className="card col-12 col-md-3 col-lg-2 align-items-center">

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
            girl.map(items => (
              <div key={items.id} className="card col-12 col-md-4 col-lg-4 align-items-center">
                <div className="card">
                  <div className="imagine">
                    <img src={items.image} alt="" />
                  </div>
                  <div className="text">
                    <h4>{items.name}</h4>
                    <p>{items.birth_year}</p>
                    <p>{items.nationality}</p>
                    <p>{items.biography}</p>
                    <p>{items.awards}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>


    </>
  )
}

export default App
