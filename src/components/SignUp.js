import React, { useState } from "react"
import { Link } from "react-router-dom"
import Select from "react-select"

import { Header } from "./Header"
import { showError, clearError } from "../useful_functionality/form"
import { PasswordInput } from "./PasswordInput"

const coursesOptions = [{value: "1", label: "Differential and Integral Calculus1"}, 
    {value: "2", label: "Differential and Integral Calculus2"}, {value: "3", label: "Physics - Mechanics"},
    {value: "4", label: "Linear Algebra"}, {value: "5", label: "Introduction to Programming"},
    {value: "6", label: "Digital Logic Design"}, {value: "7", label: "Object Oriented Programming"}]

export const SignUp = () => {
    // const [coursesOptions, setCoursesOptions] = useState([]);

    const [mail, setMail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [name, setName] = useState();
    const [degree, setDegree] = useState();
    const [institution, setInstitution] = useState();
    const [interested, setInterested] = useState([]);
    const [imgSrc, setImgSrc] = useState({file: require("../images/add-photo.png")});
    
    const forLabel = ""//= (window.cordova.platformId === "browser" ? "browser" : "not-browser")

    const signUp = (e) => {
        console.log(mail, password, confirmPassword, name, degree, institution, interested);
        clearError()
        let flag = 0;

        if (mail === "" || mail === undefined) {
            showError("mail");
            flag = 1;
        }
        if (password === "" || password === undefined) {
            showError("password");
            flag = 1;
        }
        if (confirmPassword === "" || confirmPassword === undefined) {
            showError("confirmPassword");
            flag = 1;
        }
        if (confirmPassword !== password) {
            showError("diffrent pass in pass and configpass")
        }
        if (name === "" || name === undefined) {
            showError("name");
            flag = 1;
        }
        if (degree === "Please select course" || degree === undefined) {
            showError("degree");
            flag = 1;
        }
        if (institution === '' || institution === undefined) {
            showError("institution");
            flag = 1;
        }
        var photoSrc = document.getElementById("userPhoto").src;
        console.log(photoSrc)
        if (photoSrc == require("../images/add-photo.png")){
            showError("photoSrc");
            flag = 1;
        }
        if (interested.length === 0) {
            showError("interested");
            flag = 1;
        }

        if (flag === 0) {
            console.log("post SignUp")
        } else {
            e.preventDefault();
        }
    }

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setImgSrc({file: e.target.result});
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    const takePhoto = (e) => {
        console.log(navigator);
        console.log(global);
        
        navigator.notification.confirm(
            "Where do you want to take the picture from?",
            phoneConfirmCallback,
            "Picture",
            ["Camera", "Gallery"] // the order is important for the callback function, up to 3 options on android
        );
    }
    
    const phoneConfirmCallback = (selected_index) => {
        // alert(JSON.stringify(clicked_index, null, 4));
        var cameraOptions = {
            correctOrientation: true,
        };
        if (selected_index === 1) {
            // selected Camera
            cameraOptions.sourceType = window.Camera.PictureSourceType.CAMERA;
        }
        if (selected_index === 2) {
            // selected Gallery
            cameraOptions.sourceType = window.Camera.PictureSourceType.SAVEDPHOTOALBUM;
        }
        navigator.camera.cleanup(); // removes the last image taken on ios
        navigator.camera.getPicture(
            (picture_path => setImgSrc({file: picture_path})),
            (msg => alert(msg)),
            cameraOptions
        )
    }

    const selectCours = (e) => {
        if (e === null || e.length === 0) {
            setInterested([])
            return
        }
        
        var exists;
        if (e.length < interested.length) {
            interested.map(savedCourse => (
                exists = e.some(currentCourse => (savedCourse === currentCourse.label)),
                exists === false ? interested.splice(interested.indexOf(savedCourse), 1) : null
            ))
            return
        }

        interested.push(e[e.length-1].label)
        clearError()
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
                
                <input className="input_content" id="mail" placeholder="mail"
                    onChange={ e => (setMail(e.target.value), clearError()) }
                />
                <br />
                
                <PasswordInput setPassword={setPassword} id="password"/>
                <PasswordInput setPassword={setConfirmPassword} id="confirmPassword"/>
                <br />

                <input className="input_content" id="degree" placeholder="degree" 
                    onChange={ e => (setDegree(e.target.value), clearError()) }
                />
                <input className="input_content" id="institution" placeholder="academic institution"
                    onChange={ e => (setInstitution(e.target.value), clearError()) }
                />
                <br />
                
                <div className="image_button">
                    <label for={forLabel}>
                        <img
                            className="image"
                            id="userPhoto"
                            src={imgSrc.file}
                        />
                    </label>

                    <input style={{ display: "none" }} id="browser" type="file" onChange={ onImageChange }/> 
                    <button style={{ display: "none" }} id="not-browser" type="button" onClick={ takePhoto }/>
                </div>
                <br />

                <Select className="select_content"
                    isMulti id="selectCourses"
                    options={coursesOptions}
                    placeholder="interested in courses"
                    onChange={selectCours}
                />

                <p id="errorText" style={{ fontSize: "20px", color: "red",
                    display: "flexbox", margin: "1px 0 0 0", textAlign: "center"}}>
                </p>

                <button className="form_button" onClick={ signUp }>Sign Up</button>
            </form>
        </div>
    )
}