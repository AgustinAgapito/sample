export const GET_SPORT_TOPIC = 'GET_SPORT_TOPIC'
export const SEND_SPORT_MESSAGE = 'SEND_SPORT_MESSAGE'

export const getSportTopic = (topic) => {
    return{
        type: GET_SPORT_TOPIC,
        topic: topic
    }
}

export const sendSportMessage = (message) => {
    return{
        type: SEND_SPORT_MESSAGE,
        message: message
    }
}

