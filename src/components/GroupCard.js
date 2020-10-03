import React, { useState } from "react"

import { Link } from 'react-router-dom';

export const GroupCard = (props) => (
    <Link to="/group" className="card">
        <div className="card_content">
            <h2 style={{ fontSize: 20 }}><b>{props.group.course}</b></h2> 
            <p style={{ fontSize: 25 }}>{props.group.field}</p>
            <h3 style={{ fontSize: 15, textAlign: "left" }}>{props.group.together}</h3>
        </div>
    </Link>
)