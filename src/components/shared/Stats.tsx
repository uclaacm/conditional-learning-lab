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
        Battery: {battery}
      </p>
      <p className="stats-display">
        Speed: {speed}
      </p>
      <p className="stats-display">
        Strength: {strength}
      </p>
      <p className="stats-display">
        Hunger: {hunger}
      </p>
    </div>
  );
}