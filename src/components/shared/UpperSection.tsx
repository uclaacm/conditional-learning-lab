import '../../styles/upperSection.scss';
import { useLocation } from 'react-router-dom';
import SyntaxHighLighter from 'react-syntax-highlighter';
import ChoiceButton from './ChoiceButton';


interface upperSectionProps {
  onClick: (addBattery:number,addSpeed:number,addStrength:number,addHunger:number) => void;
}

//UpperSection contains description, code and buttons
export default function UpperSection(props:upperSectionProps): JSX.Element {
  let description;
  let buttons;
  const pages = ['/','/second','/third'];
  const location = useLocation();
  const currentPage = location.pathname;
  const nextPage = pages.indexOf(currentPage) === pages.length-1 ? '' : pages[pages.indexOf(currentPage)+1];

  //Lines of code (spaces indicate indentation, 4 spaces for each tab)

  const codeContent = [ 'if weight < 5:', '    if weight < 7:', '        print("Very heavy!")', '    else:', '        print("A bit heavy!")', 'else:', '    print("Not heavy at all!")'];

  //Parameters for nextPage are (addbattery,addspeed,addstrength,addhunger)
  switch (currentPage) {
    case '/':
      description = 'landing text a;sldfk jasl;d fjk asl ;dfkj asl;dfj as; dlfkja  s;dl  fk   ja s; dlf kj ljk asd f;l k ajsd f;la  sjkdfa ; ';
      buttons = (
        <div>
          <ChoiceButton text="Get Food" toPage={nextPage} onClick={() => props.onClick(3,0,0,0)}/>
          <ChoiceButton text="Ask Friend for Food" toPage={nextPage} onClick={() => props.onClick(0,0,0,4)}/>
        </div>
      );

      break;
    case '/second':
      description = 'Easy if statement page...';
      buttons = (
        <div>
          <ChoiceButton text="Stay Here" toPage={nextPage} onClick={() => props.onClick(0,-2,0,0)}/>
        </div>
      );
      break;
    default:
      buttons = <div>Out of pages</div>;
  }

  return (
    <div id="upper-section">
      <div id="description">{description}</div>
      <div id="upper-right">
        <div className="hook"></div>
        <div id="code">
          {codeContent.map((item) =>{
            let indents = 0;
            for (let i = 0; i < item.length; i++){
              if(item[i] == ' ') indents+=1;
              else break;
            }
            // console.log(marginIndex)
            return <SyntaxHighLighter  key={item} language="python" style={{marginLeft: indents}} useInlineStyles={false}>
              {item}
            </SyntaxHighLighter>;
          },
          )}
        </div>

        {buttons}
      </div>
    </div>
  );
}