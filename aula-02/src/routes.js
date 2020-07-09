/* eslint-disable no-unused-expressions */
import React from 'react'
import {BrowserRouter, Switch, Route}  from 'react-router-dom'

import Main from './pages/Main/Main'
import Biography from './pages/Biography/Biography'

const Routes = () =>  (
    <BrowserRouter>
     <Switch>
         <Route exact path="/" component={Main} />
         <Route path="/biography/:id" component={Biography}/>
     </Switch>
    </BrowserRouter>
)


export default Routes