import React from "react";
import s from "./Post.module.css";
const Post = (props) =>{
  return (
  <div className={s.item}>
    <img src="https://i.pinimg.com/474x/32/3d/4c/323d4c7917cff0987eecbbf7068ddaee.jpg"></img>
    {props.message}
    <div>
      <span>like {props.likesCount}</span>
    </div>
  </div>
  );
}
export default Post;