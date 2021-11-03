import { useState } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Landing from './pages/Landing';
import Footer from './shared/Footer';
import Stats from './shared/Stats';
import UpperSection from './shared/UpperSection';
import '../styles/app.scss';
import '../assets/WestwoodSans-Regular.ttf';

function App(): JSX.Element {
  const [battery, setBattery] = useState(10);
  const [speed, setSpeed] = useState(10);
  const [strength, setStrength] = useState(10);
  const [hunger, setHunger] = useState(10);

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
        <Stats battery={battery}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
