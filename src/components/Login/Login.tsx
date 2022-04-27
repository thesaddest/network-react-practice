import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"
import {AppStateType} from "../../redux/redux-store";

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps>
    = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       validate={[required]} name={'email'} type={'email'} component={Input}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       validate={[required]} name={'password'} type={'password'} component={Input}/>
            </div>
            <div>
                <Field  name={'rememberMe'} type={'checkbox'} component={Input}/> Remember me
            </div>
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && <Field placeholder={'Symbols from image'}
                                  validate={[required]} name={'captcha'} type={'text'} component={Input}/>}
            {error &&
            <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm);

type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: null) => void
}

type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);