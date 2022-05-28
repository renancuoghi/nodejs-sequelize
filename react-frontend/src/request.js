

const request = {
  post: (url, object) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(object)
    };
    return fetch(url, requestOptions);
  }
};

export default request;