let rerenderEntireTree = () => {
    console.log('state was changed')
}
let state = {
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

}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) =>{
    rerenderEntireTree = observer; //observer pattern
}

export default state;