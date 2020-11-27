import React, { useState, useEffect } from "react"
import axios from "axios";

import { Header } from "./Header"
import { GroupCard } from "./GroupCard"
import { serverUrl } from "../useful_functionality/form"

// const groups = [{id: "1", groupName: "1", course: "1", subject: "1", institution: "1", where: "1", when: "1",
//         long: "1", participantsNum: "1", together: true, description: "1"}, 
//     {id: "2", groupName: "2", course: "2", subject: "2", institution: "2", where: "2", when: "2", long: "2",
//         participantsNum: "2", together: false, description: "2"}, 
//     {id: "3", groupName: "3", course: "3", subject: "3", institution: "3", where: "3", when: "3", long: "3",
//         participantsNum: "3", together: true, description: "3"}, 
//     {id: "4", groupName: "4", course: "4", subject: "4", institution: "4", where: "4", when: "4", long: "4",
//         participantsNum: "4", together: false, description: "4"}]

export const Dashboard = (props) => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        axios.get(serverUrl + "/groups").then(res => {
            console.log(res.data)
            setGroups(res.data)
        })
    }, []);

    return (
        <div>
            <Header isSignedIn={true}/>
            <div className="groups">
                {groups.map(group => (
                    <GroupCard group={group} />
                ))}
            </div>
        </div>
    )
}