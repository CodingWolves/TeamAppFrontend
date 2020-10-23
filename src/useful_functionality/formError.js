
export const showError = (error, text) => {
    error.innerHTML += "<p>" + text + "</p>";
    error.style.height = "auto";
}

export const clearError = (error) => {
    error.style.height = "0px";
    error.innerHTML = "";
}