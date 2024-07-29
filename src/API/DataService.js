import axios from 'axios'

class DataService {
    static async getTopics() {
        const response = await axios.get('http://95.163.242.46:8000/get_topics')
        return response.data
    }

    static async getPicLinks(topic) {
        const response = await axios.get(`http://95.163.242.46:8000/get_topic/${topic}`)
        return response.data
    }
}

export default DataService