const baseURL = "http://localhost:3001";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

const getServerItems = () => {
  return fetch(`${baseURL}/items`).then(checkResponse);
};

const addServerItem = (newCard) => {
  return fetch(`${baseURL}/items`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      _id: newCard._id,
      name: newCard.name,
      imageUrl: newCard.imageUrl,
      weather: newCard.weather,
    }),
  }).then(checkResponse);
};

const deleteServerItem = (id) => {
  return fetch(`${baseURL}/items/${id}`, {
    method: "DELETE",
  }).then(checkResponse);
};

export { getServerItems, addServerItem, deleteServerItem };
