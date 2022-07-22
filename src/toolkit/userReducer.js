import {createReducer, createAction} from '@reduxjs/toolkit';

const initiallState = {
  uid: '',
  email: '',
  firstname: '',
  lastname: '',
};

const updateUserData = createAction('UPDATE_USER_DATA');
const clearUserData = createAction('CLEAR_USER_DATA');

export default userReducer = (initiallState, {
  [updateUserData]: function (state) {
    [...]
  },
  [clearUserData]: function (state) {

  }}
  );
