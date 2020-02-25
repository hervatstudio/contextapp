import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';


class Navbar extends Component {
    // static contextType = ThemeContext;
    render() {
        // console.log(this.context)
        return (
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                    
                const { isAuthenticated, toggleAuth } = authContext;

                console.log(toggleAuth)

                const { isLightTheme, light, dark } = themeContext;
                const theme = isLightTheme ? light : dark;
                return(
                    <nav style={{ background: theme.bg, color: theme.syntax }}>
                        <h1>Context App</h1>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                        <button onClick={toggleAuth}>{isAuthenticated ? 'Log out' : 'Log in' }</button>
                    </nav>
                    )
                }}
                </ThemeContext.Consumer>
            )}
            </AuthContext.Consumer>
        )
    }
}

export default Navbar;