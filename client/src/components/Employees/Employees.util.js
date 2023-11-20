// util 
import { isValidEmail, isValidNumeric } from "../../utils/inputValidation";
import { postInfo } from "../../utils/requests";

export function trackInput(e, formState, setFormState) {
    if(e.target.name === 'lastname') {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    if(e.target.name === 'firstname') {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    if(e.target.name === 'email') {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    if(e.target.name === 'role') {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    if(e.target.name === 'department') {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    if(e.target.name === 'salary') {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
}

export function processSubmission(e, form, setErrorText) {
    e.preventDefault();
    
    if(form.lastname === '' || form.firstname === '' || form.email === '' || form.role === '' || form.department === '' || form.salary === '') {
        setErrorText('All inputs must be filled in!');
        return;
    }

    if(!isValidEmail(form.email)) {
        setErrorText('Invalid email!');
        return;
    }

    if(!isValidNumeric(form.salary)) {
        setErrorText('Salary must contain only numeric values!');
        return;
    }
    
    setErrorText('');

    postInfo('', form, '');
}
