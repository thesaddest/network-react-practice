import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.profileImg}
                     src='https://i.pinimg.com/originals/62/da/92/62da9202c6f93b3e1ac9b5fe9645ece8.png'></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}
export default ProfileInfo;