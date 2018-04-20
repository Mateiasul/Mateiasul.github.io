import * as types from '../actions/actionTypes';

import initialState from './initialState';

export default function squadReducer(state = initialState.squad, action) {
    switch(action.type) {
        case types.LOAD_SQUAD_SUCCESS:
            return action.squad
        default:
            return state;
    }
}