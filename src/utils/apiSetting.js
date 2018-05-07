const baseUrl = 'https://douban.uieee.com';

const api = {
  login: {
    url: '/api/login/loginUser',
    method: 'post'
  },
  signup: {
    url: '/api/login/createUser',
    method: 'post'
  },
  theathers: {
    url: baseUrl + '/v2/movie/in_theaters',
    method: 'get'
  },
  coming_soon: {
    url: baseUrl + '/v2/movie/coming_soon',
    method: 'get'
  },
  top250: {
    url: baseUrl + '/v2/movie/top250',
    method: 'get'
  }
};

const apiSetting = { ...api };
export default apiSetting;
