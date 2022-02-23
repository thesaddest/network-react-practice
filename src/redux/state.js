import {act} from "react-dom/test-utils";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
            ],
            newPostText: 'new post text'
        },
        dialogsPage:{
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Wassup'}
            ],
            dialogs: [
                {id: 1, name: 'Rutim'},
                {id: 2, name: 'Temych'},
                {id: 3, name: 'Nikitka'}
            ]
        },
        sidebar:{
            friends:[
                {id: 1, name: 'Rutim'},
                {id: 2, name: 'Temych'},
                {id: 3, name: 'Nikitka'}
            ]
        }
    },
    _callSubscriber () {
        console.log('state was changed')
    },

    getState(){
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer; //observer pattern
    },

    dispatch(action) {
        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ''){

        }
    }
}




window.store = store;

export default store;