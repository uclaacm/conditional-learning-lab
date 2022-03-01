import React from 'react';
import '../../styles/choiceButton.scss';
import Reward, { RewardElement } from 'react-rewards';
interface statsProps {
  text: string;
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
        lifetime: 80,
        angle: 85,
      }}
    >
      <button className="choice-button" onClick={(e) => {
        if (props.correctLogic) {
          props.correctAction();
          rewardRef.current?.rewardMe();
        } else {
          e.preventDefault();
          rewardRef.current?.punishMe();
        }

      }}>{props.text}</button>
    </Reward>
  );
}