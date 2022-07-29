import axios from "axios";

const BASE_URL = "https://kenziehub.herokuapp.com";

const api = axios.create({
	baseURL: BASE_URL,
});

export default api;
