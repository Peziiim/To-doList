import styles from "./nav.module.css"

export function NavLogin( props ) {
    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}><a href="">{props.enter}</a></li>
                    <li className={styles.li}><a href="">Sobre Nós</a></li>
                </ul>
            </nav>
        </>
    )    
}