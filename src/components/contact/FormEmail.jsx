import React, {useState, useRef} from 'react';
import { Formik, Form } from 'formik'
import emailjs from 'emailjs-com';
import * as Yup from 'yup';

import TextField from './TextField'
import TextArea from './TextArea'
import './FormEmail.scss'

function FormEmail() {

    const [successfully, setSuccessfully] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef();

    const sendEmail = (values, { resetForm }) => {
        setIsSubmitting(true);

        emailjs.sendForm('service_etzsraw', 'template_4yjtndq', formRef.current, 'hsnCaKckbffNbzkne')
        .then((result) => {
            console.log(result.text);
            setSuccessfully(true);
        }, (error) => {
            console.log(error.text);
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    } 

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
            .max(500, 'Must be 500 characters or less')
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
                    onSubmit={sendEmail}
                >
                    {({ isValid, dirty }) => (
                        <div>
                            <h2>Say Hello !</h2>
                            <Form ref={formRef}>
                                <TextField label="full name" name="fullname" type="text" placeholder="full name" />
                                <TextField label="email" name="email" type="email" placeholder="example@gmail.com"/>
                                <TextArea label="message" name="message" type="text" placeholder="message" />
                                <br />

                                <button 
                                    className="btn" 
                                    type="submit" 
                                    disabled={isSubmitting || !(isValid && dirty)}
                                >
                                    {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                                </button>

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
