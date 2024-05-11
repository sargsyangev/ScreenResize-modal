import { useScreenResize } from "../customHooks/customHooks"
import styles from "./screenResize.module.css"

function ScreenResize() {

    const { width, heigth } = useScreenResize()

    const isDesktop = width > 1000
    const isTablet = width > 600 && width < 1000
    const isMobile = width < 600

    return (
        <div className={styles.container}>
            {isDesktop && <p>Desktop</p>}
            {isTablet && <p>Tablet</p>}
            {isMobile && <p>Mobile</p>}
        </div>
    )
}

export default ScreenResize