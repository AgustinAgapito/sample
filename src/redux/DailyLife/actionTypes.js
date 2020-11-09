export const GET_DAILY_TOPIC = 'GET_DAILY_TOPIC'
export const SEND_DAILY_MESSAGE = 'SEND_DAILY_MESSAGE'

export const getDailyTopic = (topic) => {
    return{
        type: GET_DAILY_TOPIC,
        topic: topic
    }
}

export const sendDailyMessage = (message) => {
    return{
        type: SEND_DAILY_MESSAGE,
        message: message
    }
}

