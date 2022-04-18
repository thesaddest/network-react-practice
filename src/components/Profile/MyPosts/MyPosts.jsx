import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);


    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
}

const AddPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} placeholder={'Напишите, о чем думаете'} name={'newPostText'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'myPostsAddNewPostForm'})(AddPostForm)
export default MyPosts;