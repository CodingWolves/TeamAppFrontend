import React, { useState } from "react";
import '../styles/styles.scss'

import {Header} from "./Header"

export const Dashboard = () => {

    return (
        <div>
            <Header isSignedIn={false}/>
        </div>
    )
}