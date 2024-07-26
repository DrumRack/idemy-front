import cl from './Button.module.css'

function Button({children}) {
    return (
        <button className={cl.button}>
            {children}
        </button>
    )
}

export default Button