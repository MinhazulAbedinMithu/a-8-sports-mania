import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import NoMatch from "./components/NoMatch/NoMatch";
import TeamDetails from "./components/TeamDetails/TeamDetails";


function App() {
  
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Header/>
            <Body />
          </Route>
          <Route exact path="/">
            <Header/>
            <Body />
          </Route>
          <Route path="/details/:idTeam">
            <Header/>
            <TeamDetails/>
          </Route>
          <Route path="*">
            <Header/>
            <NoMatch/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
