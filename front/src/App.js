
import './App.css';
import Main from './components/Main';
import WastingChoice from './components/WastingChoice';
import WastingTime from './components/WastingTime';
import YourActivity from './components/YourActivity';
import WastingTimeYourWay from './components/WastingTimeYourWay';
import WastingTimeMoreEfficiently from './components/WastingTimeMoreEfficiently';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState('')
  const [list, setList] = useState([]);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main user = {user} setUser = {setUser} />
        </Route>
        <Route path="/Wasting_Choice">
          <WastingChoice user = {user} />
        </Route>
        <Route path="/Wasting_Time">
          <WastingTime />
        </Route>
        <Route path="/Wasting_Time_Your_Way">
          <WastingTimeYourWay user = {user} list = {list} setList = {setList}/>
        </Route>
        <Route path="/Your_Activity">
          <YourActivity list = {list}/>
        </Route>
        <Route path="/Wasting_Time_More_Efficiently">
          <WastingTimeMoreEfficiently />
        </Route>
      </ Switch>
    </Router>
  );
}

export default App;
