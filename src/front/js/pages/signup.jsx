import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const SignUp = () => {
  const { store, actions } = useContext(Context);
  const history = useNavigate();

  const registrar = async (e) => {
    e.preventDefault();
    console.log("Entramos en la función de registrar");

    const data = new FormData(e.target);
    let email = data.get("email");
    let password = data.get("password");
    let username = data.get("username");

    console.log(email, password);

    let obj = {
      email: email,
      username: username,
      password: password,
    };

    let response = await actions.fetchGenerico("/signup", obj, "POST");

    /* if (response.ok) {
      
    } else {
      
    } */
    // response = await response.json(); //response es un objeto de Javascript
    // console.log(response);
    // alert(response.mensaje);

    if (response.status == 201) {
      //let respuestaJson = await response.json();
      //console.log("41: ", respuestaJson);
      Swal.fire({
        icon: "success",
        title: "Success!!",
        text: `Welcome ${username}, Your registration has been successful, you can now log in.`,
        footer: '<Link to="/user/account">Usser account</Link>',
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error on signup",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 pt-5 pb-5 text-center">
            <i class="fa-solid fa-user-plus iconmodlog"></i>
            <h2 className="pt-3">SIGNUP</h2>
          </div>
        </div>
        <form
          onSubmit={(evento) => {
            registrar(evento);
            history("/login");
          }}
        >
          <div className="row d-flex">
            <div className="col mx-2">
              <div className="row">
                <h1>Email</h1>
              </div>
              <div className="row">
                <input
                  name="email"
                  placeholder="Type your email"
                  type="email"
                  required
                />
              </div>
            </div>
            <div className="col mx-2">
              <div className="row">
                <h1>Username</h1>
              </div>
              <div className="row">
                <input
                  name="username"
                  placeholder="Type your Username"
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
              Signup
            </button>
          </div>
        </form>
        <Link to="/login">
          <p className="text-center forchettTxt pt-5">
            Already have an account? Login.
          </p>
        </Link>
      </div>
    </>
  );
};
