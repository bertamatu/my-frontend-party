const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

const setToken = (token) => {
  localStorage.setItem("token", token);
};

const clearStorage = () => {
  localStorage.clear();
};

export default {
  getToken,
  setToken,
  clearStorage,
};
