const Yup = require('yup');
const valid = Yup.object().shape({
        fullName: Yup.string()
            .required("Full Name is required!"),
        email: Yup.string()
            .email("E-mail is not valid")
            .required("E-mail is required"),
        password: Yup.string()
            .min(8, 'Password has to be longer than 7 characters!')
            .matches(/^[a-zA-Z0-9]+$/,'Password must contain only latin characters or numbers')
            .required('Password is required!'),
        gender: Yup.string()
            .matches(/MALE|FEMALE/,'Gender is incorrect')
            .required("Gender is required!")
    });
module.exports = valid;