import {useEffect, useState} from 'react'
import DataService from '../API/DataService'
import Content from '../components/shared/Content'
import Modal from '../components/ui/Modal/Modal'

function Main() {
    const [topics, setTopics] = useState([])
    const [imageLinks, setImageLinks] = useState([])
    const [totalImages, setTotalImages] = useState(0)
    const [modalVisible, setModalVisible] = useState(false)
    
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

    return (
        <div className='app'>
            <Modal visible={modalVisible} setVisible={setModalVisible}>
                <input type='file'/>
            </Modal>
            <Content topics={topics} totalImages={totalImages} getImageLinks={fetchImages} imageLinks={imageLinks} setModalVisible={setModalVisible}/>
        </div>
    )
}

export default Main