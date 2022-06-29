import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedState: "N/A",
  goals: 0,
  numberOfGame: 0,
};

const diceApp = createSlice({
  name: "diceapp",
  initialState,
  reducers: {
    getSelectedState: (state, { payload }) => {
      if (payload === "HIGH") {
        state.selectedState = "TÀI";
      } else if (payload === "LOW") state.selectedState = "XỈU";
    },
  },
});

export const { getSelectedState } = diceApp.actions;
export default diceApp.reducer;
