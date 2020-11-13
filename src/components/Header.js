import React from "react"
import { Link } from 'react-router-dom';

export const Header = (props) => (
    <div className="header">
        <span className="header_title">Join me</span>

        {!props.isSignedIn && !props.isInSignIn &&
            <div className="header_buttons">
                <Link to="/signIn">
                    <button className="header_button">Sign in</button>
                </Link>
                <Link to="/signUp">
                    <button className="header_button">Sign up</button>
                </Link>
            </div>
        }
        
        {props.isSignedIn && !props.isInSignIn &&
            <div className="header_buttons">
                {!props.isInCreateGroup && <Link to="/createGroup">
                    <button className="header_button">create study group</button>
                </Link>}
                <Link to={{ pathname: "/signUp", state: { isUserUpdate: true, userId: "" } }}>
                    <button className="header_button">Hello Nadav</button>
                </Link>
                {/* <span className="header_hello_text">Hello Nadav</span> */}
            </div>
        }
    </div>
)