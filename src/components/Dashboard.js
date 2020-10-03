import React, { useState } from "react"

import { Header } from "./Header"
import { GroupCard } from "./GroupCard"

const groups= [{together: "true", course: "1", field: "1", institution: "1", where: "1", when: "1", long: "1",
        participantsNum: "1", description: "1"}, 
    {together: "false", course: "2", field: "2", institution: "2", where: "2", when: "2", long: "2", 
        participantsNum: "2", description: "2"}, 
    {together: "true", course: "3", field: "3", institution: "3", where: "3", when: "3", long: "3",
        participantsNum: "3", description: "3"}, 
    {together: "false", course: "4", field: "4", institution: "4", where: "4", when: "4", long: "4",
        participantsNum: "4", description: "4"}]

export const Dashboard = () => {

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