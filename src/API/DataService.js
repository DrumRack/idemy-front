import axios from 'axios'

class DataService {
    static async getTopics() {
        const response = await axios.get('http://89.108.88.35:8000/get_topics')
        return response.data
    }

    static async getPicLinks(topic) {
        const response = await axios.get(`http://89.108.88.35:8000/get_topic/${topic}`)
        return response.data
    }
}

export default DataService