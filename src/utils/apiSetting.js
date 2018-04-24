const user = {
  // getAccount: {
  //   url: '/api/login/getAccount',
  //   method: 'get'
  // },
  // createAccount: {
  //   url: '/api/login/createAccount',
  //   method: 'post'
  // }
  login: {
    url: '/api/login/loginUser',
    method: 'post'
  },
  signup: {
    url: '/api/login/createUser',
    method: 'post'
  }
};

const apiSetting = { ...user };
export default apiSetting;
