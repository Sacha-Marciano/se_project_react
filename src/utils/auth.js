const baseURL = "http://localhost:3001";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

const request = (url, options) => {
  return fetch(`${baseURL}/${url}`, options).then(checkResponse);
};

const signUserUp = (data) => {
  return request(`signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

const signUserIn = (data) => {
  return request(`signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

const getUserByToken = (token) => {
  return request(`users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export { signUserIn, signUserUp, getUserByToken };
