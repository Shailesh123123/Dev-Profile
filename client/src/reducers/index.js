import { combineReducers } from 'redux';
import  authReducer  from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';



//register all your reducers here to combine them in the combineReducers
export default combineReducers({

auth: authReducer,
errors: errorReducer,
profile: profileReducer,
post: postReducer

});
