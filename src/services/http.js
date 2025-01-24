import axios from "axios";

if (localStorage.getItem("token")) {
  axios.defaults.headers.common["Authentication"] =
    localStorage.getItem("token");
} else {
  delete axios.defaults.headers.common["Authentication"];
}

axios.defaults.baseURL = "https://inverst-bakend.onrender.com";

export class Http {
  static async get(url) {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      throw error.response;
    }
  }

  static async getData(url, params) {
    try {
      const { data } = await axios.get(url, { params });
      return data;
    } catch (error) {
      throw error.response;
    }
  }

  static async post(url, params) {
    try {
      const { data } = await axios.post(url, params);
      return data;
    } catch (error) {
      throw error.response;
    }
  }

  static async delteData(url) {
    try {
      const { data } = await axios.delete(url);
      return data;
    } catch (error) {
      throw error.response;
    }
  }
}
