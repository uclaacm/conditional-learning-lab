import '../../styles/stats.scss';
interface statsProps {
  battery: number;
  speed: number,
  strength: number;
  hunger: number;
}


export default function Stats(props: statsProps): JSX.Element {
  const { battery, speed, strength, hunger } = props;

  interface statValues {
    [key: string]: number | undefined,
  }

  const statValues : statValues = {
    Battery: battery,
    Speed: speed,
    Strength: strength,
    Hunger: hunger,
  };

  const renderStats = () => {
    return Object.keys(statValues).map((key, index) => {
      return (
        <p key={index} className="stats-display">
          {key} <span className="stats-value"> {statValues[key]} </span>
        </p>
      );
    });
  };

  return (
    <div id="bar">
      {renderStats()}
    </div>
  );
}