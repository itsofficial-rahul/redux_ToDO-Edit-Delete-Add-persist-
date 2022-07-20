import { legacy_createStore, applyMiddleware } from "redux";
import { rootReducer } from "../rootReducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

// export const store = legacy_createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(logger))
// );
//
const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export let store = legacy_createStore(persistedReducer);
export let persistor = persistStore(store);
