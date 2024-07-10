export default function TextInput(props) {
    return (
        <div>
            <textarea placeholder={props.placeholder} maxLength={props.maxLength} />
        </div>
    )
}
