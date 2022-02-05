// import { addTodo,remove,deleteTodo } from "../actions";

var data = {
    isPhone:true
};
  
  export const iR = (state=data, action) => {
  
      switch(action.type){
        //   case "ADD_TODO":
        //       const {data,id}=action.data;
        //       console.log(action.data);
        //       return {
        //           ...state,
        //           data:[...state.data,{note:data,id:id}]
        //       }
          case "TOGGLE": 
            const toggle=!state.isPhone;
            return {...state,isPhone:toggle}
          default: return state;
      }
  };
  