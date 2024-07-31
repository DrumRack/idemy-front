import {Link} from 'react-router-dom'
import Button from '../ui/button/Button'

function Header() {
    return (
        <header>
            {/* Поменять на useNavigate после изучения хука */}
            <img src='https://csite.nicepage.com/Images/logo-w.png' onClick={() => window.location='/'} style={{cursor: 'pointer'}} alt='Logo'></img>
            <nav className='header__main-nav'>
                <Button>
                    <Link to='/quiz'>Тест знаний</Link>
                </Button>
            </nav>
            <div className='header__auth'>
                <span>Неавторизованный</span>
            </div>
        </header>
    )
}

export default Header