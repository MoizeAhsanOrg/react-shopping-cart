import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/User';
import CryptoJS from 'crypto-js';
import { secretKey } from '../../constants/config';

interface AuthState {
  user: User | null;
}

const encryptData = (data: string): string => {
  return CryptoJS.AES.encrypt(data, secretKey).toString();
};

const decryptData = (ciphertext: string): string => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};


const initialState: AuthState = {
  user: (() => {
    try {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(decryptData(storedUser)) : null;
    } catch (error) {
      console.error('Failed to parse user data from localStorage:', error);
      return null;
    }
  })(),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      localStorage.setItem('user', encryptData(JSON.stringify(action.payload)));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
