import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img className={s.profileImg}
                     src='https://i.pinimg.com/originals/62/da/92/62da9202c6f93b3e1ac9b5fe9645ece8.png'></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>
                    <h3>{props.profile.aboutMe}</h3>
                    <h5>{props.profile.contacts.facebook}</h5>
                    <h5>{props.profile.contacts.website}</h5>
                    <h5>{props.profile.contacts.vk}</h5>
                    <h5>{props.profile.contacts.twitter}</h5>
                    <h5>{props.profile.contacts.instagram}</h5>
                    <h5>{props.profile.contacts.youtube}</h5>
                    <h5>{props.profile.contacts.github}</h5>
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;