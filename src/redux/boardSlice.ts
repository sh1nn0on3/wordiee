import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  board: [
    "" , "" , "" , "" , "" ,
    "" , "" , "" , "" , "" ,
    "" , "" , "" , "" , "" ,
    "" , "" , "" , "" , "" ,
    "" , "" , "" , "" , "" ,
    "" , "" , "" , "" , "" 
  ],
  pos: 0 ,
  row : 0 ,
  correctWord : "STATE" , 
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoard: (state, action) => {
      state.board = action.payload;
    },
    incPos : (state) => {
        state.pos = state.pos + 1 ;
    },
    decPos : (state) => {
        state.pos = state.pos - 1 ;
    },
    incRow : (state) => {
        state.row++
    },
    // corWord : (state) => {

    // }
  },
});

export const { setBoard , incPos , decPos , incRow} = boardSlice.actions;

export default boardSlice.reducer;
