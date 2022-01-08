import '../../styles/stats.scss';
import { statsObject } from '../../common/types';

interface statsProps {
  playerStats: statsObject,
}

export default function Stats(props: statsProps): JSX.Element {
  const { playerStats } = props;

  return (
    <div id="bar">
      {
        Object.keys(playerStats).map((key, index) => {
          return (
            <p key={index} className="stats-display">
              {key} <span className="stats-value"> {playerStats[key]} </span>
            </p>
          );
        })
      }
    </div>
  );
}