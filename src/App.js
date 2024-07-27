import {useEffect, useState} from 'react'
import DataService from './API/DataService'
import Header from './components/shared/Header'
import Main from './components/shared/Main'
import './App.css'

function App() {
    const [topics, setTopics] = useState([])
    useEffect(() => {
        async function fetchTopics() {
            const topics = await DataService.getTopics()
            setTopics(topics)
        }
        fetchTopics()
    }, [])

    async function fetchPicsList(topicName) {
        const picsList = await DataService.getPicsList(topicName)
        console.log(picsList)
    }

    return (
        <div className='app'>
            <Header/>
            <Main topics={topics} getPicsList={fetchPicsList}/>
        </div>
    )
}

export default App