import { useState } from "react";
import styles from "./TextInput.module.css";

export default function TextInput({placeholder = "What's happening ... ", maxLength, ...props}) {

    const [text, setText] = useState('');
    const [tweetList, setTweetList] = useState([]);

    function onTextChange(event) {
        const text = event.target.value
        if (text.length <= maxLength) {
            setText(text)
        }
    }

    function sendTweet() {
        setTweetList([...tweetList, text]);
        setText('');
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
            {tweetList.map(tweet => {
                return(
                    <p>{tweet}</p>
                )
            })}
        </div>
    )
}
