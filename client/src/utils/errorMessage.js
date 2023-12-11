export function displayRegisterErrorMessage(error, constraint, infoType, setErrorText, takenType) {
    // constraint generated from Spring Boot (Java/Maven) backend and PostgreSQL database
    // trace = backend response
    if(error.response.data.trace.toString().includes(constraint) 
    && error.response.data.trace.toString().includes(infoType))
    {
        setErrorText(`This ${takenType} is already taken!`);
    }
}

export function displayErrorMessage(error, message, output, setErrorText) {
    if(error.response.data.trace.toString().includes(message)) {
        setErrorText(output);
    }
}