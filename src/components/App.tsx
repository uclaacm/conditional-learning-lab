import { useState } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Landing from './pages/Landing';
import Footer from './shared/Footer';
import Stats from './shared/Stats';
import UpperSection from './shared/UpperSection';
import '../styles/app.scss';
import '../assets/WestwoodSans-Regular.ttf';

function App(): JSX.Element {
  const [battery, setBattery] = useState(Math.floor(Math.random() * 10) + 1);
  const [speed, setSpeed] = useState(Math.floor(Math.random() * 10) + 1);
  const [strength, setStrength] = useState(Math.floor(Math.random() * 10) + 1);
  const [hunger, setHunger] = useState(Math.floor(Math.random() * 10) + 1);

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
