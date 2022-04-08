import axios from "axios"

import NetworkCommon from "../common/NetworkCommon"

export default class ProjectsService {

    static host = NetworkCommon.serverHost
    static path = '/projects'
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

    static async create(projects) {
        const response = await axios.post(this.host + this.path, projects)
    }

    static async update(id, projects) {
        const response = await axios.put(this.host + this.path + '/' + id, projects)
    }

    static async delete(id) {
        const response = await axios.delete(this.host + this.path + '/' + id)
    }
}