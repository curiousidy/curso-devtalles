import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface counterState {
    count:number;
    isReady:boolean;
}
const initialState: counterState = {
    count: 5,
    isReady:false
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initCounterState(state,action: PayloadAction<number>){
      if(state.isReady) return;
      state.count = action.payload;
      state.isReady=true;
    },

    addONe(state){
      state.count++;
    },
    substractONe(state){
      if(state.count === 0) return;
      state.count--;
    },

    resetCount(state, action:PayloadAction<number>){
      if(action.payload < 0) action.payload = 0;
      state.count = action.payload;
    }
  }
});

export const {addONe,substractONe,resetCount,initCounterState} = counterSlice.actions;

export default counterSlice.reducer;