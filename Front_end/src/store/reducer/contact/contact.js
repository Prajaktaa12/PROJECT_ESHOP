import {
    LOADING,
    USER_CONTACT,
    ERROR_DATA,
  } from "../../actions/contact/contacttype";
  
  export const ContactReducer = (state = {}, action) => {
    switch (action.type) {
      case LOADING:
        return { loading: true };
      case USER_CONTACT:
        return { data: action.payload, loading: false };
      case ERROR_DATA:
        return { data: action.payload, loading: false };
      default:
        return state;
    }
  };
 export default ContactReducer;