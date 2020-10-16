import React, { useState } from "react"
import { Link } from 'react-router-dom'
import Select from 'react-select'

import { Header } from "./Header"
import { showError, clearError } from "../useful_functionality/formError"


const coursesOptions = [{value: "1", label: "Differential and Integral Calculus1"}, 
    {value: "2", label: "Differential and Integral Calculus2"}, {value: "3", label: "Physics - Mechanics"},
    {value: "4", label: "Linear Algebra"}, {value: "5", label: "Introduction to Programming"},
    {value: "6", label: "Digital Logic Design"}, {value: "7", label: "Object Oriented Programming"},
    {value: "8", label: "All"}]

export const SignUp = () => {
    // const [coursesOptions, setCoursesOptions] = useState([]);
    const [name, setName] = useState();
    const [degree, setDegree] = useState();
    const [institution, setInstitution] = useState();
    const [interested, setInterested] = useState([]);

    const signUp = (e) => {
        console.log(name, degree, institution, interested);
        clearError()
        let flag = 0;

        

        if (flag === 0) {
            console.log("post SignUp")
        } else {
            e.preventDefault();
        }
    }

    const selectCourse = (labelCourse) => {
        let selectCourses = document.querySelector('#selectCourses');
        console.log(selectCourses)
        if (labelCourse === "All") {
            
            return;
        }
        setInterested(labelCourse)
        // otherCourse.className = "hidden_input"
        // otherCourse.style = ``
        // setCourse(labelCourse);
    }

    return  (
        <div>
            <Header isInSignIn={true} />

            <span className="title_form">Sign Up</span>

            <form className="form_content">
                <input className="input_content" id="name" placeholder="name"
                    onChange={ e => (setName(e.target.value), clearError()) }
                />
                <br />

                <input className="input_content" id="degree" placeholder="degree"
                    onChange={ e => (setDegree(e.target.value), clearError()) }
                />
                <input className="input_content" id="institution" placeholder="academic institution"
                    onChange={ e => (setInstitution(e.target.value), clearError()) }
                />
                <br />

                <button className="image_button" /*onClick={takePhoto}*/>
                    <img
                        className="image"
                        id="takePhoto"
                        src={require("../images/add-photo.png")}
                    />
                </button>
                <br />

                <Select className="select_content big_select_content"
                    isMulti id="selectCourses" 
                    options={coursesOptions}
                    placeholder="please select courses you are interested"
                    onChange={ e => (selectCourse(e.label), clearError()) }
                />

                <p id="errorText" style={{ fontSize: "20px", color: "red",
                    display: "flexbox", margin: "1px 0 0 0", textAlign: "center"}}>
                </p>

                <button className="form_button" onClick={ signUp }>Sign Up</button>
            </form>
        </div>
    )
}