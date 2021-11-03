import '../../styles/stats.scss';
interface statsProps {
  battery: number;
}

export default function Stats(props:statsProps): JSX.Element {

  return (
    <div id="bar">
      {props.battery}
    </div>
  );
}