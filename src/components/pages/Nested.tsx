import '../../styles/illustrations.scss';

import largebox from '../../assets/largebox.svg';
import mediumbox from '../../assets/mediumbox.svg';
import robot from '../../assets/robot.svg';
import smallbox from '../../assets/smallbox.svg';

interface NestedProps {
  boxChosen : string;
}

function Nested(props: NestedProps): JSX.Element {
  let heldbox;
  let secondbox;
  let thirdbox;

  if (props.boxChosen === 'large') {
    heldbox = largebox;
    secondbox = smallbox;
    thirdbox = mediumbox;
  } else if (props.boxChosen === 'medium') {
    heldbox = mediumbox;
    secondbox = largebox;
    thirdbox = smallbox;
  } else {
    heldbox = smallbox;
    secondbox = largebox;
    thirdbox = mediumbox;
  }

  return (
    <div>
      <div className='illustration'>
        <div id="stacked">
          <img src={robot} className="robot" alt="robot"></img>
          <img className="stacked-element box" src={heldbox} alt="mediumbox"></img>
        </div>
        <div id="boxes">
          <img src={secondbox} className="box" alt="smallbox"></img>
          <img className="hidden box" src={mediumbox} alt="mediumbox"></img>
          <img src={thirdbox} className="box" alt="largebox"></img>
        </div>
      </div>
    </div>
  );
}

export default Nested;