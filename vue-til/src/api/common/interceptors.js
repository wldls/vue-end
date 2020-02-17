// interceptors
// axios.interceptors.request.use() 요청을 보내기 전 코드
// axios.interceptors.response.use() 응답을 받기 전 처리

export function setInterceptors(instance) {
  // Add a request interceptor
  instance.interceptors.request.use(
    function(config) {
      // Do something before request is sent
      return config;
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function(response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function(error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    },
  );

  return instance;
}
