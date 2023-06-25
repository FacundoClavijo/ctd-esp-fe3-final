import { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [cards, setCards] = useState([]);

  const apiUrl = 'https://jsonplaceholder.typicode.com/users';


  useEffect(() => {
    axios(apiUrl)
    .then((res) => setCards(res.data));
  }, []);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        <ul>
          {cards.map((item) => (
              <li key={item.id}>
                <Card name={item.name} username={item.username} id={item.id} item={item}/>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
}


export default Home