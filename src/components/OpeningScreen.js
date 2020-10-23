import React from "react";
import '../styles/styles.scss'

import { Header } from "./Header"

export const OpeningScreen = () => (
    <div>
        <Header />
        <p className="about_p">about Join me</p>
        <img className="image"
            src={require("../images/learning.png")}>
        </img>
    </div>
)