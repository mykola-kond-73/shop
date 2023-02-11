import { ErrorMessage, Field } from 'formik'
import classes from '../../css/form.module.css'

export const Input = ({ touched, errors, name, type,placeholder }) => {
    return (
        <div className={classes.rootField}>
            <div className={`${classes.field} ${errors[name] && touched[name] && classes.fieldError}`} >
                <Field type={type} name={name} placeholder={placeholder} style={{ padding: '5px', width: '250px' }} />
            </div>
            <div className={errors[name] && touched[name] && classes.errorMessage}>
                <ErrorMessage name={name} />
            </div>
        </div>
    )
}

export const Checkbox = ({ touched, errors, name, type,text }) => {
    return (
        <div className={classes.rootField}>
            <Field type={type} name={name} />
            <span className={classes.text}>
                {text}
            </span>
        </div>
    )
}