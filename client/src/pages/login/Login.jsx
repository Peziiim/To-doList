import styles from "./styles.module.css"
import { NavLogin } from "../../components/nav/Nav"
import Form from "../../components/form/Form"
import axios from 'axios'

export function Login( props ) {
  
    function handleClick(email=null, nome, senha, lembrarSenha) {
        
    }

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
                   esq={props.esq} />
        </div>

    )
}
