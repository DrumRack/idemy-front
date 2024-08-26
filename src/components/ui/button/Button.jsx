import cl from './Button.module.css'

function Button({children, onClick, style, type}) {
    return (
        <button onClick={onClick} className={cl.button} type={type}>
            {children}
        </button>
    )
}

export default Button