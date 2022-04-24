import React from "react";
import {Input, TextArea} from "../../../common/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";
import s from "./ProfileInfo.module.css";
import style from "../../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error &&
        <div className={style.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b>Full Name:</b>
            <Field placeholder={'Full Name'}
                   name={'fullName'}
                   type={'text'}
                   component={Input}
            validate={[]}/>
        </div>
        <div>
            <b>Looking for a job?:</b>
            <Field name={'lookingForAJob'}
                   type={'checkbox'}
                   component={Input}
                   validate={[]}/>

        </div>
        <div>
            <b>My skills:</b>
            <Field placeholder={'my Professional skills'}
                   name={'lookingForAJobDescription'}
                   type={'text'}
                   component={TextArea}
                   validate={[]}/>
        </div>
        <div>
            <b>About me:</b>
            <Field placeholder={'Tell the world about you'}
                   name={'aboutMe'}
                   type={'text'}
                   component={TextArea}
                   validate={[]}/>
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}: <Field placeholder={key}
                                 name={'contacts.' + key}
                                 type={'text'}
                                 component={TextArea}
                                 validate={[]}/></b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataReduxForm