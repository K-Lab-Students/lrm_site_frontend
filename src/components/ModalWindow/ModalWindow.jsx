import styles from './ModalWindowDefault.module.css'

const ModalWindow = ({ children, visible, setVisible }) => {

    const rootStyles = [styles.modalWindow]
    if (visible) {
        rootStyles.push(styles.active)
    }

    return (
        <div className={rootStyles.join(' ')} onClick={() => setVisible(false)}>
            <div className={styles.modalWindowContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default ModalWindow