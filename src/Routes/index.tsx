import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '../Components/Login/Login'
import Home from '../Components/Home/Home'

const Routes: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={{ pathname: '/create-company' }} />
      </Route>
      <Route path="/create-company">
        <Login />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  )
}

export default Routes
