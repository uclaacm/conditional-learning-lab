/* eslint-disable no-duplicate-case */
import '../../styles/upperSection.scss';
import { useLocation } from 'react-router-dom';
import ChoiceButton from './ChoiceButton';

interface upperSectionProps {
  onClick: (addBattery:number,addSpeed:number,addStrength:number,addHunger:number) => void;
}

//UpperSection contains description, code and buttons
export default function UpperSection(props:upperSectionProps): JSX.Element {
  // As of right now, we have description being a string. Should it be an array?
  let description;
  let buttons;
  //Stores types of pages that are moved through in nextPage
  const pages = ['/', '/EasyIf','/HungerIfElse', '/ObstacleIfElse', '/IfElif', '/Nested'];
  const location = useLocation();
  // Finds path name of file and also serves for nextPage
  const currentPage = location.pathname;
  // Automatically finds nextPage to be used for ChoiceButton
  const nextPage = pages.indexOf(currentPage) === pages.length-1 ? '' : pages[pages.indexOf(currentPage)+1];

  // Parameters for nextPage are (addbattery,addspeed,addstrength,addhunger)
  // Should I assume that the above parameters should be added to a different variable?
  // Also, have we decided on specific values for buttons?
  switch (currentPage) {
    case '/':
      // Do we need a code component as well?
      description = "Welcome to the Conditional Learning Lab! Today we'll learn about conditionals in Python! Conditionals are statements that run \
      an action when true. We use conditionals when we want to perform actions, but only under certain circumstances!\nFor example, if the robot is low \
      on energy, then it should recharge. Otherwise, the robot should keep moving. Read the following code and check your stats to see if you need to fill up!";
      // On click, increase certain parameters
      buttons = (
        <div>
          <ChoiceButton text="Charge up" toPage={nextPage} onClick={() => props.onClick(3,0,0,0)}/>
          <ChoiceButton text="Keep moving" toPage={nextPage} onClick={() => props.onClick(0,0,0,4)}/>
        </div>
      );
      break;
    case '/EasyIf':
      description = "You want to be able reach the next stage in time, but you aren't sure if you will be fast enough. Read the following line of code \
       and see what you should do. Should you speed up or keep walking?";
      buttons = (
        <div>
          <ChoiceButton text="Speed up" toPage={nextPage} onClick={() => props.onClick(0,-2,0,0)}/>
          <ChoiceButton text="Keep walking" toPage={nextPage} onClick={() => props.onClick(0,-2,0,0)}/>
        </div>
      );
      break;
    case '/HungerIfElse':
      description = "You've been working hard! Now, you're getting hungry, but if you're not hungry enough, you'll be too full and you\
       will waste time eating when you could be walking! Should you eat food?";
      buttons = (
        <div>
          <ChoiceButton text="Eat food" toPage={nextPage} onClick={() => props.onClick(0,-2,0,0)}/>
          <ChoiceButton text="Keep walking" toPage={nextPage} onClick={() => props.onClick(0,-2,0,0)}/>
        </div>
      );
      break;
    case '/ObstacleIfElse':
      description = "Oh no! There's an obstacle in the road! Going around the rock would take too much time if you're \
      not fast enough, but you might not be strong enough to move the obstacle. What should your robot do?";
      buttons = (
        <div>
          <ChoiceButton text="Go around" toPage={nextPage} onClick={() => props.onClick(0,-2,0,0)}/>
          <ChoiceButton text="Move obstacle" toPage={nextPage} onClick={() => props.onClick(0,-2,0,0)}/>
        </div>
      );
      break;
    case '/IfElif':
      description = 'You just ran into your friend and they need help picking up some boxes. You want to help as much as you can, so you want to \
      pick up the heaviest box you can. Which box can you pick up?';
      buttons = (
        <div>
          <ChoiceButton text="Small box" toPage={nextPage} onClick={() => props.onClick(0,-2,0,0)}/>
          <ChoiceButton text="Medium box" toPage={nextPage} onClick={() => props.onClick(0,-2,0,0)}/>
          <ChoiceButton text="Big box" toPage={nextPage} onClick={() => props.onClick(0,-2,0,0)}/>
        </div>
      );
      break;
    case '/Nested':
      description = 'How heavy is the box you picked up?';
      buttons = (
        <div>
          <ChoiceButton text="Not heavy" toPage='/Nested' onClick={() => props.onClick(0,-2,0,0)} />
          <ChoiceButton text="A bit heavy" toPage='/Nested' onClick={() => props.onClick(0,-2,0,0)}/>
          <ChoiceButton text="Very heavy" toPage='/Nested' onClick={() => props.onClick(0,-2,0,0)}/>
        </div>
      );
      break;
    default:
      buttons = <div>Out of pages</div>;
  }

  return (
    <div id="upper-section">
      <div id="description">{description}</div>
      <div>
        <div>code section</div>
        {buttons}
      </div>
    </div>
  );
}