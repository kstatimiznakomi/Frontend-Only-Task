import {configureStore, createSlice} from "@reduxjs/toolkit";

const stageSlice = createSlice({
    name: "stage",
    initialState: {
        prevStage: 2,
        stage: 4,
    },
    reducers: {
        set: (state, action) => {
            state.prevStage = state.stage;
            state.stage = action.payload;
        },
    },
});

export const {set} = stageSlice.actions;
export type RootState = ReturnType<typeof stageStore.getState>;
export type AppDispatch = typeof stageStore.dispatch;

export const stageStore = configureStore({
    reducer: {stager: stageSlice.reducer},
});