import styles from "./styles.module.css"
import { NavLogin } from "../../components/nav/Nav"

export function Login() {
    return(
        <div className={styles.background}>
            <NavLogin enter="Login"/>
            <div className={styles.container}>
                <form className={styles.form} action="">
                    <h1 className={styles.title}>Cadastre-se</h1>
                    <input className={styles.input} type="text"/>
                    <input className={styles.input} type="password"/>
                    <div className={styles.checkbox}>
                        <input type="checkbox" />
                        <h6>Lembrar minha senha?</h6>
                    </div>
                    <button className={styles.button}>Cadastrar</button>
                    <a className={styles.esq} href="">Esqueceu a senha?</a>
                </form>
            </div>
        </div>

    )
}


export function Cadastro() {
    return(
        <div className={styles.background}>
            <NavLogin enter="Login"/>
            <div className={styles.container}>
                <form className={styles.form} action="">
                    <h1 className={styles.title}>Cadastre-se</h1>
                    <input className={styles.input} type="email"/>
                    <input className={styles.input} type="text" />
                    <input className={styles.input} type="password"/>
                    <div className={styles.checkbox}>
                        <input type="checkbox" />
                        <h6>Lembrar minha senha?</h6>
                    </div>
                    <button className={styles.button}>Cadastrar</button>
                    <a className={styles.esq} href="">Esqueceu a senha?</a>
                </form>
            </div>
        </div>

    )
}