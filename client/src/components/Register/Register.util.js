// util 
import { isValidEmail } from "../../utils/inputValidation";
import { postInfo } from "../../utils/requests";

export function trackInput(e, formState, setFormState) {
    if(e.target.name === 'lastname') {
        setFormState({ ...formState, [e.target.name]: e.target.value.trim() });
    }
    if(e.target.name === 'firstname') {
        setFormState({ ...formState, [e.target.name]: e.target.value.trim() });
    }
    if(e.target.name === 'email') {
        setFormState({ ...formState, [e.target.name]: e.target.value.trim() });
    }
    if(e.target.name === 'phonenumber') {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    if(e.target.name === 'password') {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    if(e.target.name === 'companyname') {
        setFormState({ ...formState, [e.target.name]: e.target.value.trim() });
    }
}

export function processSubmission(e, form, setErrorText) {
    e.preventDefault();
    
    if(form.lastname === '' || form.firstname === '' || form.email === '' || form.password === '' || form.companyname === '') {
        setErrorText('All required (*) inputs must be filled in!');
        return;
    }

    if(!isValidEmail(form.email)) {
        setErrorText('Invalid email!');
        return;
    }

    if(form.password.length < 8) {
        setErrorText('Password must be at least 8 characters!');
        return;
    }

    setErrorText('');

    postInfo('', form, '');
}