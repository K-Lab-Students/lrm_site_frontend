import axios from "axios";
import NetworkCommon from "../common/NetworkCommon";

export default class AuthService {

    static host = NetworkCommon.serverHost

    static async login({ login, password }) {
        const response = await axios.post(this.host + '/login', { email: login, password: password })
        return response.data.data
    }

    static async registration({ login, password }) {
        console.log(login, password);
        const response = await axios.post(this.host + '/register', { email: login, password: password })
        return response.data.data
    }
}