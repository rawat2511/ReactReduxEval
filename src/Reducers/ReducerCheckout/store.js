import { createStore } from "redux";
import { reducer } from "./reducer";


export const checkoutStore = createStore( reducer, [] );