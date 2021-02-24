import axios from "axios";

export default class Request {
  static async callInternal(opts) {
    const { method, route, data, params, customHeaders } = opts;
    // const hostname = window.location.host.includes("localhost")
    //   ? `https://develop.actionnote.co`
    //   : `https://${window.location.host}`;

    const hostname = "https://production.actionnote.co";

    const headers = localStorage.getItem("token")
      ? {
          ...customHeaders,
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      : {
          ...customHeaders,
        };
    const url = `${hostname}${route}`;

    return axios({
      url,
      method,
      headers,
      data,
      params,
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error.response;
      });
  }

  static async callExternal(opts) {
    const { method, url, data, params, headers } = opts;
    return axios({
      url,
      method,
      headers,
      data,
      params,
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  }
}
