import { combineReducers } from 'redux'
import { sportTitleReducer, sportMessageReducer } from './Sports/sportReducer'
import { gameTitleReducer, gameMessageReducer } from './Games/gameReducer' 
import { musicTitleReducer,musicMessageReducer } from './Music/musicReducer'
import { dailyTitleReducer, dailyMessageReducer} from './DailyLife/dailyReducer'

const rootReducer = combineReducers({
    sportTitle: sportTitleReducer,
    sportMessage: sportMessageReducer,
    gameTitle: gameTitleReducer,
    gameMessage: gameMessageReducer,
    musicTitle: musicTitleReducer,
    musicMessage: musicMessageReducer,
    dailyTitle: dailyTitleReducer,
    dailyMessage: dailyMessageReducer
})

export default rootReducer