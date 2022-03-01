import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
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

  const controls = useAnimation();
  const history = useHistory();

  const exitAnimation = (nextPage: string) => {
    controls.start({
      opacity: 0,
      transition: { duration: 1 },
    }).then(() => {
      history.push(nextPage);
      controls.start({
        opacity: 1,
        transition: { duration: 1 },
      }).catch(err => console.error(err));
    }).catch(err => console.error(err));
  };

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 1 },
    }).catch(err => console.error(err));
  }, []);

  return (
    <div id="app-wrapper">
      <motion.div initial={{ opacity: 0 }} animate={controls}>
        <div id="upper">
          <Description />
          <CodeSection startExitAnimation={exitAnimation} onClick={onClick} />
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={controls}>
        <Switch>
          <Route exact path="/"><Landing /></Route>
          <Route exact path="/easyif"><EasyIf /></Route>
          <Route exact path="/hungerifelse"><HungerIfElse /></Route>
          <Route exact path="/obstacleifelse"><ObstacleIfElse /></Route>
          <Route exact path="/ifelif"><IfElif /></Route>
          <Route exact path="/nested"><Nested /></Route>
        </Switch>
      </motion.div>
      <Stats playerStats={playerStats} />
      <Footer />
    </div >
  );
}

export default App;