import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/shared/Header'
import Main from './pages/Main'
import Quiz from './pages/Quiz'
import Admin from './pages/Admin'
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/quiz' element={<Quiz/>}/>
                <Route path='/admin' element={<Admin/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App