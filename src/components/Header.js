import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';

class Header extends Component {
    render() {

        const { dispatch, authedUser, users } = this.props
        // const state = state.getState()
        // const authedUser = state.authedUser
        const authedUserFullData = users[authedUser]
        // if (authedUserFullData === undefined) {
        //     return"";
        // }
        return (

            <header className="App-header">

                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/">Would You Rather</Link>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                {/* <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li> */}
                                {/* <li><Link to="/questions">Questions</Link></li> */}
                                <li> <Link to="/">Home</Link></li>

                                <li><Link to="/add">Add new poll</Link></li>
                                <li><Link to="/leaderboard">Leader board</Link></li>
                                {/* <li><Link to="/question">question</Link></li>
                                <li><Link to="/question/20">question id</Link></li> */}
                            </ul>

                            {authedUser ?

                                <ul className="nav navbar-nav navbar-right" style={{ 'display': authedUser ? '' : 'none' }}>
                                    <li>
                                        <img
                                            src={authedUserFullData.avatarURL ? authedUserFullData.avatarURL : "https://via.placeholder.com/20x20"}
                                            alt=""
                                            className="img-thumbnail img-circle"
                                            width="50"
                                            height="50" />
                                        {authedUserFullData.name || ""}
                                    </li>

                                    <li>
                                        <button onClick={(e) => {
                                            e.preventDefault()
                                            dispatch(setAuthedUser(""))
                                        }}>
                                            Log out
                                        </button>
                                    </li>
                                </ul>

                                : ''}
                        </div>
                    </div>
                </nav>
            </header >
        );
    }
}

export default connect((state) => ({
    state: state,
    authedUser: state.authedUser,
    users: state.users,
}))(Header);