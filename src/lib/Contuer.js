import { createSlice } from "@reduxjs/toolkit";

//-------------1
const initialState = {
  value: 0,
};

const contuerSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    icremnt: (state) => {
      state.value += 1;
    },
    decremint: (state) => {
      state.value -= 1;
    },
    incremintbyactiobe :(state ,action)=>{
     state.value += action.payload
    }
  },
});

export const {icremnt ,decremint ,incremintbyactiobe} = contuerSlice.actions
export default contuerSlice.reducer;



// import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// interface CounterState {
//   value: number;
// }

// const initialState: CounterState = {
//   value: 0,
// };
// const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state, action: PayloadAction<number>) => {
//       state.value += action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(incrementAsync.pending, () => {
//         console.log("incrementAsync.pending");
//       })
//       .addCase(
//         incrementAsync.fulfilled,
//         (state, action: PayloadAction<number>) => {
//           state.value += action.payload;
//         }
//       );
//   },
// });

// export const incrementAsync = createAsyncThunk(
//   "counter/incrementAsync",
//   async (amount: number) => {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     return amount;
//   }
// );

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export default counterSlice.reducer;