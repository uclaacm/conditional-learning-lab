import '../../styles/illustrations.scss';

import largebox from '../../assets/largebox.svg';
import mediumbox from '../../assets/mediumbox.svg';
import robot from '../../assets/robot.svg';
import smallbox from '../../assets/smallbox.svg';

function Nested(): JSX.Element {
  return (
    <div>
      <div className='illustration'>
        <div id="stacked">
          <img src={robot} className="robot" alt="robot"></img>
          <img className="stacked-element box" src={mediumbox} alt="mediumbox"></img>
        </div>
        <div id="boxes">
          <img src={smallbox} className="box" alt="smallbox"></img>
          <img className="hidden box" src={mediumbox} alt="mediumbox"></img>
          <img src={largebox} className="box" alt="largebox"></img>
        </div>
      </div>
    </div>
  );
}

export default Nested;