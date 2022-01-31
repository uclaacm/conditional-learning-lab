import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import '../../styles/playAgain.scss';
import Reward, { RewardElement } from 'react-rewards';
import ChoiceButton from './ChoiceButton';


interface PlayAgainProps {
  modalOpen: boolean,
}


export default function PlayAgain(props: PlayAgainProps): JSX.Element {
  const { modalOpen } = props;

  const [open, setOpen] = useState(modalOpen);

  const rewardRef = React.useRef<RewardElement>(null);

  useEffect(() => {
    setOpen(modalOpen);
  }, [modalOpen]);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        rewardRef.current?.rewardMe();
      }, 100);
    }
  }, [open]);

  return (
    <Modal
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          top: '50%',
          left: '50%',
          border: '1px solid black',
          background: '#fff',
          width: '50%',
          height: '50%',
          transform: 'translate(-50%, -50%)',
          position: 'fixed',
          borderRadius: '1em',
        },
      }}
      isOpen={open}
    >
      <div className="modal-content">
        <Reward
          ref={rewardRef}
          type='confetti'
        >
          <h1>
            Congratulations!
          </h1>
        </Reward>

        <p>
          You have successfully completed the lab! <br />
          Would you like to play again?
        </p>

        <ChoiceButton
          text="Play Again"
          toPage="/" //landing page, should take you here from last level
          onClick={() => rewardRef.current?.rewardMe()}
        />
      </div>
    </Modal>
  );
}