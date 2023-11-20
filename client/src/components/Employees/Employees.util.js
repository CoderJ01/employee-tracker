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

export function processSubmission(e, lastname, firstname, email, role, department, salary, setErrorText) {
    e.preventDefault();
    if(lastname === '' || firstname === '' || email === '' || role === '' || department === '' || salary === '') {
        setErrorText('All inputs must be filled in');
        return;
    }
    setErrorText('');
}

