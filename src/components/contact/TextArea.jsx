import React from 'react'
import { ErrorMessage, useField } from 'formik'

import './TextField.scss'

function TextArea({ label, ...props }) {
    const [field, meta] = useField(props)
    return (
        <>
            <div className="input-field">
                <label> {label} </label> <br/>
                <textarea className={` ${meta.touched && meta.error && 'inputInvalid'}`} 
                    {...field} {...props}
                    required
                />
                <ErrorMessage className="ErrorMessage" component="div" name={field.name} />
            </div>
        </>
    )
}

export default TextArea;
