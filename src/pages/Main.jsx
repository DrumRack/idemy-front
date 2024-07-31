import {useEffect, useState} from 'react'
import DataService from '../API/DataService'
import Content from '../components/shared/Content'
import Modal from '../components/ui/Modal/Modal'

function Main() {
    const [topics, setTopics] = useState([])
    const [picsLinks, setPicLinks] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    
    useEffect(() => {
        async function fetchTopics() {
            const topics = await DataService.getTopics()
            setTopics(topics)
        }
        fetchTopics()
    }, [])

    async function fetchPicLinks(topicName) {
        const picsLinks = await DataService.getPicLinks(topicName)
        setPicLinks(picsLinks)
    }

    return (
        <div className='app'>
            <Modal visible={modalVisible} setVisible={setModalVisible}>
                <input type='file'/>
            </Modal>
            <Content topics={topics} getPicLinks={fetchPicLinks} picsLinks={picsLinks} setModalVisible={setModalVisible}/>
        </div>
    )
}

export default Main