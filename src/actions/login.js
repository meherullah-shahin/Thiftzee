const axios = require("axios");
const { apiUrl } = require("../variables");

exports.LOGGING_IN = "LOGGING_IN";
exports.LOGGED_IN = "LOGGED_IN";
exports.LOGIN_FAILED = "LOGIN_FAILED";

exports.login = (email, password) => dispatch => {
  dispatch({
    type: this.LOGGING_IN
  });
  dispatch({
    type: this.LOGGED_IN
  });
  return axios
    .post(`${apiUrl}/login`, { email, password })
    .then(data => data.data.token);
};
