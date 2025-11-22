import styles from "./styles.module.css"
import { Link } from "react-router-dom";

export default function Form( props ){
      const inputs = [];
    
    for (let i = 0; i < props.range; i++) {
            inputs.push(
                <input key={i}
                       type={props.type[i]} 
                       className={styles.input} 
                       placeholder={props.place[i]}/>
            );
        }
        return (
            <>
              <div className={styles.container}>
                <form className={styles.form} action="">
                    <h1 className={styles.title}>{props.title}</h1>
                    {inputs}
                    <div className={styles.checkbox}>
                        <input type="checkbox" />
                        <h6>Lembrar minha senha?</h6>
                    </div>

                    <button onClick={props.handleClick} className={styles.button}>Cadastrar</button>
                    <Link className={styles.esq} to={props.link}>{props.esq}</Link>
                </form>
              </div>
            </>
        )

}