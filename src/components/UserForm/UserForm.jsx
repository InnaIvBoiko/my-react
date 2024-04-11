import { useId } from 'react';
import css from './UserForm.module.css';

export default function UserForm({ onSubmit }) {
    
    const usernameId = useId();
    const roleId = useId();
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const { elements: { username, role } } = form;
        // onSubmit();
        onSubmit({
            username: username.value,
            role: role.value,
        });
        // console.log(form);
        // console.log(form.elements);
        // console.log(form.elements.role);
        // console.log(form.elements.username.value);
        // console.log(form.elements.role.value);

        form.reset();
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <div className={css.group}>
                <label htmlFor={usernameId}>Username</label>
                <input type='text' name='username' id={usernameId} />
            </div>

            <div className={css.group}>
                <label htmlFor={roleId}>Role</label>
                <select name="role" id={roleId} >
                    <option value='guest'>Guest</option>
                    <option value='user'>User</option>
                    <option value='admin'>Admin</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
    );  
}