let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
        ]
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

export default state;