import { GET_MUSIC_TOPIC, SEND_MUSIC_MESSAGE } from './actionTypes'

export const musicTitleReducer = (state=['Rock'],action) => {
    // copy existing state
    let updateState = [...state]
    switch(action.type){
        case GET_MUSIC_TOPIC:
            updateState.push(action.topic) 
            //check if has the same topic if not return state itself
            updateState = updateState.map( i => i)[0] === action.topic ? updateState.splice(0,2) : updateState
            console.log(updateState.splice(0,1))
            return updateState

        default: return state
    }
}

export const musicMessageReducer = (state=[],action) => {
    let updateState = [...state]
    switch(action.type){
        case SEND_MUSIC_MESSAGE:
            let message = action.message
            updateState.push(message)
            return updateState

        default: return state
    }
}