import cl from './Button.module.css'

function Button({children, onClick}) {
    return (
        <button onClick={onClick} className={cl.button}>
            {children}
        </button>
    )
}

export default Button