import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {

    if(!profile){
        return <Preloader />
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} />
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div>
                    <h3>{profile.aboutMe}</h3>
                    <h5>{profile.contacts.facebook}</h5>
                    <h5>{profile.contacts.website}</h5>
                    <h5>{profile.contacts.vk}</h5>
                    <h5>{profile.contacts.twitter}</h5>
                    <h5>{profile.contacts.instagram}</h5>
                    <h5>{profile.contacts.youtube}</h5>
                    <h5>{profile.contacts.github}</h5>
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;