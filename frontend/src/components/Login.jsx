/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { UserContext } from "./userContext";

function Login() {
  const { register, handleSubmit } = useForm();
  const { setAuth } = useContext(UserContext);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    try {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
        method: "post",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Identifiant ou mot de passe incorrects",
            });
          } else {
            navigate("/homepage");
            Swal.fire({
              title: "Connection complète",
              text: "Bienvenue à vous !!",
              icon: "success",
            });
          }
          return response.json();
        })
        .then(
          (fetchedData) =>
            setAuth({
              id: fetchedData.id,
              pseudo: fetchedData.pseudo,
              isLogged: true,
            }),
          navigate("/")
        );
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <form className="formInscription__inputs" onSubmit={handleSubmit(onSubmit)}>
      <section className="formInscription">
        <label htmlFor="mail" className="formInscription__label">
          Adresse mail
          <input
            id="mail"
            className="formInscription__inputs__text"
            type="email"
            {...register("mail", { required: true }, { type: "email" })}
            placeholder="azerty@gmail.com"
          />
        </label>
        <label htmlFor="password" className="formInscription__label">
          Mot de passe
          <input
            id="password"
            className="formInscription__inputs__text"
            {...register("password", { required: true })}
            type="password"
            placeholder="Mot de passe"
          />
        </label>
        <input
          className="formLogin__inputs__submit"
          type="submit"
          value="Connexion"
        />
      </section>
    </form>
  );
}

export default Login;
