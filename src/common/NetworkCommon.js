
export default class NetworkCommon {
    static serverHost = 'http://192.168.1.95:8080'
    // static serverHost = 'http://localhost:8080'
    // static serverHost = 'https://backend.inquban.ru'

    static getConfig = () => {
        const config = {
            headers: {
                'x-token': JSON.parse(localStorage.getItem('token')),
                'user_id': JSON.parse(localStorage.getItem('id'))
            }
        }
        return config
    }
}