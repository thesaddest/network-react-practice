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
            <img src="https://i.pinimg.com/474x/32/3d/4c/323d4c7917cff0987eecbbf7068ddaee.jpg"></img>
            <div className={s.message}>{props.message}</div>
            <div>
                <textarea ref={newMessage}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Send Message</button>
            </div>
        </div>

    );
}


export default Message;