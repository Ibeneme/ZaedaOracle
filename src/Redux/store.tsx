import { configureStore, combineReducers } from "@reduxjs/toolkit";
import adminReducer from "./Admin/Admin";
import legalInsightsReducer from "./Admin/legalInsightsSlice";
import newsInsightsReducer from "./Admin/newsInsightsSlice";
import contactReducer from "./Admin/contactUs";

const rootReducer = combineReducers({
  admin: adminReducer,
  legalInsights: legalInsightsReducer,
  newsInsights: newsInsightsReducer,
  contact: contactReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
