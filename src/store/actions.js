import * as types from './mutation-types';
import API from '../utils/apiSetting';
import http from '../utils/http';

export const signup = function({ commit }, { payload }) {
  http(API.signup, { payload })
    .then(res => res.data)
    .catch(err => console.log(err));
};

export const login = function({ commit, state }, { payload }) {
  const username = payload.user;
  console.log('>>>>>>>>', payload);
  return http(API.login, payload)
    .then(res => {
      const data = res.data;
      if (data.success) {
        commit(types.LOGIN, username);
      }
      return data;
    })
    .catch(err => console.log(err));
};

export const logout = function({ commit, state }) {
  commit(types.LOGOUT);
};
