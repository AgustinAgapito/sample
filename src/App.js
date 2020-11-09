import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import SportsChat from './components/route/Sports/SportsChat'
import GamesChat from './components/route/Games/GamesChat'
import MusicChat from './components/route/Music/MusicChat'
import DailyLifeChat from './components/route/DailyLife/DailyLifeChat'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
              <Route exact path='/'>
                <HomePage />
              </Route>
              <Route path='/sports'>
                <SportsChat />
              </Route>
              <Route path='/games'>
                <GamesChat />
              </Route>
              <Route path='/music'>
                <MusicChat />
              </Route>
              <Route path='/dailylife'>
                <DailyLifeChat />
              </Route>
            </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
