import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AUTH_CHANGE, AUTH_LOAD_NEWUSER } from '../../constants/actionTypes';

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
   })
})

class AuthRegister extends Component {
    change = () => {
        const target  = event.target;
        this.props.changeField({
            newuser: this.props.auth.newuser,
            target: target
        });
    }
    
    render(){
        // MAKE IF THAT DISPATCHES AN ONLOAD IF STATE.AUTH = {}
        // CREATE EMPTY AUTH.NEWUSER
        if (!this.props.auth.newuser) {
            this.props.loadObject();
            return (
                <div>Loading...</div>
            )
        }

        if (this.props.auth.user) {
            return(
                <Redirect to="/" />
            )
        }

        return(
            <div className="col-sm-4 book-detail">
                <form>
                    <h3 className="book-detail__header">asdjiadnasndan</h3>
                    <div>Name: <input type="text" name="name" value={this.props.auth.newuser.name} onChange={this.change}></input></div>
                    <div>Password: <input type="password" name="password" value={this.props.auth.newuser.password} onChange={this.change}></input></div>
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthRegister);