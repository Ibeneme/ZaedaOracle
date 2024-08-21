import { configureStore, combineReducers } from "@reduxjs/toolkit";
import waitingListReducer from "./Waiting/waitingList";
import adminInterfaceReducer from "./Admin/Admin";
import userSliceReducer from "./Admin/User";

const rootReducer = combineReducers({
  waitingList: waitingListReducer,
  adminInterface: adminInterfaceReducer,
  userSlice: userSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
