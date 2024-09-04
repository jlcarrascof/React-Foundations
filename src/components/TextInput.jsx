import { useState, useRef } from "react";
import styles from "./TextInput.module.css";

export default function TextInput({placeholder = "What's happening ... ", maxLength, ...props}) {

    const [text, setText] = useState('');
    const inputElement = useRef();

    function onTextChange(event) {
        const text = event.target.value
        if (text.length <= maxLength) {
            setText(text)
        }
    }

    return (
        <div>
            <textarea
                ref={inputElement}
                className={styles.input}
                placeholder={placeholder}
                maxLength={maxLength}
                defaultValue={10}
                onChange={onTextChange}
                 {...props} />
            <p>{text.length} / {maxLength}</p>
            <button onClick={() => inputElement.current.defaultValue}>Test</button>
        </div>
    )
}
