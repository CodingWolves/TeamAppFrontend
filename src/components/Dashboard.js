import React, { useState } from "react"

import { Header } from "./Header"

export const Dashboard = () => {

    return (
        <div>
            <Header isSignedIn={true}/>
            <p>Dashboard</p>
        </div>
    )
}