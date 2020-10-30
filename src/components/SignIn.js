import React, { useState } from "react"
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { PasswordInput } from "./PasswordInput"
import { showError, clearError } from "../useful_functionality/form"

export const SignIn = () => {
    const [mail, setMail] = useState();
    const [password, setPassword] = useState();

    const signIn = (e) => {
        console.log(mail, password);
        clearError()
        let flag = 0;

        if (mail === "" || mail === undefined) {
            showError("mail");
            flag = 1;
        }
        if (password === "" || password === undefined) {
            showError("password");
            flag = 1;
        }

        if (flag === 0) {
            console.log("get SignIn")
        } else {
            e.preventDefault();
        }
    }

    return  (
        <div>
            <Header isInSignIn={true} />

            <span className="title_form">Sign In</span>

            <form className="form_content">
                <input className="input_content" id="mail" placeholder="mail"
                    onChange={ 
                        e => (setMail(e.target.value), 
                        clearError(document.querySelector('#errorText'))) 
                    }
                />
                <br />
                
                <PasswordInput setPassword={setPassword} id="password"/>

                <p id="errorText" style={{ fontSize: "20px", color: "red",
                    display: "flexbox", margin: "1px 0 0 0", textAlign: "center"}}>
                </p>

                <button className="form_button" onClick={ signIn }>Sign In</button>
            </form>
        </div>
    )
}