import axios from "axios"


function App() {

  const attori = ' https://lanciweb.github.io/demo/api/actors/'
  const attrici = 'https://lanciweb.github.io/demo/api/actresses/'

  axios.get(attori, attrici)
    .then(res => console.log(res)
    )

  return (
    <>
      <h1>VI PRESENTIAMO GLI ATTORI</h1>

    </>
  )
}

export default App
