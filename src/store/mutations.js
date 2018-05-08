import * as types from './mutation-types';

const mutations = {
  [types.SET_LIKELIST](state, list) {
    state.likeList = list;
  },
  [types.SET_INTHEATERS](state, movies) {
    state.inTheaters = movies;
  },
  [types.SET_COMINGSOON](state, movies) {
    state.comingSoon = movies;
  },
  [types.SET_TOP250](state, movies) {
    state.top250 = movies;
  },
  [types.SET_MOVIEGRID](state, movies) {
    state.grid = movies;
  },
  [types.CLEAR_MOVIEGRID](state) {
    state.grid = {};
  },
  [types.SET_DETAIL](state, detail) {
    state.detail = detail;
  }
};

export default mutations;
