import * as actionTypes from './actionTypes';
import RequestStates from '../../utils/request-states';

const INITIAL_STATE = {
  text: '',

  usersLoading: RequestStates.init,
  users: [],
  usersPageNo: 1,
  usersPageSize: 5,
  usersError: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case actionTypes.GET_USERS_LOADING:
      return {
        ...state,
        usersLoading: RequestStates.loading,
        usersError: null,
      };
    case actionTypes.GET_USERS_SUCCESS: {
      return {
        ...state,
        usersLoading: RequestStates.success,
        users: action.payload.data.data,
        usersPageNo: action.payload.data.page,
        usersPageSize: action.payload.data.per_page,
        usersError: null,
      };
    }
    case actionTypes.GET_USERS_ERROR:
      return {
        ...state,
        usersLoading: RequestStates.error,
        usersError: action.payload,
      };
    default:
      return state;
  }
};
