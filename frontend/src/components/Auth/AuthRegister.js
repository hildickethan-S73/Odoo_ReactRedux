import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AUTH_CHANGE } from '../../constants/actionTypes';

const mapStateToProps = (state) => ({
    ...state,
    auth: state.auth
})
  
const mapDispatchToProps = (dispatch) => ({
   changeField: (newchange) => dispatch({
       type: AUTH_CHANGE,
       payload: newchange
   })
})

class AuthRegister extends Component {
    change = () => {
        const target  = event.target;
        this.props.changeRestaurant({
            newuser: this.props.auth.newuser,
            target: target
        });
    }
    
    render(){
        // MAKE IF THAT DISPATCHES AN ONLOAD IF STATE.AUTH = {}
        // CREATE EMPTY AUTH.NEWUSER

        if (this.props.auth.user) {
            return(
                <Redirect to="/" />
            )
        }

        return(
            <div className="col-sm-4 book-detail">
                <h3 className="book-detail__header">asdjiadnasndan</h3>
                <div>Name: <input type="text" name="name" value={this.props.auth.newuser.name} onChange={this.change}></input></div>
                <div>Password: <input type="password" name="password" value={this.props.auth.newuser.password} onChange={this.change}></input></div>
                {/* <div><input type="button" value="Update" onClick={this.update} /> </div>
                <div><input type="button" value="Delete" onClick={this.delete} /> </div> */}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthRegister);