import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Select from "react-select"
import axios from "axios";

import { Header } from "./Header"
import { serverUrl, showError, clearError } from "../useful_functionality/form"
import { PasswordInput } from "./PasswordInput"

export const SignUp = (props) => {
    const [coursesOptions, setCoursesOptions] = useState([]);
    const [userDetails, setUserDetails] = useState();

    const [mail, setMail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [name, setName] = useState();
    const [degree, setDegree] = useState();
    const [institution, setInstitution] = useState();
    const [interested, setInterested] = useState([]);
    const [imgSrc, setImgSrc] = useState({file: require("../images/add-photo.png")});
    const [imageBase64, setImageBase64] = useState();
    
    const forLabel = (window.cordova.platformId === "browser" ? "browser" : "not-browser")
    var userUpdate = false
    if (props.location.state !== undefined) {
        userUpdate = true
        getUserDetails()
    }
    
    useEffect(() => {
        axios.get(serverUrl + "/courses").then(res => {
            setCoursesOptions([{value: "0", label: "All"}, ...res.data])
        })
    }, []);

    function getUserDetails() {
        console.log("getUserDetails")
        axios.get(serverUrl + "/user/details", { withCredentials: true }).then(res => {
            console.log(res)
            setUserDetails(res.data)
        }, error => {
            console.log(error.response.data.error);
        })
    }

    const signUp = (e) => {
        console.log(mail, password, confirmPassword, name, degree, institution, interested);
        clearError()
        let flag = 0;

        if (mail === "" || mail === undefined) {
            showError("Please enter your email address")
            flag = 1
        }
        if (password === "" || password === undefined) {
            showError("Please enter your password")
            flag = 1
        }
        if (confirmPassword === "" || confirmPassword === undefined) {
            showError("Please enter your confirm password")
            flag = 1
        }
        if (confirmPassword !== password) {
            showError("diffrent pass in pass and configpass")
            flag = 1
        }
        if (name === "" || name === undefined) {
            showError("Please enter your name")
            flag = 1
        }
        if (degree === "" || degree === undefined) {
            showError("Please enter your degree")
            flag = 1
        }
        if (institution === '' || institution === undefined) {
            showError("Please enter your institution")
            flag = 1
        }
        
        var photoSrc = document.getElementById("userPhoto").src;
        if (photoSrc === require("../images/add-photo.png")){
            showError("photoSrc");
            flag = 1;
        }
        if (interested.length === 0) {
            showError("interested");
            flag = 1;
        }
        
        if (flag === 0) {
            axios.post(serverUrl + "/signUp",  {
                withCredentials: true,
                email: mail,
                name: name,
                password: password,
                degree: degree,
                institution: institution,
                image: imageBase64,
                interested: interested
            }).then(res => {
                console.log(res);
                localStorage.setItem('userName', res.data.name);
            }, error => {
                alert(error.response.data.error)
                e.preventDefault()
            });
        } else {
            e.preventDefault();
        }
    }

    const update = (e) => {

    }

    const convertImgToBase64 = (url, callback, outputFormat) => {
        var canvas = document.createElement("CANVAS");
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = function () {
            canvas.height = img.height;
            canvas.width = img.width;
            ctx.drawImage(img, 0, 0);
            var dataURL = canvas.toDataURL(outputFormat || "image/png");
            canvas = null;
            callback(dataURL);
        };
        img.src = url;
    }

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setImgSrc({file: e.target.result});
                convertImgToBase64(e.target.result, data => setImageBase64(data));
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
        convertImgToBase64(imgSrc.file, data => setImageBase64(data))
    }

    const selectCours = (e) => {
        clearError()

        if (e === null || e.length === 0) {
            setInterested([])
            return
        }

        if (e[e.length-1].label == "All") {
            setInterested(coursesOptions.slice(1, coursesOptions.length))
            return
        }
        
        if (e.length < interested.length) {
            setInterested(e)
            return
        }

        interested.push(e[e.length-1])
    }
    
    return  (
        <div>
            <Header isInSignIn={true} />

            <span className="title_form">{userUpdate ? "Update" : "Sign Up"}</span>

            <form className="form_content">
                <input className="input_content" id="name" placeholder="name"
                    onChange={ e => (setName(e.target.value), clearError()) }
                />
                <br />
                
                <input className="input_content" id="mail" placeholder="mail" 
                    disabled={(userUpdate) ? "disabled" : ""}
                    onChange={ e => (setMail(e.target.value), clearError()) }
                />
                <br />
                
                {!userUpdate && <div>
                    <PasswordInput setPassword={setPassword} id="password" />
                    <PasswordInput setPassword={setConfirmPassword} id="confirmPassword" />
                    <br />
                </div>}

                <input className="input_content" id="degree" placeholder="degree" 
                    onChange={ e => (setDegree(e.target.value), clearError()) }
                />
                <input className="input_content" id="institution" placeholder="academic institution"
                    onChange={ e => (setInstitution(e.target.value), clearError()) }
                />
                <br />
                
                <div className="image_button">
                    <label htmlFor={forLabel}>
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
                    value={interested}
                    placeholder="interested in courses"
                    onChange={ selectCours }
                />

                <p id="errorText" style={{ fontSize: "20px", color: "red",
                    display: "flexbox", margin: "1px 0 0 0", textAlign: "center"}}>
                </p>
                
                <Link className="link_to_button form_button" onClick={ userUpdate ? update : signUp }
                    to="/dashboard"> {userUpdate ? "Update" : "Sign Up"}
                    {/* <button className="form_button" onClick={ signUp }>{userUpdate ? "Update" : "Sign Up"}</button> */}
                </Link>
            </form>
        </div>
    )
}