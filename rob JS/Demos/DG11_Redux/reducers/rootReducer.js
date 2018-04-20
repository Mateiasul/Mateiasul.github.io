import { combineReducers } from 'redux';

import squad from './squadReducer';
import results from './resultsReducer';

const rootReducer = combineReducers({ squad, results });

export default rootReducer;
