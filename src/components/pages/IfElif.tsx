import '../../styles/illustrations.scss';
import largebox from '../../assets/largebox.svg';
import mediumbox from '../../assets/mediumbox.svg';
import robot from '../../assets/robot.svg';
import smallbox from '../../assets/smallbox.svg';

function IfElif(): JSX.Element {
  return (
    <div>
      <div className='illustration'>
        <img src={robot} className="robot" alt="robot"></img>
        <div id="boxes">
          <img src={smallbox} className="box" alt="smallbox"></img>
          <img src={mediumbox} className="box" alt="mediumbox"></img>
          <img src={largebox} className="box" alt="largebox"></img>
        </div>
      </div>
    </div>
  );
}

export default IfElif;