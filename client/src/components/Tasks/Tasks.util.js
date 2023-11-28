import { postInfo, deleteInfo } from "../../utils/requests";

export function trackInput(e, formState, setFormState) {
    if(e.target.name === 'title') {
        setFormState({ ...formState, [e.target.name]: e.target.value.trim() });
    }
    if(e.target.name === 'description') {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
}

export function processSubmission(e, form, setErrorText) {
    e.preventDefault();
    
    if(form.title === '' || form.description === '') {
        setErrorText('All inputs must be filled in!');
        return;
    }
    
    setErrorText('');

    postInfo('', form, '');
}

export function deleteTask(id) {
    deleteInfo('', id);
}
