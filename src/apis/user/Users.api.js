import axios from "axios";
const url = "https://lms-api-e6xd.onrender.com/api";
export const register = async (route, data) => {
  const result = await axios({
    url: `${url}${route}`,
    data: data,
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
};

export const login = async (route, data) => {
  const result = await axios({
    url: `${url}${route}`,
    data: data,
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
};

export const getUser = async (route) => {
  const result = await axios({
    url: `${url}${route}`,
    method: "GET",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
};
