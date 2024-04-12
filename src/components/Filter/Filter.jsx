import css from './Filter.module.css';
export default function Filter({value, onFilter}) {
    return (
        <>
            <p className={css.label}>Search by name</p>
            <input
                className={css.input}
                type="text"
                value={value}
                onChange={event => onFilter(event.target.value)}
            />
        </>
    );
}