import '../../styles/choiceButton.scss';
import { Link } from 'react-router-dom';
interface statsProps {
  text: string;
  toPage: string;
  onClick: (e: any) => void;
}

export default function Stats(props:statsProps): JSX.Element {
  return (
    <Link to={props.toPage}>
      <button className="choice-button" onClick={props.onClick}>{props.text}</button>
    </Link>
  );
}