import axios from 'axios'
import {useEffect, useState} from 'react'
import DataService from '../API/DataService'
import Content from '../components/shared/Content'
import Modal from '../components/ui/Modal/Modal'
import Button from '../components/ui/button/Button'

function Main() {
    const [topics, setTopics] = useState([])
    const [imageLinks, setImageLinks] = useState([])
    const [totalImages, setTotalImages] = useState(0)
    const [modalVisible, setModalVisible] = useState(false)
    const [file, setFile] = useState(null)
    
    useEffect(() => {
        async function fetchTopics() {
            const topics = await DataService.getTopics()
            setTopics(topics)
        }
        fetchTopics()
    }, [])

    async function fetchImages(topicName) {
        const response = await DataService.getImageLinks(topicName)
        setTotalImages(response.headers['x-total-count'])
        setImageLinks(response.data)
    }

    function fileChange(event) {
        setFile(event.target.files[0])
    }

    function fileUpload(event) {
        event.preventDefault()
        const formData = new FormData()
        formData.append('image', file)

        axios.post('http://89.108.88.35:8000/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'accept': 'application/json'
            }
        })
    }

    return (
        <div className='app'>
            <Modal visible={modalVisible} setVisible={setModalVisible}>
                <form>
                    <input onChange={fileChange} type='file'/>
                    <Button onClick={fileUpload} type='submit'>Загрузить</Button>
                </form>
            </Modal>
            <Content topics={topics} totalImages={totalImages} getImageLinks={fetchImages} imageLinks={imageLinks} setModalVisible={setModalVisible}/>
        </div>
    )
}

export default Main