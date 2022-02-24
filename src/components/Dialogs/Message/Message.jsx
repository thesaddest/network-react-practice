import React from "react";
import s from './Message.module.css';


const Message = (props) => {
    let newMessage = React.createRef();
    let sendMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    return (
        <div className={s.item}>
            <div className={s.message}>{props.message}</div>
        </div>

    );
}


export default Message;