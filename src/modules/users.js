import data from "../data/constants";

export const ADD_PERSON = "users/ADD";
export const SEARCH = "users/SEARCH";
export const CHANGE_NAME = "users/CHANGE_NAME";
export const CHANGE_EMAIL = "users/CHANGE_EMAIL";

const initialState = {
  data,
  filteredResults: data,
  filter: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        filteredResults: state.data.filter(person =>
          person.first_name.includes(action.payload)
        ),
        filter: action.payload
      };
    case CHANGE_NAME:
      return {
        ...state,
        firstName: action.payload
      };
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    case ADD_PERSON:
      const newPerson = {
        first_name: state.firstName,
        email: state.email
      };
      return {
        ...state,
        first_name: "",
        email: "",
        data: [...state.data, newPerson],
        filteredResults: [...state.data, newPerson]
      };
    default:
      return state;
  }
};

export const search = e => {
  return dispatch => {
    dispatch({
      type: SEARCH,
      payload: e.target.value
    });
  };
};

export const addNew = () => {
  return dispatch => {
    dispatch({
      type: ADD_PERSON
    });
  };
};

export const changeName = e => {
  return dispatch => {
    dispatch({
      type: CHANGE_NAME,
      payload: e.target.value
    });
  };
};

export const changeEmail = e => {
  return dispatch => {
    dispatch({
      type: CHANGE_EMAIL,
      payload: e.target.value
    });
  };
};
