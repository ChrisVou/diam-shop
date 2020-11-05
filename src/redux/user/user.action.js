import { UserActionTypes } from './user.type';

/* Edw dimiourgoume tin user action function
panda prepei na thimomaste oti sto type: vazoume to string pou perimenei
i case mesa stin switch mas vlepe user.reducer.js */
export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});