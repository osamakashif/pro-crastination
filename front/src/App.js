
import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </ Switch>
      <Switch>
      </ Switch>
    </Router>
  );
}

export default App;