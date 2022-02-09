// import { addTodo,remove,deleteTodo } from "../actions";


var data = {
    isPhone:true,
    Auth:false,
    user:{activated:false}
};
  
  export const iR = (state=data, action) => {
  
      switch(action.type){
          case "TOGGLE": 
            const toggle=!state.isPhone;
            return {...state,isPhone:toggle}
          case "SET_AUTH":
            return {...state,Auth:true}
          case "SET_OTPSENDER": 
            const sender=`+91${action.sender}`;
            return {...state,Sender:sender}
          case "SET_USER": 
            const user=action.user;
            return {...state,user}
          case "LOGOUT_USER": 
           const Luser={activated:false}
            return {...state,user:Luser,Auth:false}
          default: return state;
      }
  };
  