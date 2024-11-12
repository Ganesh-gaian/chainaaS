import { configureStore } from "@reduxjs/toolkit";
import chainReducer from "./slice/chainSlice";
import countReducer from "./slice/countSlice";

// Configuring the store
export const store = configureStore({
    reducer: {
        chains: chainReducer,
        count:countReducer
    },
});

// Exporting RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
