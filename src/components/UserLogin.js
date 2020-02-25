import React, { Component } from 'react'
import { AuthContext } from '../contexts/AuthContext';

class UserLogin extends Component {
    static contextType = AuthContext;
    render() {
        const { toggleAuth } = this.context;
        // console.log(toggleAuth);
        console.log(this.context.isAuthenticated)
        return (
            <div>
                {this.context.isAuthenticated ? (
                    <>
                    <h1>Welcome back, you are logged in</h1>
                    <button onClick={toggleAuth}>Log out</button>
                    </>
                ): (
                    <button onClick={toggleAuth}>Log in</button>
                )}
            </div>
        );
    }
}

export default UserLogin;
