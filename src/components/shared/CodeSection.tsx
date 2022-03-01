import '../../styles/codeSection.scss';
import { useLocation } from 'react-router-dom';
import SyntaxHighLighter from 'react-syntax-highlighter';
import ChoiceButton from './ChoiceButton';

interface upperSectionProps {
  startExitAnimation: (nextPage: string) => void,
  onClick: (addBattery: number, addSpeed: number, addStrength: number, addHunger: number) => void;
}

export default function UpperSection(props: upperSectionProps): JSX.Element {
  let buttons;
  //Stores types of pages that are moved through in nextPage
  const pages = ['/', '/EasyIf', '/HungerIfElse', '/ObstacleIfElse', '/IfElif', '/Nested'];
  const location = useLocation();
  // Finds path name of file and also serves for nextPage
  const currentPage = location.pathname;
  // Automatically finds nextPage to be used for ChoiceButton
  const nextPage = pages.indexOf(currentPage) === pages.length - 1 ? '' : pages[pages.indexOf(currentPage) + 1];


  // Parameters for onClick are (addBattery, addSpeed, addHunger, addStrength)

  //Lines of code (spaces indicate indentation, 4 spaces for each tab)

  const codeContent = ['if weight < 5:', '    if weight < 7:', '        print("Very heavy!")', '    else:', '        print("A bit heavy!")', 'else:', '    print("Not heavy at all!")'];

  // Parameters for onClick are (addBattery, addSpeed, addStrength, addHunger)
  // Once clicked, certain stats are increased in value, depending on our specific needs for that page

  const choiceButtonClick = (addBattery: number, addSpeed: number, addStrength: number, addHunger: number) => {
    props.startExitAnimation(nextPage);
    props.onClick(addBattery, addSpeed, addStrength, addHunger);
  };

  switch (currentPage) {
    case '/':
      buttons = (
        <div>
          <ChoiceButton text="Charge up" toPage={nextPage} onClick={() => choiceButtonClick(5, 0, 0, 0)} />
          <ChoiceButton text="Do nothing" toPage={nextPage} onClick={() => choiceButtonClick(0, 0, 0, 0)} />
        </div>
      );

      break;
    case '/EasyIf':
      buttons = (
        <div>
          <ChoiceButton text="Speed up" toPage={nextPage} onClick={() => choiceButtonClick(0, 4, 0, 0)} />
          <ChoiceButton text="Do nothing" toPage={nextPage} onClick={() => choiceButtonClick(0, 0, 0, 0)} />
        </div>
      );
      break;
    case '/HungerIfElse':
      buttons = (
        <div>
          <ChoiceButton text="Eat food" toPage={nextPage} onClick={() => choiceButtonClick(0, 0, 0, -3)} />
          <ChoiceButton text="Keep walking" toPage={nextPage} onClick={() => choiceButtonClick(-2, 0, 0, 0)} />
        </div>
      );
      break;
    case '/ObstacleIfElse':
      buttons = (
        <div>
          <ChoiceButton text="Go around" toPage={nextPage} onClick={() => choiceButtonClick(-2, 0, 0, 1)} />
          <ChoiceButton text="Move obstacle" toPage={nextPage} onClick={() => choiceButtonClick(-2, 0, -2, 0)} />
        </div>
      );
      break;
    case '/IfElif':
      buttons = (
        <div>
          <ChoiceButton text="Small box" toPage={nextPage} onClick={() => choiceButtonClick(0, 0, -1, 0)} />
          <ChoiceButton text="Medium box" toPage={nextPage} onClick={() => choiceButtonClick(0, 0, -2, 0)} />
          <ChoiceButton text="Big box" toPage={nextPage} onClick={() => choiceButtonClick(0, 0, -3, 0)} />
        </div>
      );
      break;
    case '/Nested':
      // No stats should be changed for this round.
      buttons = (
        <div>
          <ChoiceButton text="Not heavy" toPage='/Nested' onClick={() => choiceButtonClick(0, 0, 0, 0)} />
          <ChoiceButton text="A bit heavy" toPage='/Nested' onClick={() => choiceButtonClick(0, 0, 0, 0)} />
          <ChoiceButton text="Very heavy" toPage='/Nested' onClick={() => choiceButtonClick(0, 0, 0, 0)} />
        </div>
      );
      break;
    default:
      buttons = <div>Out of pages</div>;
  }

  return (
    <div>
      <div className="hook"></div>
      <div id="code">
        {codeContent.map((item) => {
          let indents = 0;
          for (let i = 0; i < item.length; i++) {
            if (item[i] == ' ') indents += 1;
            else break;
          }
          // console.log(marginIndex)
          return <SyntaxHighLighter key={item} language="python" style={{ marginLeft: indents }} useInlineStyles={false}>
            {item}
          </SyntaxHighLighter>;
        },
        )}
      </div>
      {buttons}
    </div>
  );
}