// import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/shared/Header'
import Main from './pages/Main'
import Quiz from './pages/Quiz'
import './App.css'

function App() {
    // const [modalVisible, setModalVisible] = useState(false)

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/quiz' element={<Quiz/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App