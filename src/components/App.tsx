import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { generateRandomInteger } from '../common/math';
import { statsObject } from '../common/types';
import EasyIf from './pages/EasyIf';
import HungerIfElse from './pages/HungerIfElse';
import IfElif from './pages/IfElif';
import Landing from './pages/Landing';
import Nested from './pages/Nested';
import ObstacleIfElse from './pages/ObstacleIfElse';
import CodeSection from './shared/CodeSection';
import Description from './shared/Description';
import Footer from './shared/Footer';
import Stats from './shared/Stats';
import '../styles/app.scss';
import '../assets/WestwoodSans-Regular.ttf';

function App(): JSX.Element {
  // Second arg for generateRandomInteger is possible increase from first, not the max value for integer
  const [playerStats, setPlayerStats] = useState<statsObject>({
    battery: generateRandomInteger(6, 11), // MAX: 15
    speed: generateRandomInteger(2, 7),
    hunger: generateRandomInteger(2, 7),
    strength: generateRandomInteger(7, 12),
  });

  const onClick = (addBattery: number, addSpeed: number, addStrength: number, addHunger: number) => {
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
        <div id="upper">
          <Description />
          <CodeSection onClick={onClick} />
        </div>
        <Switch>
          <Route exact path="/"><Landing /></Route>
          <Route exact path="/easyif"><EasyIf /></Route>
          <Route exact path="/hungerifelse"><HungerIfElse /></Route>
          <Route exact path="/obstacleifelse"><ObstacleIfElse /></Route>
          <Route exact path="/ifelif"><IfElif /></Route>
          <Route exact path="/nested"><Nested /></Route>
        </Switch>
        <Stats playerStats={playerStats} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;