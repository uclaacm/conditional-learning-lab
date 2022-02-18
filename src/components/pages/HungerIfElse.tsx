import '../../styles/illustrations.scss';
import chicken from '../../assets/chicken.svg';
import robot from '../../assets/robot.svg';

function HungerIfElse(): JSX.Element {
  return (
    <div className='illustration'>
      <img src={robot} alt="robot"></img>
      <img src={chicken} alt="chicken"></img>
    </div>
  );
}

export default HungerIfElse;