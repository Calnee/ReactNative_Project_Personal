import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  token: string;
  contact_name: string;
}
const initialState: UserState = {
  token: 'adr',
  contact_name:'empty',
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken(state: UserState, action: PayloadAction<string>) {
      state.token = action.payload;
    },

    setContactName(state: UserState, action: PayloadAction<string>){
      state.contact_name = action.payload;
    }
  },
});

export const {setToken, setContactName} = tokenSlice.actions;
export default tokenSlice.reducer;
