import axios from "axios";

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    // logger.log(error);
    // toast.error("something's wrong");
    console.log(error);
    alert("something's wrong");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
