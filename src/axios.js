import axios from "axios";

const instance = axios.create ({
    baseURL: "https://tinder-backend-09.herokuapp.com",
})

export default instance;
