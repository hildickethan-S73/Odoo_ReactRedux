import React, {Component} from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';
import { AUTH_LOGOUT } from '../../constants/actionTypes';

const mapStateToProps = (state) => ({
    ...state,
    user: state.auth.user
})
  

const mapDispatchToProps = (dispatch) => ({
    logout: loggedoutUser => dispatch({
      type: AUTH_LOGOUT,
      payload: loggedoutUser
    })
})

class Profile extends Component {
    logout = () => {
        this.props.logout(Promise.resolve(
          agent.Auth.logout()
        ))
    }
    
    render(){
        if (this.props.user && this.props.user.id) {
            return(
                <div className="col-sm-4 book-detail">
                    <h3>Profile</h3>
                    <h4>Name: {this.props.user.name}</h4>
                    <input type="button" className="btn btn-danger" value="Logout" onClick={this.logout} />
                </div>
            );
        }

        return (
            <div className="col-sm-4 book-detail"></div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);