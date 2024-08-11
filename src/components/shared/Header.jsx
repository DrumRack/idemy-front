import {useNavigate, Link} from 'react-router-dom'
import Button from '../ui/button/Button'

function Header() {
    const navigate = useNavigate()

    return (
        <header>
            <div className='header__logo'>
                <img
                    src='https://csite.nicepage.com/Images/logo-w.png'
                    className='logo'
                    onClick={() => navigate('/')}
                    alt='Logo'
                />
            </div>
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