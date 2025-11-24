import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import eye from "../../assets/login/eye.svg";
import eyeSlash from "../../assets/login/eye-slash.svg";
import { useRef, useState } from "react";
import axios from "axios";
import { useAuth } from "../../router/AuthContext";

export default function Form(props) {
  const inputs = [];
  const navigation = useNavigate();
  const { setAuthenticated } = useAuth();
  const [error, setError] = useState("")
  const [formValues, setFormValues] = useState({
    email: "",
    nome: "",
    senha: "",
    checkbox: false,
  });

  const [show, setShow] = useState(false);

  function toggle() {
    setShow(!show);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleClick() {
    try {
      if (formValues.email != "") {
        const response = axios.post("/api/register", {
          email: formValues.email,
          nome: formValues.nome,
          senha: formValues.senha,
          checkbox: formValues.checkbox,
        });

        if (response.message == "OK") {
          setAuthenticated(true);
          return navigation("/");
        }

        setError(response.erro)
        setAuthenticated(false)

      } else {
        const response = axios.post("/api/login", {
          nome: formValues.nome,
          senha: formValues.senha,
          checkbox: formValues.checkbox,
        });

        if (response.message == "OK") {
          setAuthenticated(true);
          return navigation("/");
        }
        setError(response.erro)
        setAuthenticated(false)

      }
    } catch (error) {
      console.log("Ocorreu um erro: ", error.message);
    }
  }

  for (let i = 0; i < props.range; i++) {
    if (props.type[i] == "password") {
      inputs.push(
        <div key={i} className={styles.passCont}>
          <input
            type={show ? "text" : "password"}
            className={styles.input}
            id="password"
            placeholder={props.place[i]}
            onChange={handleInputChange}
            required
          />
          <img onClick={toggle} src={show ? eyeSlash : eye} alt="eye" />
        </div>
      );
    } else {
      inputs.push(
        <input
          key={i}
          type={props.type[i]}
          className={styles.input}
          placeholder={props.place[i]}
          onChange={handleInputChange}
          required
        />
      );
    }
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
         <h5>{error}</h5>
          <button onClick={handleClick} className={styles.button}>
            Cadastrar
          </button>
          <Link className={styles.esq} to={props.link}>
            {props.esq}
          </Link>
        </form>
      </div>
    </>
  );
}
