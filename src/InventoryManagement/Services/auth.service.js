import axios from "axios";


const API_URL = "http://localhost:5000/api/validate_user";

const login = (Username, Password) => {
  return axios
    .post(API_URL, {
      Username,
      Password,
    })
    .then((response) => {
      if (response.data.access_token) {
        localStorage.setItem("user", JSON.stringify(response.data));
        
      }

      return response.data;
    });
};


const logout = () => {
  localStorage.removeItem("user");

  // caches.keys().then((names) => {
  //   names.forEach((name) => {
  //     caches.delete(name);
  //   });
  // });
  // alert('Complete Cache Cleared')
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  login,
  logout,
  getCurrentUser,
};

export default authService;