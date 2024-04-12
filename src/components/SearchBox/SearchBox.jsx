// import css from './SearchBox.module.css';

export default function SearchBox({value, onFilter}) {
    return (
        <>
            <p>Find contacts by name</p>
            <input type="text" value={value} onChange={(event)=> onFilter(event.target.value)} />
        </>
    );
}