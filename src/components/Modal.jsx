import styles from './Modal.module.css'

function Modal({children, onClose}) {

    return (
        <div>
            <div className={styles.backdrop} onClick={onClose} />
            <dialog open className={styles.modal}>
                {children}
            </dialog>
        </div>
    )
}

export default Modal
