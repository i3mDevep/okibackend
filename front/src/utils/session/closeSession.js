const closeSession = () => {
    window.localStorage.clear("time-token");
    window.localStorage.clear("oki-token");
    window.localStorage.clear("oki-refresh");
}

export default closeSession