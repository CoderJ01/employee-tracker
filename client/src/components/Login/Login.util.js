// util 
import { loginUser } from "../../utils/requests";

export function trackInput(e, formState, setFormState) {
    if(e.target.name === 'username') {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    if(e.target.name === 'password') {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
}

export function processSubmission(e, form, setErrorText) {
    e.preventDefault();
    
    if(form.username === '' || form.password === '') {
        setErrorText('All inputs must be filled in!');
        return;
    }

    setErrorText('');

    loginUser(route, form.username, form.password);
}