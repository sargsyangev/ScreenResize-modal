import { createPortal } from "react-dom"
import styles from "./modal.module.css"
import { useClickOutside } from "../customHooks/customHooks"

function Modal({ handleCloseModal }) {
    const [ref] = useClickOutside(handleCloseModal)

    return createPortal(<div className={styles.modalConteiner}>

        <div ref={ref} className={styles.modal}>
            <button onClick={handleCloseModal} className={styles.closeBtn}>X</button>
            <span>Modal is open</span>
        </div>

    </div>, document.body)
}

export default Modal