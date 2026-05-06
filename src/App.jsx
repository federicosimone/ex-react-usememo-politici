import { useState, useEffect } from 'react'
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

  console.log(listaPolitici)

  return (
    <>
      <h1>Politici Mondiali</h1>

      <input type="text" name="" id="" />
      <ul className='d-flex flex-wrap g-2 list-unstyled'>
        {
          listaPolitici.map((politico, i) => {
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
