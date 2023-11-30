const validation = (input) => {
    const regexEmail = /\S+@\S+.\S+/;
    const regexPassword = new RegExp('[0-9]')
    const errors = {};

    //EMAIL
    if (!input.email.length) errors.email = 'Ingrese un email'
    else {
        if (!regexEmail.test(input.email)) errors.email = 'Ingrese un email válido'
        if (input.email.length > 35) errors.email = 'Ingrese un email menor de 35 caracteres'
    }

    //PASSWORD
    if (!input.password.length) errors.password = 'Ingrese una password'
    else {
        if (!regexPassword.test(input.password)) errors.password = 'Debe contener al menos un número'
        if (input.password.length < 6) errors.password = 'Al menos 6 caracteres'
        if (input.password.length > 10) errors.password = 'Máximo 10 caracteres'
    }



    return errors;
};



export default validation;