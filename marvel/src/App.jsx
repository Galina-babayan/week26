import "./App.css";
import HeroeCard from "./Components/HeroeCard/HeroeCard";
import "./Components/HeroeCard/HeroeCard.css";

import Json from "./Components/Json";

let heroes = JSON.parse(Json);
console.log(heroes);

function App() {
  return (
    <div className="wrapper">
      <div className="welcome">
        <div className="welcome__container container"></div>
      </div>
      <div className="image__background"></div>
      <div className="marvel">
        <div className="marvel__container container">
          <div className="marvel__title">Супергерои</div>
          <div className="marvel__body">
            {heroes.map((heroe) => (
              <HeroeCard
                key={heroe.name}
                url={heroe.url}
                name={heroe.name}
                universe={heroe.universe}
                alterego={heroe.alterego}
                occupation={heroe.occupation}
                friends={heroe.friends}
                superpowers={heroe.superpowers}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
