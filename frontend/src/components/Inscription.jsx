/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
function Inscription({ handleClickConnection }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    try {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/adduser`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data,
        }),
      }).then((response) =>
        response.status === 200
          ? (navigate("/homepage"),
            Swal.fire({
              title: "Inscription complète",
              text: "Bienvenue à vous !!",
              icon: "success",
            }))
          : Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            })
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className="formInscription__inputs" onSubmit={handleSubmit(onSubmit)}>
      <section className="formInscription">
        <h1 className="formTitle">
          Inscrivez vous pour un voyage inattendu dans l'univers des mots !
        </h1>
        <label className="formInscription__label">
          Votre prénom
          <input
            className="formInscription__inputs__text"
            type="text"
            {...register("Firstname", {
              required: "Votre prénom est obligatoire",
            })}
            placeholder=" Prénom"
          />
          {errors.Firstname && (
            <p style={{ color: "red" }}>Le champ Prénom est obligatoire</p>
          )}
        </label>

        <label className="formInscription__label">
          Votre nom
          <input
            className="formInscription__inputs__text"
            {...register("lastname", { required: true })}
            type="text"
            placeholder=" Nom"
          />
          {errors.lastname && (
            <p style={{ color: "red" }}>Le champ Nom est obligatoire</p>
          )}
        </label>
        <label className="formInscription__label">
          Votre email
          <input
            className="formInscription__inputs__text"
            type="email"
            {...register(
              "email",
              {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              },
              { type: "email" }
            )}
            placeholder=" azerty@gmail.com"
          />
          {errors.email && (
            <p style={{ color: "red" }}>
              Le champ Email est obligatoire et valide
            </p>
          )}
        </label>
        <label className="formInscription__label">
          Mot de passe
          <input
            className="formInscription__inputs__text"
            {...register("password", { required: true, minLength: 8 })}
            type="password"
            placeholder=" Mot de passe"
          />
          {errors.password && (
            <p style={{ color: "red" }}>
              Votre mot de passe doit faire plus de 8 caractères
            </p>
          )}
        </label>
        <button className="formInscription__inputs__submit" type="submit">
          Inscription
        </button>
        <div>
          <p>êtes-vous déjà inscrit ?</p>
          <button type="button" onClick={handleClickConnection}>
            Connection
          </button>
        </div>
      </section>
    </form>
  );
}

export default Inscription;
