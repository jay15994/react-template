import * as actionTypes from './actionTypes';
import api from '../../utils/api';

export const setText = (text) => ({
  type: actionTypes.SET_TEXT,
  payload: text,
});

export const getUsers = (pageNo = 1, pageSize = 5) => ({
  type: actionTypes.GET_USERS,
  payload: api.get(`/users?page=${pageNo}&per_page=${pageSize}`),
});
