import React from "react";
import s from './Dialogs.module.css'

const Dialogs = (props) =>{
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsIitems}>
                <div className={s.dialog + ' ' + s.active}>
                    Rutim
                </div>
                <div className={s.dialog}>
                    Temych
                </div>
                <div className={s.dialog}>
                    Nikitka
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>Wassup</div>
            </div>
        </div>
    );
}

export default Dialogs;