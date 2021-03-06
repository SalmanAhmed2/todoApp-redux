import reducer from './Components/reducer';
import {createStore } from 'redux';

const store = createStore(
    reducer,
)

export default store;