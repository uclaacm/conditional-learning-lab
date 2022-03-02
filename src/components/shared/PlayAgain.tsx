import React, { useEffect } from 'react';
import Modal from 'react-modal';
import '../../styles/playAgain.scss';
import Reward, { RewardElement } from 'react-rewards';
import {Link} from 'react-router-dom';


interface PlayAgainProps {
  modalOpen: boolean,
  closeAction: () => void
}


export default function PlayAgain(props: PlayAgainProps): JSX.Element {

  const rewardRef = React.useRef<RewardElement>(null);

  useEffect(() => {
    if (props.modalOpen) {
      setTimeout(() => {
        rewardRef.current?.rewardMe();
      });
    }
  }, [props.modalOpen]);

  return (
    <Modal
      style={{
        overlay: {
          zIndex:99,
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
      ariaHideApp={false}
      isOpen={props.modalOpen}
    >
      <div className="modal-content">
        <Reward
          ref={rewardRef}
          type='confetti'
          config={{
            lifetime: 125,
          }}
        >
          <h1 className='modal-header'>
            Congratulations!
          </h1>
        </Reward>

        <p>
          You have successfully completed the lab! <br />
          Would you like to play again?
        </p>

        <Link to={'/'}>
          <button className="choice-button" onClick={() => props.closeAction()}>Play Again</button>
        </Link>
      </div>
    </Modal>
  );
}