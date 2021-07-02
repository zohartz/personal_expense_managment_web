import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ExpenseContainer, IncomesContainer } from './containers';
import {Login, SignUp, Dashboard } from './components'
import Api from './api/Api'


const Main = () =>{
  const expenseMngApi = new Api()
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/signUp' component={SignUp} />

          {/* <Route exact path={["/", "/dashboard"]} component={Dashboard} /> */}
          {/* <Route exact path={['/', '/dashboard']} component={Dashboard} /> */}
          <Route exact path={["/", "/dashboard"]} render={() => <Dashboard expenseMngApi={expenseMngApi}/>} />


          {/* <Route path='/login' component={<Login expenseMngApi={expenseMngApi}></Login>} /> */}
          {/* <Route path='/login'  render={(props) => <Login expenseMngApi={expenseMngApi} history={props.history}/>} /> */}
          <Route path='/login'  render={() => <Login expenseMngApi={expenseMngApi}/>} />


          <Route path='/expense' component={ExpenseContainer} />
          <Route path='/incomes' component={IncomesContainer} />
          {/* <Route path="/tutorials/:id" component={Tutorial} /> */}
        </Switch>
      </div>
    </Router>
  );
}
export default Main;
