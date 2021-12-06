import { useState } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {generateRandomInteger} from '../common/math';
import Landing from './pages/Landing';
import Footer from './shared/Footer';
import Stats from './shared/Stats';
import UpperSection from './shared/UpperSection';
import '../styles/app.scss';
import '../assets/WestwoodSans-Regular.ttf';

function App(): JSX.Element {
  const [playerStats, setPlayerStats] = useState({
    battery: generateRandomInteger(1,10),
    speed: generateRandomInteger(1,10),
    hunger: generateRandomInteger(1,10),
    strength: generateRandomInteger(1,10),
  });

  const onClick = (addBattery:number, addSpeed:number, addStrength:number, addHunger:number) => {
    setPlayerStats({
      battery: playerStats.battery + addBattery,
      speed: playerStats.speed + addSpeed,
      hunger: playerStats.hunger + addHunger,
      strength: playerStats.strength + addStrength,
    });
  };

  return (
    <Router>
      <div id="app-wrapper">
        <UpperSection onClick={onClick}/>
        <Switch>
          <Route exact path ="/"><Landing/></Route>
        </Switch>
        <Stats playerStats={playerStats}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
