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
  // NOTE: Switched the order of the first two in Figma because I felt that more variables would be
  // different, which would test them better when they re-do the learning lab.
  switch (currentPage) {
    case '/':
      description = "Welcome to the Conditional Learning Lab! Today, we'll learn about conditionals in Python! Conditionals are statements that run \
      an action when true. We use conditionals when we want to perform actions, but only under certain circumstances! For example, you want to be able \
      to reach the next stage in time, but you aren't sure if you will be fast enough. You don't want to speed up if you don't need to though, since \
      that would take up more battery. Read the following line of code and see what you should do. Should you speed up or keep walking?";
      // On click, increase certain parameters
      // On every click, unless contradictory, increase hunger by 2 for the first two rounds and decrease battery by 1
      // every round
      // I was thinking of making speed decrease every time the user decides to do something other than keep moving.
      // By doing so, it incentivizes them to maximize their speed. At the end of the game, their speed + strength
      // should be their final score, and they can compare with their friends. Maybe have a leaderboard if we have time?
      // This might not work because speed is randomly generated, but we can decide to not make that part random.
      buttons = (
        <div>
          <ChoiceButton text="Speed up" toPage={nextPage} onClick={() => props.onClick(-5,5,2,0)}/>
          <ChoiceButton text="Keep walking" toPage={nextPage} onClick={() => props.onClick(-1,0,2,0)}/>
        </div>
      );

      break;
    case '/EasyIf':
      description = "You might be running low on battery! If you decide to keep moving, you'll keep your speed, but if you decide to charge your battery, \
      you will lose speed! However, if you don't have enough battery, then you must recharge. Read the following code and check your stats to see if \
      you need to fill up!";
      buttons = (
        <div>
          <ChoiceButton text="Charge up" toPage={nextPage} onClick={() => props.onClick(5,-2,2,0)}/>
          <ChoiceButton text="Keep walking" toPage={nextPage} onClick={() => props.onClick(-1,0,2,0)}/>
        </div>
      );
      break;
    case '/HungerIfElse':
      description = "You've been working hard! Now, you're getting hungry, but if you're not hungry enough, you'll be too full and you\
       will waste time eating when you could be walking! Should you eat food?";
      buttons = (
        <div>
          <ChoiceButton text="Eat food" toPage={nextPage} onClick={() => props.onClick(0,-2,-5,0)}/>
          <ChoiceButton text="Keep walking" toPage={nextPage} onClick={() => props.onClick(0,0,0,0)}/>
        </div>
      );
      break;
    case '/ObstacleIfElse':
      description = "Oh no! There's an obstacle in the road! Going around the rock would take too much battery if you're \
      not fast enough, but you might not be strong enough to move the obstacle. What should your robot do?";
      buttons = (
        <div>
          <ChoiceButton text="Go around" toPage={nextPage} onClick={() => props.onClick(0,1,0,0)}/>
          <ChoiceButton text="Move obstacle" toPage={nextPage} onClick={() => props.onClick(-2,-2,0,5)}/>
        </div>
      );
      break;
    case '/IfElif':
      description = 'You just ran into your friend and they need help picking up some boxes. You want to help as much as you can, so you want to \
      pick up the heaviest box you can. Which is the heaviest box can you pick up?';
      // Changing stats isn't necessary for this round, but I'm increasing strength just in case we want
      // to include it as part of final score
      buttons = (
        <div>
          <ChoiceButton text="Small box" toPage={nextPage} onClick={() => props.onClick(0,0,0,2)}/>
          <ChoiceButton text="Medium box" toPage={nextPage} onClick={() => props.onClick(0,0,0,3)}/>
          <ChoiceButton text="Big box" toPage={nextPage} onClick={() => props.onClick(0,0,0,4)}/>
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