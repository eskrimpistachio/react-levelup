import './App.css';
import Main from './Main.js';
import Navibar from './Navibar.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainLeaderboard from './MainLeaderboard';
import MainSubmit from './MainSubmit';
import History from './History';
import { Helmet } from 'react-helmet' ;

const TITLE = 'Trash Submitter'

function App() {
  
  return (
    <><Helmet>
      <title>{TITLE}</title>
    </Helmet><Router>
        <div className="App">
          <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'></link>
          <Navibar />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/MainLeaderboard">
              <MainLeaderboard />
            </Route>
            <Route path="/MainSubmit">
              <MainSubmit />
            </Route>
            <Route path="/History">
              <History />
            </Route>
          </Switch>
        </div>
      </Router></>
    
  );
}

export default App;
