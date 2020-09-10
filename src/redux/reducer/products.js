import {
    PRODUCT_GET_DATA_SUCCESS
} from "./../types/products";

const initialState = {
  data: []  
};

let reducer = (state = initialState, action) => {
  switch (action.type) {
    //ADD
    case PRODUCT_GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    default:
      break;
  }
  return state;
};

export default reducer;
