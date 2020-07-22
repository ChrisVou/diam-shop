import { UserActionTypes } from './user.type';

const INITIAL_STATE = {
  currentUser: null
};

// Exoume tin function userReducer opou to state einai kati pou to redux store
// pernaei se afton ton userReducer opote mia action fired, kai i state tha einai 
// oti i state einai afti tin stigmi otan i action get fired
// Ftiaxnoume tin INITIAL_STATE gia na exei kati meesa to state kai na to xrisimopoiisi
// tin prwti fora pou tha ginei fired. To currentUser: null to pirame apo to App.js pou itan mesa 
// ston constructor() -> this.state afou tha adikataqstisoume ton constructor() sto App.js
// to state = INITIAL_STATE legete default parameter value inside a function
const userReducer = (state = INITIAL_STATE, action) => {
  //To action.type tha einai ena string value
  switch (action.type) {
    //Otan to action.type einai to string 'SET_CURRENT_USER' tha mas epistrefei
    // ena kainourgio object pou tha einai oti iparxei mesa sto state
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
      //San default epistrefei panda to state mas pou einai currentUser: null stin sigekrimeni periptwsi
    default:
      return state;
  }
};

export default userReducer;