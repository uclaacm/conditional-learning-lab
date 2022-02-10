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
  //Stores types of pages that are moved through in nextPage
  const pages = ['/', '/EasyIf','/HungerIfElse', '/ObstacleIfElse', '/IfElif', '/Nested'];
  const location = useLocation();
  // Finds path name of file and also serves for nextPage
  const currentPage = location.pathname;
  // Automatically finds nextPage to be used for ChoiceButton
  const nextPage = pages.indexOf(currentPage) === pages.length-1 ? '' : pages[pages.indexOf(currentPage)+1];


  // Parameters for onClick are (addBattery, addSpeed, addHunger, addStrength)

  //Lines of code (spaces indicate indentation, 4 spaces for each tab)

  const codeContent = [ 'if weight < 5:', '    if weight < 7:', '        print("Very heavy!")', '    else:', '        print("A bit heavy!")', 'else:', '    print("Not heavy at all!")'];

  // Parameters for onClick are (addBattery, addSpeed, addStrength, addHunger)
  // Once clicked, certain stats are increased in value, depending on our specific needs for that page

  switch (currentPage) {
    case '/':
      description = "Welcome to the Conditional Learning Lab! Today we'll learn about conditionals in Python! \
      We use conditionals when we want to perform actions, but only under certain circumstances! Right now, you are \
      low on energy. Should you fill up?";
      buttons = (
        <div>
          <ChoiceButton text="Charge up" toPage={nextPage} onClick={() => props.onClick(5,0,0,0)}/>
          <ChoiceButton text="Do nothing" toPage={nextPage} onClick={() => props.onClick(0,0,0,0)}/>
        </div>
      );

      break;
    case '/EasyIf':
      description = "You want to be able reach the next stage in time, but you aren't sure if you will be fast enough. Read the following line of code \
      and see what you should do. Should you speed up or keep walking?";
      buttons = (
        <div>
          <ChoiceButton text="Speed up" toPage={nextPage} onClick={() => props.onClick(0,4,0,0)}/>
          <ChoiceButton text="Do nothing" toPage={nextPage} onClick={() => props.onClick(0,0,0,0)}/>
        </div>
      );
      break;
    case '/HungerIfElse':
      description = "You've been working hard! Now, you're getting hungry, but if you're not hungry enough, you'll be too full and you\
       will waste time eating when you could be walking! Should you eat food?";
      buttons = (
        <div>
          <ChoiceButton text="Eat food" toPage={nextPage} onClick={() => props.onClick(0,0,0,-3)}/>
          <ChoiceButton text="Keep walking" toPage={nextPage} onClick={() => props.onClick(-2,0,0,0)}/>
        </div>
      );
      break;
    case '/ObstacleIfElse':
      description = "Oh no! There's an obstacle in the road! Going around the rock would take too much battery if you're \
      not fast enough, but you might not be strong enough to move the obstacle. What should your robot do?";
      buttons = (
        <div>
          <ChoiceButton text="Go around" toPage={nextPage} onClick={() => props.onClick(-2,0,0,1)}/>
          <ChoiceButton text="Move obstacle" toPage={nextPage} onClick={() => props.onClick(-2,0,-2,0)}/>
        </div>
      );
      break;
    case '/IfElif':
      description = 'You just ran into your friend and they need help picking up some boxes. Which is the heaviest box you can pick up?';
      buttons = (
        <div>
          <ChoiceButton text="Small box" toPage={nextPage} onClick={() => props.onClick(0,0,-1,0)}/>
          <ChoiceButton text="Medium box" toPage={nextPage} onClick={() => props.onClick(0,0,-2,0)}/>
          <ChoiceButton text="Big box" toPage={nextPage} onClick={() => props.onClick(0,0,-3,0)}/>
        </div>
      );
      break;
    case '/Nested':
      // No stats should be changed for this round.
      description = 'How heavy is the box you picked up?';
      buttons = (
        <div>
          <ChoiceButton text="Not heavy" toPage='/Nested' onClick={() => props.onClick(0,0,0,0)} />
          <ChoiceButton text="A bit heavy" toPage='/Nested' onClick={() => props.onClick(0,0,0,0)}/>
          <ChoiceButton text="Very heavy" toPage='/Nested' onClick={() => props.onClick(0,0,0,0)}/>
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