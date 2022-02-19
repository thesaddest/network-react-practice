import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () =>{
  return (
        <div className={s.posts}>
        <Post message='Hi, how are you?' likeCount="20"/>
        <Post message="It's my first post" likeCount="30"/>
        </div>
  );
}
export default MyPosts;