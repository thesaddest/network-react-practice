import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
    ]
}

it('message of post should be correct', () => {
    // 1. Starting data for test
    let action = addPostActionCreator('ItKamasutra.com');
    //2. Test action
    let newState = profileReducer(state, action);
    //3. Test expectation
    expect (newState.posts[2].message).toBe('ItKamasutra.com');
});

it('length of post should be incremented', () => {
    // 1. Starting data for test
    let action = addPostActionCreator('ItKamasutra.com');
    //2. Test action
    let newState = profileReducer(state, action);
    //3. Test expectation
    expect (newState.posts.length).toBe(3);
});

it('length after deleting should be decremented', () => {
    // 1. Starting data for test
    let action = deletePost(1);
    //2. Test action
    let newState = profileReducer(state, action);
    //3. Test expectation
    expect (newState.posts.length).toBe(1);
});
it('length after deleting should not be decremented if id is not correct', () => {
    // 1. Starting data for test
    let action = deletePost(1000);
    //2. Test action
    let newState = profileReducer(state, action);
    //3. Test expectation
    expect (newState.posts.length).toBe(2);
});