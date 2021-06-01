import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
// import './App.css';
import AddQuestions from './AddQuestions';
import Header from './Header';
import Leaderboard from './Leaderboard';
import Login from './Login';
import Questions from './Questions';
import PrivateRoute from '../routes/PrivateRoute';
import AnswerQuestion from './AnswerQuestion';
import { handelInitialDataQuestions } from '../actions/questionsActions';
import { handelInitialData } from '../actions/usersActions';
// import { handelInitialData } from '../reducers/users';
class App extends Component {

  componentDidMount() {
    // debugger
    const { dispatch } = this.props;
    // // dispatch()
    // console.log("questions")
    // console.log(questions)
    //   dispatch(handelInitialData())
    dispatch(handelInitialData())
    dispatch(handelInitialDataQuestions())
  }


  render() {
    // const { store, state, dispatch } = this.props;
    // store.subscribe(() => console.log(store.getState()))
    // console.log("state")
    // console.log(state)
    const { state, dispatch, authedUser } = this.props;
    // const authedUser = state.authedUser
    return (
      <div className="container text-center">
        <Header />
        <div className="row">
          <Route exact path="/">
            {authedUser ? <Questions /> : <Login />}
          </Route>
          {/* <Route path="/add">
              <AddQuestions />
            </Route> */}

          <PrivateRoute path="/add" component={AddQuestions} />
          <PrivateRoute path="/leaderboard" component={Leaderboard} />
          <PrivateRoute path="/question" component={AnswerQuestion} />
          <PrivateRoute path="/question/:id" component={AnswerQuestion} />

          {/* 
            <Route path="/leaderboard">
              <Leaderboard />
            </Route>
             */}
        </div>
      </div>
    );
  }
}



export default connect((state) => ({
  dispatch: state.dispatch,
  authedUser: state.authedUser,
}))(App);
