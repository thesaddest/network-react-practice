import styles from "./FormsControls.module.css"
import { WrappedFieldProps} from "redux-form"
import {WrappedFieldMetaProps} from "redux-form"
import React from "react";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
    children: React.ReactNode
}

const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}


export const TextArea: React.FC<WrappedFieldProps> = (props) => {
    //const {input, meta, child, ...restProps} = props
    const {input, meta, ...restProps} = props
    return <FormControl {...props}> <textarea {...input} {...restProps}/></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    //const {input, meta, child, ...restProps} = props
    const {input, meta, ...restProps} = props
    return <FormControl {...props}> <input {...input} {...restProps}/></FormControl>
}