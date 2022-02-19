import React from 'react'
import { ErrorMessage, useField } from 'formik'

import './TextField.scss'

function TextField({ label, ...props }) {
    const [field, meta] = useField(props)
    return (

        <div className="input-field">
            <label htmlFor={field.name}> {label} </label><br/>
            <input className={` ${meta.touched && meta.error && 'inputInvalid'}`} {...field} {...props} required/>
            <ErrorMessage className='ErrorMessage' component="div" name={field.name} />
        </div>
    )
}

export default TextField;
