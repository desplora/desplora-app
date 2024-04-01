import memoriaReducer from "./features/memoriaSlice";
import { configureStore } from "@reduxjs/toolkit";
import { destinosApi } from "./services/desploraApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        memoriaReducer,
        [destinosApi.reducerPath]: destinosApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([destinosApi.middleware]),
});

setupListeners(store.dispatch);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch