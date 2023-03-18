import { createSlice } from "@reduxjs/toolkit";
import word from "../word.json"
// console.log("🚀 ~ file: boardSlice.ts:3 ~ word:", word.words)

// const wordRandom : any = word.words.map((state) => (
//   console.log(state)
  
// ))

const random = Math.floor(Math.random() * word.words.length)

// console.log(random, word.words[random])

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
  // correctWord : "STATE" , 
  correctWord : `${word.words[random].toUpperCase()}`,
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
