import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById('root'),
);
