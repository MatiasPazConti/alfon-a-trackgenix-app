import {
  GET_PROJECTS_PENDING,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR
  // PUT_PROJECTS_PENDING,
  // PUT_PROJECTS_SUCCESS,
  // PUT_PROJECTS_ERROR,
  // POST_PROJECTS_PENDING,
  // POST_PROJECTS_SUCCESS,
  // POST_PROJECTS_ERROR,
  // DELETE_PROJECTS_PENDING,
  // DELETE_PROJECTS_SUCCESS,
  // DELETE_PROJECTS_ERROR
} from './constants';

const INITIAL_STATE = {
  list: [],
  isFetching: false,
  error: false
};

const projectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PROJECTS_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload
      };
    case GET_PROJECTS_ERROR:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default projectsReducer;
