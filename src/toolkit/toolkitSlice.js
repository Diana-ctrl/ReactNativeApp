import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    uid: '',
    firstname: '',
    lastname: '',
    email: '',
  },
  reducers: {
    updateUserData(state, action) {
      state = {...state, ...action.payload};
    },
    clearUserData(state) {
      state = this.initialState;
    },
  },
});
const {actions, reducer} = userSlice;
export default reducer;
export const {updateUserData, clearUserData} = actions;
