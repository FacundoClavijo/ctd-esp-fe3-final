import Card from '../Components/Card'
import { useGlobalContext } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {dentistsStates} = useGlobalContext();

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        <ul>
          {dentistsStates.data.map((item) => (
              <li key={item.id}>
                <Card item={item}/>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
}


export default Home