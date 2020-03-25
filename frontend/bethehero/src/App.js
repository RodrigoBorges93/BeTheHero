import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './global.css'
import Logon from './pages/logon/logon.components';
import Register from './pages/register/register.component';
import Profile from './pages/profile/profile.component';
import NewIncident from './pages/NewIncident/NewIncident.component';


function App() {
  return (
   <BrowserRouter>
    <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/incidents/new' component={NewIncident} />
        <Route path='*' component={Logon} /> 
    </Switch>
   </BrowserRouter>

  );
}

export default App;
