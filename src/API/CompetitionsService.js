import axios from "axios"

import NetworkCommon from "../common/NetworkCommon"

export default class CompetitionsService {

    static host = NetworkCommon.serverHost
    static path = '/competitions'
    // static format = '?format=json'
    static format = ''

    static async get() {
        const response = await axios.get(this.host + this.path + this.format)
        return response.data.data
    }

    static async getById(id) {
        const response = await axios.get(this.host + this.path + '/' + id)
        return [response.data.data]
    }

    static async add(post) {
        const response = await axios.post(this.host + this.path, post, NetworkCommon.getConfig())
    }

    static async updateById(id, post) {
        const response = await axios.put(this.host + this.path + '/' + id, post, NetworkCommon.getConfig())
    }

    static async deleteById(id) {
        const response = await axios.delete(this.host + this.path + '/' + id, NetworkCommon.getConfig())
    }
}

// test1@yandex.ru
// pass: 1234