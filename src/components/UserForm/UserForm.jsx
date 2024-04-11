import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./UserForm.module.css";
import { useId } from "react";

const UserSchema = Yup.object().shape({
    username: Yup.string()
        .trim()
        .min(3, "Min 3 chars!!!")
        .required("Is required!!!"),
    email: Yup.string()
        .trim()
        .email("Must be a valid email!")
        .required("Is required!!!"),
    role: Yup.string()
        .oneOf(["guest", "user", "admin"])
        .required("Is required!!!"),
    comment: Yup.string().trim().max(256, "Max 256 chars!!!").required("Is required!!!"),
    // checked: Yup.string().oneOf(['one', 'two', 'three']).required('Is required!!!'),
});

export default function UserForm({ onAdd }) {
    const usernameId = useId();
    const emailId = useId();
    const roleId = useId();
    const commentId = useId();

    const handleSubmit = (values, actions) => {
        // console.log(handleSubmit);    
        // console.log(values);    
        onAdd(values);
        actions.resetForm();
    };

    return (
        <Formik initialValues={{
            username: '',
            email: '',
            role: 'user',
            comment: 'Default comment value',
            picked: '',
            toggle: true,
            checked: [],
        }}
            validationSchema={UserSchema}
            onSubmit={handleSubmit}>
            <Form className={css.form}>
                <div className={css.group}>
                    <label htmlFor="usernameId">Username</label>
                    <Field type='text' name='username' id={usernameId} />
                    <ErrorMessage className={css.error} name='username' component='span' />
                    {/* <input type="text" name="username" required /> */}
                </div>

                <div className={css.group}>
                    <label htmlFor="emailId">Email</label>
                    <Field type='email' name='email' id={emailId} />
                    <ErrorMessage className={css.error} name='email' component='span' />
                    {/* <input type="email" name="email" required /> */}
                </div>

                <div className={css.group}>
                    <label htmlFor="roleId">Role:</label>
                    <Field as='select' name='role' id={roleId} >
                        <option value="guest">Guest</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </Field>
                    <ErrorMessage className={css.error} name="role" component='span' />
                    {/* <select name="role" id="">
                    <option value="guest">Guest</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select> */}
                </div>

                <div className={css.group}>
                    <label htmlFor="commentId">Comment</label>
                    <Field as="textarea" name="comment" id={commentId} />
                    <ErrorMessage className={css.error} name="comment" component='span' />
                    {/* <textarea name="comment" id="" cols="30" rows="10"></textarea> */}
                </div>

                <div className={css.group}>
                    <label>
                        <Field type="radio" name="picked" value="One" />
                        One
                    </label>
                    <label>
                        <Field type="radio" name="picked" value="Two" />
                        Two
                    </label>
                </div>

                <div className={css.group}>
                    <label>
                        <Field type="checkbox" name="toggle" />
                        I agree
                    </label>
                </div>
                
                <div className={css.group}>
                    <label>
                        <Field type="checkbox" name="checked" value="one" />
                        One
                    </label>
                    <label>
                        <Field type="checkbox" name="checked" value="two" />
                        Two
                    </label>
                    <label>
                        <Field type="checkbox" name="checked" value="three" />
                        Three
                    </label>
                </div>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
}