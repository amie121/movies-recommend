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
function processArr(arr) {
  const oldArr = arr.slice();
  const newArr = [];
  for (let i = 0; oldArr.length > 0; i++) {
    newArr.push(oldArr.splice(0, 5));
  }
  return newArr;
}

export function getMovies({ state, commit }) {
  const query = {
    start: 0,
    count: 20
  };
  http(API.in_theathers, query)
    .then(res => {
      const dataArr = res.data.subjects;
      const data = processArr(dataArr);
      commit(types.SET_INTHEATERS, data);
    })
    .catch(err => console.log(err));

  http(API.coming_soon, query)
    .then(res => {
      const dataArr = res.data.subjects;
      const data = processArr(dataArr);
      commit(types.SET_COMINGSOON, data);
    })
    .catch(err => console.log(err));

  http(API.top250, query)
    .then(res => {
      const dataArr = res.data.subjects;
      const data = processArr(dataArr);
      commit(types.SET_TOP250, data);
    })
    .catch(err => console.log(err));
}

export function getTop250({ state, commit }, page = 1) {
  commit(types.CLEAR_MOVIEGRID);
  const query = {
    start: (page - 1) * 20,
    count: 20
  };
  http(API.top250, query)
    .then(res => {
      commit(types.SET_MOVIEGRID, res.data);
    })
    .catch(err => console.log(err));
}

export function getMovieDetail({ state, commit }, movieId) {
  const request = {
    url: '/movie/subject/' + movieId,
    method: 'get'
  };
  http(request)
    .then(res => {
      commit(types.SET_DETAIL, res.data);
    })
    .catch(err => console.log(err));
}

export function searchMovies({ state, commit }, payload) {
  commit(types.CLEAR_MOVIEGRID);
  const page = payload.page || 1;
  const query = {
    q: payload.q,
    start: (page - 1) * 20,
    count: 20
  };
  http(API.search, query)
    .then(res => {
      commit(types.SET_MOVIEGRID, res.data);
    })
    .catch(err => console.log(err));
}
