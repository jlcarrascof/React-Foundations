import { useState } from "react";
import styles from "./TextInput.module.css";

export default function TextInput({placeholder = "What's happening ... ", maxLength, ...props}) {

    const [text, setText] = useState('');

    return (
        <div>
            <textarea className={styles.input} placeholder={placeholder} maxLength={maxLength}
            value={text} onChange={onTextChange} {...props} />
            <p>{text.length} / {maxLength}</p>
        </div>
    )
}
