export const ADD_USER= "ADD_USER";
export const ADD_ORDER ="ADD_ORDER";
export const SORT = "SORT"


export const addUser=(data)=>{
 return{
    type: ADD_USER,
    payload: data,

 }
   
}
export const addOrder=(data)=>{
    return{
       type: ADD_ORDER,
       payload: data,
   
    }
      
   }
   export const sort =(by) =>{
    return {
        type : SORT,
        payload: by,
    }
}

export const getUser = () => async(dispatch) =>{
    const data = await fetch(" http://localhost:8080/users")
    .then((x)=>x.json());
    dispatch(addUser(data));
}

export const getOrder = () => async(dispatch) =>{
    const data = await fetch(" http://localhost:8080/orders")
    .then((x)=>x.json());
    dispatch(addOrder(data));
}
