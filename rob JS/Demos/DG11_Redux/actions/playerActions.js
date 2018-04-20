import ReactUnitedPlayerApi from '../api/reactUnitedPlayerApi';
import * as types from './actionTypes';

export function loadSquad() {
  return function(dispatch) {
    return ReactUnitedPlayerApi.getSquad()
      .then(squad => {
        dispatch(loadSquadSuccess(squad))
      })
      .catch(error => { throw(error)});
  };
}

export function loadSquadSuccess(squad) {
  return {
    type: types.LOAD_SQUAD_SUCCESS,
    squad
  }
}
