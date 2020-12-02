import React from "react"

import { Link } from 'react-router-dom';

export const GroupCard = (props) => {
    const groupId = props.group.id

    return  (
        <Link className="small_card" to={{ pathname: "/group", state: { groupId } }}>
            <div className="card_content">
                <h2 style={{ fontSize: 20 }}><b>{props.group.name}</b></h2> 
                <p style={{ fontSize: 25 }}>{props.group.course.value}, {props.group.subject}</p>
                <h3 style={{ fontSize: 15, textAlign: "left" }}>
                    {!props.group.studyTogether && "Not "}Study together
                </h3>
            </div>
        </Link>
    )
}