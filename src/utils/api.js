const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://api.watowear.jumpingcrab.com"
    : "http://localhost:3001";

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

const getServerItems = () => {
  return request(`items`);
};

const addServerItem = (newCard) => {
  return request(`items`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      name: newCard.name,
      imageUrl: newCard.imageUrl,
      weather: newCard.weather,
    }),
  });
};

const deleteServerItem = (id) => {
  return request(`items/${id}`, {
    method: "DELETE",
    headers: { authorization: `Bearer ${localStorage.getItem("jwt")}` },
  });
};

const updateUserData = (data) => {
  return request(`users/me`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify(data),
  });
};

const addCardLike = (id, token) => {
  return request(`items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

const removeCardLike = (id, token) => {
  return request(`items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export {
  request,
  getServerItems,
  addServerItem,
  deleteServerItem,
  checkResponse,
  updateUserData,
  addCardLike,
  removeCardLike,
};
