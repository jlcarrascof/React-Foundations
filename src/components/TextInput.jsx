export default function TextInput({placeholder = "What's happening ... ", maxLength, ...props}) {
    return (
        <div>
            <textarea placeholder={placeholder} maxLength={maxLength} {...props} />
        </div>
    )
}
