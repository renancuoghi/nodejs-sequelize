

const request = {
  post: (url, object) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(object)
    };
    return fetch(url, requestOptions);
  },
  get: (url) => {
    return fetch(url);
  }
};

export default request;