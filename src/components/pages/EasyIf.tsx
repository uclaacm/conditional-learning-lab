import robot from '../../assets/robot.svg';

function EasyIf(): JSX.Element {
  return (
    <div>
      <div className='illustration-left'>
        <img style={{paddingLeft: '10vw'}} src={robot} className="robot" alt="robot"></img>
      </div>
    </div>
  );
}

export default EasyIf;