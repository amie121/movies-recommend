const api = {
  login: {
    url: '/api/login/loginUser',
    method: 'post'
  },
  signup: {
    url: '/api/login/createUser',
    method: 'post'
  },
  in_theathers: {
    url: '/movie/in_theaters',
    method: 'get'
  },
  coming_soon: {
    url: '/movie/coming_soon',
    method: 'get'
  },
  top250: {
    url: '/movie/top250',
    method: 'get'
  }
};

const apiSetting = { ...api };
export default apiSetting;
