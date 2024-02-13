import { createSlice } from '@reduxjs/toolkit';

// USER 관련
const user = createSlice({
  name: 'user', // 슬라이스의 이름
  initialState: {
     // long  ## pk 
    userId: 0, // string ## user 가 작성하는 id
    userEmail :'',   // 프로필 이미지 ?  
    userPass : '',        // 
    userName : '',
 
  },

  reducers: {
    loginUser: (state, action) => {
    
      state.userId = action.payload.userId;
      state.userEmail = action.payload.userEmail;
      state.userPass = action.payload.userPass;
      state.userName = action.payload.userName; 
    },
    clearUser: (state) => {
      state.userId = 0;
      state.userEmail = '';
      state.userPass = '';
      state.userName = '';
    }
  },
});

export const { loginUser, clearUser } = user.actions;
export default user;