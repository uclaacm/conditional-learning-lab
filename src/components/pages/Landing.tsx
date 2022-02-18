import '../../styles/illustrations.scss';
import charger from '../../assets/charger.svg';
import robot from '../../assets/robot.svg';

export default function Landing(): JSX.Element {
  return (
    <div className='illustration'>
      <img src={robot} alt="robot"></img>
      <img src={charger} alt="charger"></img>
    </div>
  );
}