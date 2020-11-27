import React, { useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { PasswordInput } from "./PasswordInput"
import { serverUrl, showError, clearError } from "../useful_functionality/form"

export const SignIn = () => {
    const [mail, setMail] = useState();
    const [password, setPassword] = useState();

    const signIn = async(e) => {
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
            await axios.post(serverUrl + "/signIn", {
                withCredentials: true,
                email: mail,
                password: password,
            }).then(res => {
                console.log(res);
                localStorage.setItem('userName', res.data.name);
            }, error => {
                alert(error.response.data.error);
                e.preventDefault();
            });
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
                    onChange={ e => (setMail(e.target.value), 
                    clearError(document.querySelector('#errorText'))) }
                />
                <br />
                
                <PasswordInput setPassword={setPassword} id="password"/>

                <p id="errorText" style={{ fontSize: "20px", color: "red",
                    display: "flexbox", margin: "1px 0 0 0", textAlign: "center"}}>
                </p>

                <Link className="link_to_button form_button" onClick={ signIn } to="/dashboard"> 
                    Sign In
                    {/* <button className="form_button" onClick={ signIn }>Sign In</button> */}
                </Link>
            </form>
        </div>
    )
}