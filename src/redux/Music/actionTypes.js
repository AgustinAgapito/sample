export const GET_MUSIC_TOPIC = 'GET_MUSIC_TOPIC'
export const SEND_MUSIC_MESSAGE = 'SEND_MUSIC_MESSAGE'

export const getMusicTopic = (topic) => {
    return{
        type: GET_MUSIC_TOPIC,
        topic: topic
    }
}

export const sendMusicMessage = (message) => {
    return{
        type: SEND_MUSIC_MESSAGE,
        message: message
    }
}

