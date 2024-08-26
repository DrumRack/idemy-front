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

    static uploadImage(formData) {
        axios.post('http://89.108.88.35:8000/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
}

export default DataService