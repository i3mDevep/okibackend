const openSession = (time, token, refresh) => {
  window.localStorage.setItem("time-token", time);
  window.localStorage.setItem("oki-token", token);
  window.localStorage.setItem("oki-refresh", refresh);
};

export default openSession