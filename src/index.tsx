import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';

const Root = () => (
  <Router>
    <App />
  </Router>
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<Root />);

