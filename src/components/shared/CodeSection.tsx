import '../../styles/codeSection.scss';
import { useLocation } from 'react-router-dom';
import SyntaxHighLighter from 'react-syntax-highlighter';
import ChoiceButton from './ChoiceButton';
import { statsObject } from '../../common/types';

interface CodeSectionProps {
  startExitAnimation: (nextPage: string) => void,
  statAction: (addBattery: number, addSpeed: number, addStrength: number, addHunger: number) => void,
  playerStats: statsObject,
  openPlayAgain: () => void
}

export default function CodeSection(props: CodeSectionProps): JSX.Element {
  const { playerStats } = props;
  const battery: number = playerStats.battery;
  const speed: number = playerStats.speed;
  const hunger: number = playerStats.hunger;
  const strength: number = playerStats.strength;

  let buttons;
  let codeContent = [''];

  //Stores types of pages that are moved through in nextPage
  const pages = ['/', '/EasyIf', '/HungerIfElse', '/ObstacleIfElse', '/IfElif', '/Nested'];
  const location = useLocation();
  // Finds path name of file and also serves for nextPage
  const currentPage = location.pathname;
  // Automatically finds nextPage to be used for ChoiceButton
  const nextPage = pages.indexOf(currentPage) === pages.length - 1 ? '' : pages[pages.indexOf(currentPage) + 1];

  //Lines of code (spaces indicate indentation, 4 spaces for each tab)

  // Parameters for onClick are (addBattery, addSpeed, addStrength, addHunger)

  const handleCorrect = (addBattery: number, addSpeed: number, addStrength: number, addHunger: number) => {
    if (currentPage === '/Nested')
      props.openPlayAgain();
    else
      props.startExitAnimation(nextPage);
    props.statAction(addBattery, addSpeed, addStrength, addHunger);
  };

  switch (currentPage) {
    case '/':
      buttons = (
        <div className='buttons'>
          <ChoiceButton text="Charge up" correctLogic={battery < 5} correctAction={() => handleCorrect(5, 0, 0, 0)} />
          <ChoiceButton text="Do nothing" correctLogic={battery >= 5} correctAction={() => handleCorrect(0, 0, 0, 0)} />
        </div>
      );
      codeContent = ['If your battery is lower than 5,', 'charge up at the station', 'and gain 5 battery!'];
      break;
    case '/EasyIf':
      buttons = (
        <div className='buttons'>
          <ChoiceButton text="Speed up" correctLogic={speed < 7} correctAction={() => handleCorrect(0, 4, 0, 0)} />
          <ChoiceButton text="Do nothing" correctLogic={speed >= 7} correctAction={() => handleCorrect(0, 0, 0, 0)} />
        </div>
      );
      codeContent = ['if speed < 7:', '    speed_up()', '    speed += 4'];
      break;
    case '/HungerIfElse':
      buttons = (
        <div className='buttons'>
          <ChoiceButton text="Eat food" correctLogic={hunger > 5} correctAction={() => handleCorrect(0, 0, 0, -2)} />
          <ChoiceButton text="Keep walking" correctLogic={hunger <= 5} correctAction={() => handleCorrect(-2, 0, 0, 0)} />
        </div>
      );
      codeContent = ['if hunger > 5:', '    eat_food()', '    hunger -= 2', 'else:', '    keep_walking()', '    battery -= 2'];
      break;
    case '/ObstacleIfElse':
      buttons = (
        <div className='buttons'>
          <ChoiceButton text="Go around" correctLogic={speed > strength} correctAction={() => handleCorrect(-2, 0, 0, 1)} />
          <ChoiceButton text="Move obstacle" correctLogic={speed <= strength} correctAction={() => handleCorrect(-2, 0, -2, 0)} />
        </div>
      );
      codeContent = ['if speed > strength:', '    go_around()', '    battery -= 2', '    hunger += 1', 'else:', '    move_obstacle()', '    battery -= 2', '    strength -= 2'];
      break;
    case '/IfElif':
      buttons = (
        <div className='buttons'>
          <ChoiceButton text="Small box" correctLogic={strength <= 5 || battery <= 3} correctAction={() => handleCorrect(0, 0, -1, 0)} />
          <ChoiceButton text="Medium box" correctLogic={strength > 5 && battery > 3} correctAction={() => handleCorrect(0, 0, -2, 0)} />
          <ChoiceButton text="Big box" correctLogic={strength > 8 && battery > 5} correctAction={() => handleCorrect(0, 0, -3, 0)} />
        </div>
      );
      codeContent = ['if strength > 8 and battery > 5:', '    carry(big_box)', '    strength -= 3', 'elif strength > 5 and battery > 3', '    carry(medium_box)', '    strength -= 2', 'else:', '    carry(small_box)', '    strength -= 1'];
      break;
    case '/Nested':
      // No stats should be changed for this round.
      buttons = (
        <div className='buttons'>
          <ChoiceButton text="Not tired at all!" correctLogic={strength >= 7} correctAction={() => handleCorrect(0, 0, 0, 0)} />
          <ChoiceButton text="A bit tired" correctLogic={strength >= 5 && strength < 7} correctAction={() => handleCorrect(0, 0, 0, 0)} />
          <ChoiceButton text="Very tired" correctLogic={strength < 5} correctAction={() => handleCorrect(0, 0, 0, 0)} />
        </div>
      );
      codeContent = ['if strength < 7:', '    if strength < 5:', '        print("Very tired!")', '    else:', '        print("A bit tired!")', 'else:', '    print("Not tired at all!")'];
      break;
    default:
      buttons = <div>Out of pages</div>;
  }

  return (
    <div>
      <div className="hook"></div>
      <div id="code">
        {codeContent.map((item,index) => {
          let indents = 0;
          for (let i = 0; i < item.length; i++) {
            if (item[i] == ' ') indents += 1;
            else break;
          }
          // console.log(marginIndex)
          return (
            <SyntaxHighLighter
              key={index}
              language={currentPage === '/' ? "plaintext" : "python"}
              style={{ marginLeft: indents }}
              useInlineStyles={false}
            >
              {item}
            </SyntaxHighLighter>
          );
        },
        )}
      </div>
      {buttons}
    </div>
  );
}