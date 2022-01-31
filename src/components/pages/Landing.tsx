import React, { useEffect, useState } from 'react';
import PlayAgain from '../shared/PlayAgain';

export default function Landing(): JSX.Element {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModalOpen(true);
    }, 3000);
  }, []);

  return (
    <React.Fragment>
      <PlayAgain
        modalOpen={modalOpen}
      >

      </PlayAgain>
    </React.Fragment>
  );
}