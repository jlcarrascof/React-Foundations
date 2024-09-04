import { useState } from "react";
import styles from "./TextInput.module.css";

export default function TextInput({placeholder = "What's happening ... ", maxLength, ...props}) {

    const [text, setText] = useState('');

    function onTextChange(event) {
        const text = event.target.value
        if (text.length <= maxLength) {
            setText(text)
        }
    }

    return (
        <form onSubmit={sendTweet}>
            <textarea
                className={styles.input}
                placeholder={placeholder}
                maxLength={maxLength}
                value={text}
                onChange={onTextChange}
                 {...props} />
            <p>{text.length} / {maxLength}</p>
            <button type={'submit'}>Send</button>
        </form>
    )
}
