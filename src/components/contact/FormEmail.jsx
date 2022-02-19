import React, {useState} from 'react';
import { Formik, Form } from 'formik'
import emailjs from 'emailjs-com';
import * as Yup from 'yup';

import TextField from './TextField'
import TextArea from './TextArea'
import './FormEmail.scss'

function FormEmail() {

    const [successfully, setSuccessfully] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_szdqb9q', 'template_n2ko08g', e.target, 'user_MOx8BDzmoqE4taPh674Bf')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        setSuccessfully(true);
    } 
    // Email.js

    setTimeout(() => {
        setSuccessfully(false);
    }, 5000);

    const validate = Yup.object({
        fullname: Yup.string()
            .min(5, 'Must be more than 5 characters')
            .max(40, 'Must be 40 characters or less')
            .required('Full name is required'),
        email: Yup.string()
            .email('This is not valid email format')
            .required('Email is required'),
        message: Yup.string()
            .min(10, 'Must be more than 10 characters')
            .max(40, 'Must be 40 characters or less')
            .required('Say somethings : D')
    })

    return (
        <>
            <div className="form">
                <Formik 
                    initialValues={{
                        fullname: '',
                        email: '',
                        message: ''
                    }}
                    validationSchema={validate}
                >
                    {Formik => (
                        <div>
                            <h2>Say Hello !</h2>
                            <Form onSubmit={sendEmail}>
                                <TextField label="full name" name="fullname" type="text" placeholder="full name" />
                                <TextField label="email" name="email" type="email" placeholder="example@gmail.com"/>
                                <TextArea label="message" name="message" type="text" placeholder="message" />
                                <br />

                                <button className="btn" type="submit"> SUBMIT </button>

                                <div className="text-successfully">
                                    {successfully ? <span>Your message has been successfully sent.</span> : null} 
                                </div>
                            </Form>
                        </div>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default FormEmail;
