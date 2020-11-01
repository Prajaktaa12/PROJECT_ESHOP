import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import reducers from "./store/store";
import { persistConfig } from "./store/store";
import thunk from "redux-thunk";
import { PersistGate } from "redux-persist/integration/react";
import { persistReducer, persistStore } from "redux-persist";
let persistreducer = persistReducer(persistConfig, reducers);
let composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMOSE_ || compose;
let store = createStore(
  persistreducer,
  composeEnhancer(applyMiddleware(thunk))
);
let persistor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,

  document.getElementById("root")
);
