import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import reducer  from './reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['currentUser']
}

const persistedReducer = persistReducer(persistConfig, reducer)
let store = createStore(persistedReducer, applyMiddleware(thunk))
let persistor = persistStore(store)

export default () => {
    return { store, persistor }
}