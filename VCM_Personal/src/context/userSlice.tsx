import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  isLoggedIn: boolean;
  fullName?: string;
  email?: string;
  totalContacts?: string;
  totalAcceptedCards?: string;
  totalPendingCards?: string;
}
const initialState: UserState = {
  isLoggedIn: false,
  fullName: '',
  email: '',
  totalContacts: '',
  totalAcceptedCards: '',
  totalPendingCards: '',
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin(state: {isLoggedIn: any}, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },

    setFullName(state: UserState, action: PayloadAction<string>) {
      state.fullName = action.payload;
    },

    setEmail(state: UserState, action: PayloadAction<string>) {
      state.email = action.payload;
    },

    setTotalContacts(state: UserState, action: PayloadAction<string>) {
      state.totalContacts = action.payload;
    },

    setTotalAcceptedCards(state: UserState, action: PayloadAction<string>) {
      state.totalAcceptedCards = action.payload;
    },

    setTotalPendingCards(state: UserState, action: PayloadAction<string>) {
      state.totalPendingCards = action.payload;
    },
  },
});

export const {
  userLogin,
  setFullName,
  setEmail,
  setTotalAcceptedCards,
  setTotalContacts,
  setTotalPendingCards,
} = userSlice.actions;
export default userSlice.reducer;
