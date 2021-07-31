
import './App.css';
import Main from './components/Main';
import WastingChoice from './components/WastingChoice';
import WastingTime from './components/WastingTime';
import WastingTimeEfficiently from './components/WastingTimeEfficiently';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/Wasting_Choice">
          <WastingChoice username="test" />
        </Route>
        <Route path="/Wasting_Time">
          <WastingTime />
        </Route>
        <Route path="/Wasting_Time_Efficiently">
          <WastingTimeEfficiently />
        </Route>
      </ Switch>
    </Router>
  );
}

export default App;