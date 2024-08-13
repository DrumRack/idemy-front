import axios from 'axios'
import config from '../config.json'

const URL = config.url
const PORT = config.port

class DataService {
    static async getTopics() {
        const response = await axios.get(`${URL}:${PORT}/get_topics`)
        return response.data
    }

    static async getPicLinks(topic) {
        const response = await axios.get(`${URL}:${PORT}/get_topic/${topic}`)
        return response.data
    }
}

export default DataService