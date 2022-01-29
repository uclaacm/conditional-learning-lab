import { useState } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {generateRandomInteger} from '../common/math';
import { statsObject } from '../common/types';
import EasyIf from './pages/EasyIf';
import HungerIfElse from './pages/HungerIfElse';
import IfElif from './pages/IfElif';
import Landing from './pages/Landing';
import Nested from './pages/Nested';
import ObstacleIfElse from './pages/ObstacleIfElse';
import Footer from './shared/Footer';
import Stats from './shared/Stats';
import UpperSection from './shared/UpperSection';
import '../styles/app.scss';
import '../assets/WestwoodSans-Regular.ttf';

function App(): JSX.Element {
  // Second arg for generateRandomInteger is possible increase from first, not the max value for integer
  const [playerStats, setPlayerStats] = useState<statsObject>({
    battery: generateRandomInteger(9,7),  // MAX: 15
    speed: generateRandomInteger(7,9),    // MAX: 15
    strength: generateRandomInteger(1,10),// MAX: 10
    hunger: generateRandomInteger(0,3),   // MAX: 2
  });

  const onClick = (addBattery:number, addSpeed:number, addStrength:number, addHunger:number) => {
    setPlayerStats({
      battery: playerStats.battery + addBattery,
      speed: playerStats.speed + addSpeed,
      strength: playerStats.strength + addStrength,
      hunger: playerStats.hunger + addHunger,
    });
  };

  return (
    <Router>
      <div id="app-wrapper">
        <UpperSection onClick={onClick}/>
        <Switch>
          <Route exact path ="/"><Landing/></Route>
          <Route exact path ="/easyif"><EasyIf/></Route>
          <Route exact path="/hungerifelse"><HungerIfElse/></Route>
          <Route exact path="/obstacleifelse"><ObstacleIfElse/></Route>
          <Route exact path="/ifelif"><IfElif/></Route>
          <Route exact path="/nested"><Nested/></Route>
        </Switch>
        <Stats playerStats={playerStats}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;