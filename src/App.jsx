import { useState, useEffect, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [listaPolitici, setListaPolitici] = useState([]);

  const API_URL = "http://localhost:3333";

  useEffect(() => {
    fetch(`${API_URL}/politicians`)
      .then(res => res.json())
      .then(data => {
        setListaPolitici(data);
      });

  }, []);



  const [search, setSearch] = useState("");


  const politiciFiltrati = useMemo(() => {

    return listaPolitici.filter(element => {
      return element.name.toLowerCase().includes(search.toLowerCase()) && element.biography.toLowerCase().includes(search.toLowerCase());
    })
  }, [search])

  console.log("filtered", politiciFiltrati)

  const listaDaMostrare = search ? politiciFiltrati : listaPolitici //con il ternario vado a dire che se search non è vuota la variabie "listaDaMostrare" è l'array filtrato
  //mentre se è vuota, userò l'array listaPolitici, ovvero quello della chiamata API 

  return (
    <>
      <h1>Politici Mondiali</h1>

      <input className="form-control mt-3" type="text" pleaceholder="Cerca..." value={search} onChange={e => setSearch(e.target.value)} name="" id="" />
      <p className="mt-3">{search ? `Stai cercando: ${search}` : ""}</p>
      <ul className='d-flex flex-wrap g-2 list-unstyled'>
        {
          listaDaMostrare.map((politico, i) => {
            return (
              <li key={i}>
                <div className="card mt-2" style={{ width: "18rem" }}>
                  <img src={politico.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{politico.name}</h5>
                    <p className="card-text">{politico.position}</p>
                    <p className="card-text">{politico.biography}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </li>
            )
          })


        }
      </ul>


    </>
  )
}

export default App
