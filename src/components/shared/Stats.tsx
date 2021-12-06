import '../../styles/stats.scss';

type statsObject = {
  [key: string]: number,
}

interface statsProps {
  playerStats: statsObject,
}

export default function Stats(props: statsProps): JSX.Element {
  const { playerStats } = props;

  const renderStats = () => {
    return Object.keys(playerStats).map((key, index) => {
      return (
        <p key={index} className="stats-display">
          {key} <span className="stats-value"> {playerStats[key]} </span>
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