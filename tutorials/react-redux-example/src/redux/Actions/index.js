import { CREATE_CONTACT } from "../ActionTypes";

export let createContact = (contact) => {
  return {
    type: CREATE_CONTACT,
    payload: contact,
  };
};
