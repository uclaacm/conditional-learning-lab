import '../../styles/stats.scss';
interface statsProps {
  battery: number;
  speed: number,
  strength: number;
  hunger: number;
}


export default function Stats(props:statsProps): JSX.Element {
  const { battery, speed, strength, hunger } = props;

  return (
    <div id="bar">
      <p className="stats-display">
        Battery <span className="stats-value"> {battery} </span>
      </p>
      <p className="stats-display">
        Speed <span className="stats-value"> {speed} </span>
      </p>
      <p className="stats-display">
        Strength <span className="stats-value"> {strength} </span>
      </p>
      <p className="stats-display">
        Hunger <span className="stats-value"> {hunger} </span>
      </p>
    </div>
  );
}