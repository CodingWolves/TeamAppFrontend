
export const serverUrl = "http://localhost:3000";

export const showError = (errorText) => {
    var errorLabel = document.getElementById("errorText")

    errorLabel.innerHTML += "<p>" + errorText + "</p>"
    errorLabel.style.height = "auto"
}

export const clearError = () => {
    var errorLabel = document.getElementById("errorText")

    errorLabel.style.height = "0px"
    errorLabel.innerHTML = ""
}

export const showPassword = (inputLabelName, imageLabelName) => {
    var inputLabel = document.getElementById(inputLabelName)
    var imageLabel = document.getElementById(imageLabelName)

    if (inputLabel.type === "password") {
        inputLabel.type = ""
        imageLabel.src = require("../images/eye.png")
        return
    }
    inputLabel.type = "password";
    imageLabel.src = require("../images/eye_slash.png")
}