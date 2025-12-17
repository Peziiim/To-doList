import styles from "./styles.module.css"
import { NavLogin } from "../../components/nav/Nav"
import Form from "../../components/form/Form"

export function Login( props ) {


    return(
        <div className={styles.background}>
            <NavLogin links={props.links} 
                      rangeNav={props.rangeNav} 
                      li={props.li}/>

            <Form  title={props.title}
                   range={props.rangeIn}
                   type={props.type}
                   place={props.place}
                   link={props.esqLink}
                   btnText = {props.btnText}   
                   esq={props.esq} />
        </div>

    )
}
