import { ADD_USER } from "./action";
import {ADD_ORDER, SORT} from './action'
const init = {users: [], orders: []};

export const userReducer = (store = init, { type, payload }) => {
  switch (type) {
      case ADD_USER:
          return {...store,
         users: payload,
        }
    default:
      return store;
  }
};
export const orderReducer = (store = init, { type, payload }) => {
    switch (type) {
        case ADD_ORDER:
            return {...store,
           orders: payload,
          }
          case SORT:
            return {...store,
                orders: [...store.orders].sort((a,b)=>
                a[payload]> b[payload] ?  1 : a[payload]<b[payload] ? -1 : 0),
            } 
      default:
        return store;
    }
  };