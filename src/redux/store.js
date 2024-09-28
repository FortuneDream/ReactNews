import { applyMiddleware, createStore } from "redux";


const store =createStore(reducers,applyMiddleware)

export default store