import axios from 'axios'

class DataService {
    static async getTitles() {
        const response = await axios.get('http://95.163.242.46:8000/get_topics')
        return response.data
    }
}

export default DataService