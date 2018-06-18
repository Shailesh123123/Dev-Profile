import isEmpty from '../validation/is-empty';


import { SET_CURRENT_USER } from '../actions/types';


const initialState = {

isAuthenticated: false,
user: {}


}

export default function(state = initialState, action) {

switch(action.type){
case  SET_CURRENT_USER:
return {

...state,
isAuthenticated: !isEmpty(action.payload), //if it is filled with the decoded user, we should be authenticated, else we shouldn't be
user: action.payload//(once you have logged out, this sets isAuthenticated to false)

}
default:

return state;

}


}
