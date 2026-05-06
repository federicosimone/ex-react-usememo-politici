import { useState, useEffect, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

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
  }, [search, listaPolitici])



  const listaDaMostrare = search ? politiciFiltrati : listaPolitici //con il ternario vado a dire che se search non è vuota la variabie "listaDaMostrare" è l'array filtrato
  //mentre se è vuota, userò l'array listaPolitici, ovvero quello della chiamata API 

  return (
    <>
      <h1>Politici Mondiali</h1>

      <input className="form-control mt-3" type="text" pleaceholder="Cerca..." value={search} onChange={e => setSearch(e.target.value)} name="" id="" />
      <p className="mt-3">{search ? `Stai cercando: ${search}` : ""}</p>
      <ul className='d-flex flex-wrap g-2 list-unstyled'>

        {listaDaMostrare.map(politico => {
          return <Card key={politico.id} politico={politico} />
        })}

      </ul>


    </>
  )
}

export default App
