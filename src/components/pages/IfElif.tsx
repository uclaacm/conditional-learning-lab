import '../../styles/illustrations.scss';
import largebox from '../../assets/largebox.svg';
import mediumbox from '../../assets/mediumbox.svg';
import robot from '../../assets/robot.svg';
import smallbox from '../../assets/smallbox.svg';

function IfElif(): JSX.Element {
  return (
    <div>
      <div className='illustration'>
        <img src={robot} alt="robot"></img>
        <div id="boxes">
          <img src={smallbox} alt="smallbox"></img>
          <img src={mediumbox} alt="mediumbox"></img>
          <img src={largebox} alt="largebox"></img>
        </div>
      </div>
    </div>
  );
}

export default IfElif;