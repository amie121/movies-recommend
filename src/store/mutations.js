import * as types from './mutation-types';

const mutations = {
  [types.LOGIN](state, username) {
    state.isLogin = true;
    state.username = username;
  },
  [types.LOGOUT](state) {
    state.isLogin = false;
    state.username = '';
  },
  [types.SET_LIKELIST](state, list) {
    state.likeList = list;
  }
};

export default mutations;
