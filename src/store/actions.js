import * as types from './mutation-types';
import API from '../utils/apiSetting';
import http from '../utils/http';

/*-----登录-----*/
export function Signup({ commit }, payload) {
  return http(API.signup, payload)
    .then(res => res.data)
    .catch(err => console.log(err));
}

export function Login({ commit }, payload) {
  const username = payload.user;
  return http(API.login, payload)
    .then(res => res.data)
    .catch(err => console.log(err));
}

/*----主页------*/
