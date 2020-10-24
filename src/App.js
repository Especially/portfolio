import React from 'react';
import Main from './pages/Main/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' render={() => {
          return (
            <>
              <Main />
              <Route path='/project/:id' component={ProjectDetails} />
            </>
          )
        }} />
      </Switch>
    </Router>
  );
}

export default App;
