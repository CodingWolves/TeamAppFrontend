import React, { useState, useEffect } from "react"
import axios from "axios";
import Select from "react-select"

import { Header } from "./Header"
import { GroupCard } from "./GroupCard"
import { serverUrl } from "../useful_functionality/form"

const originGroups = [{id: "1", name: "1", course: {value: "1", label: "1"}, subject: "1", institution: "1", where: "1", when: "1",
        long: "1", participantsNum: "1", studyTogether: true, description: "1"}, 
    {id: "2", name: "2", course: {value: "2", label: "2"}, subject: "2", institution: "2", where: "2", when: "2", long: "2",
        participantsNum: "2", studyTogether: false, description: "2"}, 
    {id: "3", name: "3", course: {value: "3", label: "3"}, subject: "3", institution: "3", where: "3", when: "3", long: "3",
        participantsNum: "3", studyTogether: true, description: "3"}, 
    {id: "4", name: "4", course: {value: "4", label: "4"}, subject: "4", institution: "4", where: "4", when: "4", long: "4",
        participantsNum: "4", studyTogether: false, description: "4"}]

export const Dashboard = () => {
    // const [originGroups, setOriginGroups] = useState([]);
    const [groups, setGroups] = useState([]);
    const [selectGroups, setSelectGroups] = useState([]);

    useEffect(() => {
        createSelectGroups()
        setGroups(originGroups)
        // axios.get(serverUrl + "/groups").then(res => {
        //     console.log(res.data)
        //     setOriginGroups(res.data)
        //     setGroups(res.data)
        // })
    }, []);

    const createSelectGroups = () => {
        originGroups.map(originGroup => (
            selectGroups.push({value: originGroup, label: originGroup.name})
        ))
    }

    const selectGroup = (e) => {
        console.log(e)

        if (e === null) {
            setGroups(originGroups)
            return
        }

        var newGroups = []
        newGroups.push(e.value)

        setGroups([...newGroups])
    }

    return (
        <div>
            <Header isSignedIn={true}/>
            <Select className="select_content big_select_content"
                isClearable={true} id="selectGroups"
                options={selectGroups}
                placeholder="Search group"
                onChange={ selectGroup }
            />
            
            <div className="groups">
                {groups.map(group => (
                    <GroupCard group={group} />
                ))}
            </div>
        </div>
    )
}