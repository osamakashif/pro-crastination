
import './App.css';
import Main from './components/Main';
import WastingChoice from './components/WastingChoice';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/wasting_choice">
          <WastingChoice />
        </Route>
      </ Switch>
    </Router>
  );
}

export default App;