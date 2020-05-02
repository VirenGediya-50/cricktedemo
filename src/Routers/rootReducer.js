import { combineReducers } from 'redux';
import matchReducer from './matchReducer';
import scoreReducer from './scoreReducer';

const rootReducer = combineReducers({
    matchReducer,
    scoreReducer
})

export default rootReducer