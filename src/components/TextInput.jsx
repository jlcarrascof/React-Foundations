import { useState } from "react";
import styles from "./TextInput.module.css";

export default function TextInput({placeholder = "What's happening ... ", maxLength, ...props}) {

    const [counter, setCounter] = useState(0);
    let limLength = 125;

    return (
        <div>
            <textarea className={styles.input} placeholder={placeholder} maxLength={maxLength} {...props} />
            <p>{counter} / {limLength}</p>
            <button onClick={anyFunction()}>Update Counter</button>
        </div>
    )
}
