import * as types from './mutation-types';

const mutations = {
  [types.SET_LIKELIST](state, list) {
    state.likeList = list;
  }
};

export default mutations;
