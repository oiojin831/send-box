const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function apiClient(endpoint, options = {}) {
  return window.fetch(`${SERVER_URL}/${endpoint}`, options).then((response) => {
    if (!response.ok) {
      throw new Error(
        `There was an Error: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  });
}
export { apiClient };
