import css from './Form.module.css';

export default function Form({onAdd}) {

    const handleSubmit = event => {
        event.preventDefault();
        onAdd({
            id: Date.now(),
            text: event.target.elements.text.value,
        })
        event.target.reset();
    }

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input type="text" name="text" />
            <button type="submit">Add task</button>
        </form>
    );
}