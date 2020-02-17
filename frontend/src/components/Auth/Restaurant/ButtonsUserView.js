import React from 'react';
import { Link } from 'react-router-dom';

const ButtonsUserView = ({user, create}) => {
    if (user && user.id) {
        return (
            <div>
                <input type="button" className="btn btn-success" value="Create" onClick={create} />
            </div>
        )
    }

    // else

    return (
      <div>
          <Link to="/register" className="btn btn-info">Register</Link>
          <Link to="/login" className="btn btn-info">Login</Link>
      </div>
    );
}

export default ButtonsUserView;
