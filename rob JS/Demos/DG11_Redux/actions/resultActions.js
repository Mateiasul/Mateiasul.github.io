import ReactUnitedResultsApi from '../api/reactUnitedResultsApi';
import * as types from './actionTypes';

export function loadResults() {
  return function(dispatch) {
    return ReactUnitedResultsApi.getResults()
      .then(results => {
        dispatch(loadResultsSuccess(results))
      })
      .catch(error => { throw(error)});
  };
}

export function loadResultsSuccess(results) {
  return {
    type: types.LOAD_RESULTS_SUCCESS,
    results
  }
}