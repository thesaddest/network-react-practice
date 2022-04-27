import {InferActionsTypes} from "./redux-store";

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Wassup'}
    ] as Array<MessageType>,
    dialogs: [
        {id: 1, name: 'Rutim'},
        {id: 2, name: 'Temych'},
        {id: 3, name: 'Nikitka'}
    ] as Array<DialogType>
};


const dialogsReducer = (state = initialState, action: AtionsType): InitialStateType => {
    switch (action.type) {
        case 'thesaddest-network/dialogs/SEND-MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}


export const actions = {
    sendMessageCreator: (newMessageBody: string) => ({type: 'thesaddest-network/dialogs/SEND-MESSAGE', newMessageBody} as const)

}

export default dialogsReducer;

export type InitialStateType = typeof initialState
type AtionsType = InferActionsTypes<typeof actions>