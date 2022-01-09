const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function apiClient(endpoint, options = {}) {
  return window
    .fetch(`${SERVER_URL}/${endpoint}`, options)
    .then((response) => response.json());
}
export { apiClient };
