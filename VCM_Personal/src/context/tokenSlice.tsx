import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  token: string;
}
const initialState: UserState = {
  token: 'adr',
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken(state: UserState, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});

export const {setToken} = tokenSlice.actions;
export default tokenSlice.reducer;
