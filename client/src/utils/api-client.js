const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function apiClient(endpoint) {
  return fetch(`${SERVER_URL}/${endpoint}`).then((response) => response.json());
}
export { apiClient };
