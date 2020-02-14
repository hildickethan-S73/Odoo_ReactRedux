import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import agent from '../../agent';
import { AUTH_CHANGE, AUTH_LOAD_NEWUSER, AUTH_LOGIN } from '../../constants/actionTypes';

const mapStateToProps = (state) => ({
    ...state,
    auth: state.auth
})
  
const mapDispatchToProps = (dispatch) => ({
    changeField: (newchange) => dispatch({
        type: AUTH_CHANGE,
        payload: newchange
    }),
    loadObject: () => dispatch({
        type: AUTH_LOAD_NEWUSER
    }),
    login: returnedUser => dispatch({
        type: AUTH_LOGIN,
        payload: returnedUser
    })
})

class AuthLogin extends Component {
    constructor(props){
        super(props);
        this.props.loadObject();
    }

    change = (event) => {
        const target  = event.target;
        this.props.changeField({
            newuser: this.props.auth.newuser,
            target: target
        });
    }

    login = () => {
        const user = this.props.auth.newuser;

        if (user.name && user.password) {
            this.props.login(Promise.resolve(
                agent.Auth.login(user)
            ))
        } else {
            console.error('missing fields')
        }
    }

    render(){
        if (this.props.auth.user && this.props.auth.user.id) {
            return(
                <Redirect to="/" />
            )
        }

        if (!this.props.auth.newuser) {
            return (
                <div>Loading...</div>
            )
        }

        return(
            <div className="col-sm-4 book-detail">
                <h3 className="book-detail__header">Login</h3>
                <div>Name: <input type="text" name="name" value={this.props.auth.newuser.name || ''} onChange={this.change}></input></div>
                <div>Password: <input type="password" name="password" value={this.props.auth.newuser.password || ''} onChange={this.change}></input></div>
                <input type="button" onClick={this.login} value="Login"/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLogin);