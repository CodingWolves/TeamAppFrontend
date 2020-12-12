import React, { useState } from "react"
import axios from "axios";

import { Header } from "./Header"

const group = {id: "1", groupName: "1", course: "1", subject: "1", institution: "1", where: "1", when: "1",
        long: "1", participantsNum: "1", together: true, description: "1"}

export const Group = (props) => {
    // const [group, setGroup] = useState();

    // var afterJoin = props.location.state.joined !== undefined ? true : false
    
    //for building, after delete
    var groupId = props.location.state;
    if (groupId === undefined) {
        groupId = 1;
    } else {
        groupId = groupId.groupId
    }
    console.log(groupId);
    //var groupId = props.location.state.groupId;

    //get specific group by id

    const joinGroup = () => {
        //send join group to server
    }

    return (
        <div>
            <Header isSignedIn={true}/>
            <div className="big_card">
                <span className="card_title" >{group.name}</span>

                <div style={{ textAlign: "left" }}>
                    <span className="card_field">Course: {group.course}</span>
                    <span className="card_field">Subject: {group.subject}</span>
                    <br />
                    
                    <span className="card_field">participants number: {group.participantsNumber}</span>
                    <span className="card_field">{!group.studyTogether && "Not "}Study together</span>
                    <br />

                    <span className="card_field">Where: {group.where} </span>
                    <span className="card_field">When: {group.when}</span>
                    <br />

                    <span className="card_field">How long: {group.howLong}</span>
                    <br />

                    <span className="card_field">description: {group.description}</span>
                </div>

                <button className="card_button" onClick={ joinGroup }>Join me</button>
            </div>
        </div>
    )
}