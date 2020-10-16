import React from "react"

import { Link } from 'react-router-dom';
import Select from 'react-select'
import { Header } from "./Header";

const coursesOptions = [{value: "1", label: "Differential and Integral Calculus1"}, 
    {value: "2", label: "Differential and Integral Calculus2"}, {value: "3", label: "Physics - Mechanics"},
    {value: "4", label: "Linear Algebra"}, {value: "5", label: "Introduction to Programming"},
    {value: "6", label: "Digital Logic Design"}, {value: "7", label: "Object Oriented Programming"},
    {value: "8", label: "All"}]

export const SignUp = () => {

    const selectCourse = (labelCourse) => {
        let selectCourses = document.querySelector('#selectCourses');
        // console.log(selectCourses.select)
        if (labelCourse === "All") {
            
            return;
        }
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
                    /*onChange={ e => (setName(e.target.value), clearError()) }*/
                />
                <input className="input_content" id="degree" placeholder="degree"
                    /*onChange={ e => (setName(e.target.value), clearError()) }*/
                />
                <br />

                <input className="input_content" id="institution" placeholder="academic institution"
                    /*onChange={ e => (setName(e.target.value), clearError()) }*/
                />
                <Select className="select_content" isMulti id="selectCourses" 
                    options={coursesOptions}
                    placeholder="please select courses you are interested"
                    onChange={ e => (selectCourse(e.label)/*, clearError()*/) }
                />

            </form>
        </div>
    )
}