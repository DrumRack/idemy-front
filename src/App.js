import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/shared/Header'
import Main from './pages/Main'
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Main/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App