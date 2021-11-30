import { useState } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {generateInitialStats} from '../common/math';
import Landing from './pages/Landing';
import Footer from './shared/Footer';
import Stats from './shared/Stats';
import UpperSection from './shared/UpperSection';
import '../styles/app.scss';
import '../assets/WestwoodSans-Regular.ttf';

function App(): JSX.Element {
  const [battery, setBattery] = useState(generateInitialStats());
  const [speed, setSpeed] = useState(generateInitialStats());
  const [strength, setStrength] = useState(generateInitialStats());
  const [hunger, setHunger] = useState(generateInitialStats());

  const onClick = (addBattery:number, addSpeed:number, addStrength:number, addHunger:number) => {
    setBattery(battery + addBattery);
    setSpeed(speed + addSpeed);
    setStrength(strength + addStrength);
    setHunger(hunger + addHunger);
  };

  return (
    <Router>
      <div id="app-wrapper">
        <UpperSection onClick={onClick}/>
        <Switch>
          <Route exact path ="/"><Landing/></Route>
        </Switch>
        <Stats speed={speed} hunger={hunger} strength={strength} battery={battery}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
