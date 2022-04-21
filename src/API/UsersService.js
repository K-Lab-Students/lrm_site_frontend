import axios from "axios"

import NetworkCommon from "../common/NetworkCommon"

export default class UsersService {

    static host = NetworkCommon.serverHost

    static path = '/users'
    static adminUserUpdatePath = ''
    // static format = '?format=json'
    static format = ''

    static async get() {
        const response = await axios.get(this.host + this.path + this.format)
        return response.data.data
    }

    static async getById() {
        const response = await axios.get(this.host + '/user', NetworkCommon.getConfig())
        return response.data.data
    }

    static async update(user) {
        console.log(this.host + '/user/update');
        const response = await axios.put(this.host + '/user/update', user, NetworkCommon.getConfig())
    }

    static async adminUpdate(id, user) {
        const response = await axios.put(this.host + this.adminUserUpdatePath + '/' + id, user, NetworkCommon.getConfig())
    }
}