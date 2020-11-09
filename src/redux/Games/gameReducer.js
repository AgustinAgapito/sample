import { GET_GAME_TOPIC, SEND_GAME_MESSAGE } from './actionTypes'

export const gameTitleReducer = (state=['Genshin Impact'],action) => {
    // copy existing state
    let updateState = [...state]
    switch(action.type){
        case GET_GAME_TOPIC:
            updateState.push(action.topic) 
            //check if has the same topic if not return state itself
            updateState = updateState.map( i => i)[0] === action.topic ? updateState.splice(0,2) : updateState
            console.log(updateState.splice(0,1))
            return updateState

        default: return state
    }
}

export const gameMessageReducer = (state=[],action) => {
    let updateState = [...state]
    switch(action.type){
        case SEND_GAME_MESSAGE:
            let message = action.message
            updateState.push(message)
            return updateState

        default: return state
    }
}