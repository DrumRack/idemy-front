import {useEffect, useState} from 'react'
import DataService from './API/DataService'
import Header from './components/shared/Header'
import Main from './components/shared/Main'
import './App.css'

function App() {
    const [titles, setTitles] = useState([])
    useEffect(() => {
        async function fetchTitles() {
            const titles = await DataService.getTitles()
            setTitles(titles)
        }
        fetchTitles()
    }, [])


    return (
        <div className='app'>
            <Header/>
            <Main titles={titles}/>
        </div>
    )
}

export default App