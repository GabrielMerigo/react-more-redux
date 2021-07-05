import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Reservas from './Pages/Reservas/Reservas';

export default function Routes(){
  return(
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/reservas" exact component={Reservas}/>
    </Switch>
  )
}