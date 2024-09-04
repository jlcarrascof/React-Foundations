import { useState } from "react";
import styles from "./TextInput.module.css";

export default function TextInput({placeholder = "What's happening ... ", maxLength, ...props}) {

    const [text, setText] = useState('');
    const [tweetList, setTweetList] = useState(['Whats up, buddy?', 'How is going your day?']);]

    function onTextChange(event) {
        const text = event.target.value
        if (text.length <= maxLength) {
            setText(text)
        }
    }

    function sendTweet(event) {
        event.preventDefault();
        console.log({text});
    }

    return (
        <div>
            <textarea
                className={styles.input}
                placeholder={placeholder}
                maxLength={maxLength}
                value={text}
                onChange={onTextChange}
                 {...props} />
            <p>{text.length} / {maxLength}</p>
            <button onClick={sendTweet}>Send</button>
        </div>
    )
}
