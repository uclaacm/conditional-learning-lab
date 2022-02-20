import '../../styles/description.scss';
import { useLocation } from 'react-router-dom';
export default function Description():JSX.Element {
  let description;
  //Stores types of pages that are moved through in nextPage
  const location = useLocation();
  // Finds path name of file and also serves for nextPage
  const currentPage = location.pathname;
  // Automatically finds nextPage to be used for ChoiceButton
  switch (currentPage) {
    case '/':
      description = "Welcome to the Conditional Learning Lab! Today we'll learn about conditionals in Python! \
          We use conditionals when we want to perform actions, but only under certain circumstances! Right now, you are \
          low on energy. Should you fill up?";
      break;
    case '/EasyIf':
      description = "You want to be able reach the next stage in time, but you aren't sure if you will be fast enough. Read the following line of code \
          and see what you should do. Should you speed up or keep walking?";
      break;
    case '/HungerIfElse':
      description = "You've been working hard! Now, you're getting hungry, but if you're not hungry enough, you'll be too full and you\
           will waste time eating when you could be walking! Should you eat food?";
      break;
    case '/ObstacleIfElse':
      description = "Oh no! There's an obstacle in the road! Going around the rock would take too much battery if you're \
          not fast enough, but you might not be strong enough to move the obstacle. What should your robot do?";
      break;
    case '/IfElif':
      description = 'You just ran into your friend and they need help picking up some boxes. Which is the heaviest box you can pick up?';
      break;
    case '/Nested':
      description = 'How heavy is the box you picked up?';
      break;
  }
  return (
    <div id="description">{description}</div>
  );
}