import React from "react"

import { Link } from 'react-router-dom';
import { Header } from "./Header";

export const SignIn = () => {

    return  (
        <div>
            <Header isInSignIn={true} />

            <span className="">Sign In</span>
        </div>
    )
}