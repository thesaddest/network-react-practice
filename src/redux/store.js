import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
            ],
            newMessageBody: ''
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.profilePage, action);

        this._callSubscriber(this._state);
    }
}




window.store = store;

export default store;