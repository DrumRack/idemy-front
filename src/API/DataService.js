import axios from 'axios'
import config from '../config'

const URL = config.url
const PORT = config.port

class DataService {
    static async getTopics() {
        const response = await axios.get(`${URL}:${PORT}/get_topics`)
        return response.data
    }

    static async getImageLinks(topic) {
        const response = await axios.get(`${URL}:${PORT}/get_topic/${topic}`)
        return response
    }
}

export default DataService