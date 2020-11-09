export const GET_GAME_TOPIC = 'GET_GAME_TOPIC'
export const SEND_GAME_MESSAGE = 'SEND_GAME_MESSAGE'

export const getGameTopic = (topic) => {
    return{
        type: GET_GAME_TOPIC,
        topic: topic
    }
}

export const sendGameMessage = (message) => {
    return{
        type: SEND_GAME_MESSAGE,
        message: message
    }
}

