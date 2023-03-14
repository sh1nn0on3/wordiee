import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import boardReducer from "./boardSlice";

export default configureStore({
  reducer: {
    board: boardReducer,
  },
});
