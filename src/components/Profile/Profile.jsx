import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
const Profile = () =>{
  return (
    <div>
      <div>
      <img className={s.profileImg} src='https://i.pinimg.com/originals/62/da/92/62da9202c6f93b3e1ac9b5fe9645ece8.png'></img>
      </div>
        <div className={s.item}>
        ava + description
        </div>
      <MyPosts />
    </div>
  );
}
export default Profile;