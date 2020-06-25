// import { createContact } from "../Actions";

import { CREATE_CONTACT } from "../ActionTypes";

let reducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return [...state, Object.assign({}, action.payload)];
    default:
      return state;
  }
};

export default reducer;
