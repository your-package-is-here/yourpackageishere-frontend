const api = () => {
  let api;

  if (process.env.REACT_APP_ENVIRONMENT === "development") {
    api = process.env.REACT_APP_DEV_API;
    return api;
  }

  else if (process.env.REACT_APP_ENVIRONMENT === "production") {
    api = process.env.REACT_APP_PROD_API;
    return api;
  }
}

export default api;
