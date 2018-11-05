import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';


export const middlewares = [ReduxThunk];
const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore); //standard redux
export default createStoreWithMiddleWare(rootReducer);
