
export const showError = (text) => {
    let error = document.querySelector('#errorText');      
    error.innerHTML += "<p>" + text + "</p>";
    error.style.height = "auto";
}

export const clearError = () => {
    let error = document.querySelector('#errorText');
    error.style.height = "0px";
    error.innerHTML = "";
}