import styles from "./nav.module.css"
import { Link } from "react-router-dom";

export function NavLogin( props ) {
    
const items = [];
    
    for (let i = 0; i < props.rangeNav; i++) {
            items.push(
                <li key={i}>
                    <Link className={styles.li} to={props.links[i]}>{props.li[i]}</Link>
                </li>
            );
        }

    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    {items}
                </ul>
            </nav>
        </>
    )    
}