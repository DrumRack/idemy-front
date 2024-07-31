import cl from './Modal.module.css'

function Modal({children, visible, setVisible}) {
    const cls = [cl.modalLayer]

    if (visible) cls.push(cl.active)

    return (
        <div className={cls.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.modalContent} onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal