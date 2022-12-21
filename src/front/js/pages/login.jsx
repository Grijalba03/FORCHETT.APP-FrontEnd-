import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const history = useNavigate();
  const [token, setToken] = useState("");
  const userLogin = async (e) => {
    e.preventDefault();
    console.log("Entramos en la función de userLogin");

    const data = new FormData(e.target);
    // let email = data.get("email");
    let username = data.get("username");
    let password = data.get("password");

    // console.log(email, password);
    console.log(username, password);

    let obj = {
      // email: email,
      username: username,
      password: password,
    };

    console.log("hola4");
    let response = await actions.login("/login", obj, "POST"); //response es una promesa
    console.log("36: ", response);
    if (response.status == 200) {
      //let respuestaJson = await response.json();
      //console.log("41: ", respuestaJson);
      Swal.fire({
        icon: "success",
        title: "Welcome",
        text: `Hello, ${username}`,
        footer: `FORCHETT.APP Member's Area`,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error, failed to login.",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
    //console.log(response);
    //response = await response.json(); //response es un objeto de Javascript
    console.table("hola37", response);
    //token = response.token;
    setToken(response.token);
    console.log("token", token);

    //alert(response.token);
  };

  const prueba = async () => {
    let response = await actions.fetchProtegido("/helloprotected");
    console.log(response);
    let responseJSON = await response.json();

    if (response.ok) {
      console.log(responseJSON);
      return history("/listaUsuarios");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 pt-5 pb-5 text-center">
            <i className="fa-solid fa-id-card-clip iconmodlog"></i>
            <h2 className="pt-3">USER LOGIN</h2>
          </div>
        </div>
        <form
          onSubmit={(evento) => {
            userLogin(evento);
            history("/");
          }}
        >
          <div className="row d-flex">
            <div className="col mx-2">
              <div className="row">
                <h1>Username</h1>
              </div>
              <div className="row">
                <input
                  name="username"
                  placeholder="Username"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="col mx-2">
              <div className="row">
                <h1>Password</h1>
              </div>
              <div className="row">
                <input
                  name="password"
                  placeholder="agregue su password"
                  type="string"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row d-flex py-2">
            <button className="btn forchettBtn" type="submit">
              Log in
            </button>
          </div>
        </form>
        {store.username ? (
          <button type="button" onClick={() => prueba()}>
            Endpoint protegida
          </button>
        ) : (
          <>
            <Link to="/signup">
              <p className="text-center pt-5 forchettTxt">
                <i className="fa-solid fa-user-plus"></i> Don't have an account?
                register.
              </p>
            </Link>
          </>
        )}
        {store.username ? (
          <button
            type="button"
            onClick={() => {
              actions.logout();
              history("/");
            }}
          >
            Cerrar Sesión
          </button>
        ) : (
          <></>
        )}

        {store.username ? (
          <button
            type="button"
            onClick={() => {
              // actions.logout();
              history("/user/account");
            }}
          >
            User Account
          </button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
