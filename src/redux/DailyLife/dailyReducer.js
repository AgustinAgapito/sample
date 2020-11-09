import { GET_DAILY_TOPIC, SEND_DAILY_MESSAGE } from './actionTypes'

export const dailyTitleReducer = (state=['Hang Out'],action) => {
    // copy existing state
    let updateState = [...state]
    switch(action.type){
        case GET_DAILY_TOPIC:
            updateState.push(action.topic) 
            //check if has the same topic if not return state itself
            updateState = updateState.map( i => i)[0] === action.topic ? updateState.splice(0,2) : updateState
            console.log(updateState.splice(0,1))
            return updateState

        default: return state
    }
}

export const dailyMessageReducer = (state=[],action) => {
    let updateState = [...state]
    switch(action.type){
        case SEND_DAILY_MESSAGE:
            let message = action.message
            updateState.push(message)
            console.log(updateState)
            return updateState

        default: return state
    }
}