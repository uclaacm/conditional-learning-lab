import '../../styles/choiceButton.scss';
interface statsProps {
  text: string;
  toPage: string;
  onClick: () => void;
}

export default function Stats(props: statsProps): JSX.Element {
  return (
    <button className="choice-button" onClick={props.onClick}>{props.text}</button>
  );
}