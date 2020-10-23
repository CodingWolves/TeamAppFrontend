import React, { useState } from "react";
import Select from 'react-select'
import axios from "axios";

import { Header } from "./Header"
import { showError, clearError } from "../useful_functionality/formError"

const coursesOptions = [{value: "1", label: "Differential and Integral Calculus1"}, 
    {value: "2", label: "Differential and Integral Calculus2"}, {value: "3", label: "Physics - Mechanics"},
    {value: "4", label: "Linear Algebra"}, {value: "5", label: "Introduction to Programming"},
    {value: "6", label: "Digital Logic Design"}, {value: "7", label: "Object Oriented Programming"},
    {value: "8", label: "Other"}]
const togetherOptions = [{value: "1", label: "Yes"}, {value: "2", label: "No"}]

export const CreateGroup = () => {
    // const [coursesOptions, setCoursesOptions] = useState([]);
    const [name, setName] = useState();
    const [course, setCourse] = useState();
    const [subject, setSubject] = useState();
    const [where, setWhere] = useState();
    const [when, setWhen] = useState();
    const [long, setLong] = useState();
    const [participantsNum, setParticipantsNum] = useState();
    const [together, setTogether] = useState();
    const [description, setDescription] = useState();

    const create = (e) => {
        console.log(name, course, subject, where, when, long, participantsNum, together, description);
        clearError(document.querySelector('#errorText'))
        let flag = 0;

        if (name === "" || name === undefined) {
            showError(document.querySelector('#errorText'), "name");
            flag = 1;
        }
        if (course === "Please select course" || course === undefined) {
            showError(document.querySelector('#errorText'), "course");
            flag = 1;
        }
        if (subject === '' || subject === undefined) {
            showError(document.querySelector('#errorText'), "subject");
            flag = 1;
        }
        if (where === '' || where === undefined) {
            showError(document.querySelector('#errorText'), "where");
            flag = 1;
        }
        if (when === '' || when === undefined) {
            showError(document.querySelector('#errorText'), "when");
            flag = 1;
        }
        if (long === '' || long === undefined) {
            showError(document.querySelector('#errorText'), "long");
            flag = 1;
        }
        if (participantsNum === '' || participantsNum === undefined) {
            showError(document.querySelector('#errorText'), "participantsNum");
            flag = 1;
        }
        if (together === 'Study together?' || together === undefined) {
            showError(document.querySelector('#errorText'), "together");
            flag = 1;
        }
        if (description === '' || description === undefined) {
            showError(document.querySelector('#errorText'), "description");
            flag = 1;
        }

        if (flag === 0) {
            console.log("post createGroup")
            // axios.post("http://127.0.0.1:5000/createGroup", {
            //     data: {
            //         // title: title,
            //         // subtitle: subtitle,
            //         // content: content,
            //         // from: from
            //     }
            // }, {
            //     params: {
            //         mail: "mail"
            //     },
            //     headers: {
            //         'content-type': "application/json"
            //     }
            // })
            // .then(res => {
            //     console.log(res);
            // });
        } else {
            e.preventDefault();
        }
    }

    const selectCourse = (labelCourse) => {
        let otherCourse = document.querySelector('#otherCourse');

        if (labelCourse === "Other") {
            otherCourse.className = "input_content"
            otherCourse.style = `display: block;
                                margin-left: auto;
                                margin-right: auto;`
            return;
        }
        otherCourse.className = "hidden_input"
        otherCourse.style = ``
        setCourse(labelCourse);
    }

    return (
        <div>
            <Header isSignedIn={true} isInCreateGroup={true} />

            <span className="title_form">Create group</span>

            <form className="form_content">
                <input className="input_content" id="name" placeholder="name"
                    onChange={ 
                        e => (setName(e.target.value), 
                        clearError(document.querySelector('#errorText'))) 
                    }
                />
                <Select className="select_content" styles 
                    options={coursesOptions}
                    placeholder="Please select course"
                    onChange={ 
                        e => (selectCourse(e.label), 
                        clearError(document.querySelector('#errorText')))
                    }
                />
                <br />

                <input className="hidden_input" id="otherCourse" placeholder="other course"
                    onChange={ 
                        e => (setCourse(e.target.value), 
                        clearError(document.querySelector('#errorText'))) 
                    }
                />

                <input className="input_content" id="subject" placeholder="subject"
                    onChange={ 
                        e => (setSubject(e.target.value), 
                        clearError(document.querySelector('#errorText'))) 
                    }
                />
                <input className="input_content" id="where" placeholder="where"
                    onChange={ 
                        e => (setWhere(e.target.value), 
                        clearError(document.querySelector('#errorText'))) 
                    }
                />
                <br />

                <input className="input_content" id="when" placeholder="when"
                    onChange={ 
                        e => (setWhen(e.target.value), 
                        clearError(document.querySelector('#errorText'))) 
                    }
                />
                <input className="input_content" id="long" placeholder="how long"
                    onChange={ 
                        e => (setLong(e.target.value), 
                        clearError(document.querySelector('#errorText'))) 
                    }
                />
                <br />

                <input className="input_content" id="participantsNum" placeholder="participants number"
                    onChange={ 
                        e => (setParticipantsNum(e.target.value), 
                        clearError(document.querySelector('#errorText'))) 
                    }
                />
                <Select className="select_content" 
                    options={togetherOptions}
                    placeholder="Study together?" 
                    onChange={ 
                        e => (setTogether(e.label), 
                        clearError(document.querySelector('#errorText')))
                    }
                />
                <br />

                <input className="input_content" id="description" placeholder="description"
                    onChange={ 
                        e => (setDescription(e.target.value), 
                        clearError(document.querySelector('#errorText')))
                    }
                />
                <br />
                
                <p id="errorText" style={{ fontSize: "20px", color: "red",
                    display: "flexbox", margin: "1px 0 0 0", textAlign: "center"}}>
                </p>

                <button className="form_button" onClick={ create }>Create group</button>
            </form>
        </div>
    )
}