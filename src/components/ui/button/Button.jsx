import cl from './Button.module.css'

function Button({children, onClick, style}) {
    return (
        <button onClick={onClick} className={cl.button} style={style}>
            {children}
        </button>
    )
}

export default Button