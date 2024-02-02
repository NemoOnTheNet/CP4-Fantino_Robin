/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react";
import "./register.css";
import Login from "../../components/Login";
import Inscription from "../../components/Inscription";

function Register() {
  const [connection, setConnection] = useState(true);
  const handleClickConnection = () => {
    setConnection(!connection);
  };
  return (
    <section>
      {connection ? (
        <Inscription handleClickConnection={handleClickConnection} />
      ) : (
        <Login />
      )}
    </section>
  );
}

export default Register;
