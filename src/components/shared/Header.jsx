import Button from '../ui/button/Button'

function Header() {
    return (
        <header>
            <img src='https://csite.nicepage.com/Images/logo-w.png' alt='Logo'></img>
            <div className='header_btns'>
                <Button>Профиль</Button>
                <Button>Загрузить картинку</Button>
            </div>
        </header>
    )
}

export default Header