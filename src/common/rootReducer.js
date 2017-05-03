import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import homeReducer from '../features/home/redux/reducer';
import sightReducer from '../features/sight/redux/reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    routing: routerReducer,
    home: homeReducer,
    sight: sightReducer,
    form: formReducer,
});

export default rootReducer;
