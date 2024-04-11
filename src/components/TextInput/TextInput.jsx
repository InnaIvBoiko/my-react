
import css from './TextInput.module.css';

export default function TextInput({value, onChange}) {
    return (
        <div className={css.wrapper}>
            <span>Text input</span>
            <input type="text" value={value} onChange={(event)=>onChange(event.target.value)}/>
        </div>
    );
}