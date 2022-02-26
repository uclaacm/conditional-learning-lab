import React from 'react';
import '../../styles/choiceButton.scss';
import Reward, { RewardElement } from 'react-rewards';
import { Link } from 'react-router-dom';
interface statsProps {
  text: string;
  toPage: string;
  correctLogic: boolean;
  correctAction: () => void;
}

export default function Stats(props: statsProps): JSX.Element {
  const rewardRef = React.useRef<RewardElement>(null);
  return (
    <Reward
      ref={rewardRef}
      type='confetti'
      config={{
        lifetime: 100,
        angle: 80,
      }}
    >
      <Link to={props.toPage}>
        <button className="choice-button" onClick={(e) => {
          if (props.correctLogic) {
            props.correctAction();
            rewardRef.current?.rewardMe();
          } else {
            e.preventDefault();
            rewardRef.current?.punishMe();
          }

        }}>{props.text}</button>
      </Link>
    </Reward>
  );
}