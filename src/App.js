import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { BackToTop } from './components';
import { HomePage, ProjectPage } from './pages';
import ScrollToTop from './utils/ScrollToTop';

import './App.css';
import ChangeTheme from './components/ChangeTheme/ChangeTheme';

function App() {

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/personal-website/" exact component={HomePage} />
          <Route path="/personal-website/projects/" exact component={ProjectPage} />
          <Redirect to="/personal-website/" />
        </Switch>
      </Router>
      <BackToTop />
      <ChangeTheme />
    </div>
  );
}

export default App;
