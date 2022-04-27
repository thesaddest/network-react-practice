import {getAuthUserData} from "./auth-reducer";
import {InferActionsTypes} from "./redux-store";


let initialState = {
    initialized: false
}

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>

const appReducer = (state= initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'thesaddest-network/app/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const actions = {
    initializedSuccess: () => ({type: 'thesaddest-network/app/INITIALIZED_SUCCESS'} as const)
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => {
            dispatch(actions.initializedSuccess());
        })
}

export default appReducer;