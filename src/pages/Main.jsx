import {useEffect, useState} from 'react'
import DataService from '../API/DataService'
import Content from '../components/shared/Content'

function Main() {
    const [topics, setTopics] = useState([])
    const [picsLinks, setPicLinks] = useState([])
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
        console.log(picsLinks)
    }

    return (
        <div className='app'>
            <Content topics={topics} getPicLinks={fetchPicLinks} picsLinks={picsLinks}/>
        </div>
    )
}

export default Main