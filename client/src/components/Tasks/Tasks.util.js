import { postInfo, deleteInfo } from "../../utils/requests";

export function trackInput(e, formState, setFormState) {
    if(e.target.name === 'title') {
        setFormState({ ...formState, [e.target.name]: e.target.value.trim() });
    }
    if(e.target.name === 'description') {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    if(e.target.name === 'email') {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
}

export function processSubmission(e, form, setErrorText, user) {
    e.preventDefault();
    
    if(form.title === '' || form.description === '') {
        setErrorText('Title and description must be filled in!');
        return;
    }

    if(form.email === '') {
        setErrorText('Email must be selected! By default, no email is selected (even if it looks like one is).');
        return;
    }
    
    setErrorText('');

    postInfo(`tasks/${user.id}/${form.email}`, form, setErrorText);
}

export function deleteTask(id) {
    deleteInfo(`tasks/${id}`);
}
