export default function Button(props:any) {
    const {text, onClick} = props;
    return (
        <>
            <button onClick={onClick}><p>{text}</p></button>
        </>
    )
}
