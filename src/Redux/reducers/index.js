import { combineReducers } from 'redux';
import auth from './Auth';

const appReducer = combineReducers({
    auth,
});

const initialState = appReducer({}, {})

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        state = initialState
    }

    return appReducer(state, action)
}

export default rootReducer;