import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import "../../styles/mainmenu.css";
import Swal from "sweetalert2";

export const MainMenu = () => {
  const [isOpen, setIsopen] = useState(false);

  const { store, actions } = useContext(Context);
  const history = useNavigate();
  const [token, setToken] = useState("");

  const menu = () => {
    // isOpen === true ? setIsopen(false) : setIsopen(true);
    setIsopen(!isOpen);
  };

  const userLogin = async (e) => {
    // e.preventDefault();
    console.log("Login module");

    // const data = new FormData(e.target);
    // let email = data.get("email");
    // let password = data.get("password");
    // console.log(email, password);

    // let obj = {
    //   email: email,
    //   password: password,
    // };
    // console.log("hola4");
    // let response = await actions.login("/login", obj, "POST");
    // console.log("36: ", response);
    // if (response.status == 200) {
    //   Swal.fire({
    //     icon: "success",
    //     title: "Welcome",
    //     text: `Bienvenido, ${email}`,
    //     footer: '<a href="">Why do I have this issue?</a>',
    //   });
    // } else {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "No pudo iniciar sesión",
    //     footer: '<a href="">Why do I have this issue?</a>',
    //   });
    // }
    // console.table("hola37", response);
    // setToken(response.token);
    // console.log("token", token);
  };

  function loginPopup() {
    let value = Swal.fire({
      title: "Account Login",
      html: `<input type="text" id="username" class="swal2-input" placeholder="Username">
      <input type="password" id="password" class="swal2-input" placeholder="Password">`,
      confirmButtonText: "Sign in",
      showCancelButton: true,
      focusConfirm: false,
      preConfirm: () => {
        const username = Swal.getPopup().querySelector("#username").value;
        const password = Swal.getPopup().querySelector("#password").value;
        if (!username || !password) {
          Swal.showValidationMessage(`Please enter login and password`);
        }
        return { username: username, password: password };
      },
    }).then((result) => {
      console.log("Heyyyyyyyyy");

      // Swal.fire(
      //   `
      //   username: ${result.value.username}
      //   Password: ${result.value.password}
      // `.trim()
      // );
      // console.log("username: ", result.value.username);

      const loginReq = async (e) => {
        e.preventDefault();
        console.log("login Func");

        //const data = new FormData(e.target);
        let username = result.value.username;
        let password = result.value.password;

        console.log(username, email, password1, password2);

        let obj = {
          username: username,
          password: password,
        };
        console.log("Heyyy2222");

        let response = await actions.login("/login", obj, "POST");
        console.log("login RES: ", response);
        if (response.status == 200) {
          //let respuestaJson = await response.json();
          //console.log("41: ", respuestaJson);
          Swal.fire({
            icon: "success",
            title: "Welcome",
            text: `Bienvenido, ${email}`,
            footer: '<a href="">Why do I have this issue?</a>',
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No pudo iniciar sesión",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
        console.table("hola37", response);
        setToken(response.token);
        console.log("token", token);

        //alert(response.token);
      };

      loginReq.then(
        function () {
          console.log("funco");
        },
        function (error) {
          console.log("Error");
        }
      );
    });
    return value;
  }

  function signupPopup() {
    value = Swal.fire({
      title: "Create Your Account",
      html: `<input type="text" id="username" class="swal2-input" placeholder="Username">
      <input type="text" id="email" class="swal2-input" placeholder="Email">
      <input type="password" id="password1" class="swal2-input" placeholder="Password">
      <input type="password" id="password2" class="swal2-input" placeholder="Confirm Password">
      <br>
      <p>By registering with FORCHETTA.APP, you agree to accept our Privacy Policy and our Terms & Conditions
      </p>`,
      confirmButtonText: "CREATE ACCOUNT",
      focusConfirm: false,
      preConfirm: () => {
        const username = Swal.getPopup().querySelector("#username").value;
        const email = Swal.getPopup().querySelector("#email").value;
        const password1 = Swal.getPopup().querySelector("#password1").value;
        const password2 = Swal.getPopup().querySelector("#password2").value;
        if (!username || !email || !password1 || !password2) {
          Swal.showValidationMessage(`Please enter login and password`);
        }
        return {
          username: username,
          email: email,
          password1: password1,
          password2: password2,
        };
      },
    }).then((result) => {
      Swal.fire(
        `
        Username: ${result.value.username}
        Email: ${result.value.email}
        Password1: ${result.value.password1}
        Password2: ${result.value.password2}
      `.trim()
      );
    });
    return value;
  }

  return (
    <div className="container-menu">
      <div className="text-center">
        <button
          type="button"
          onClick={menu}
          className="btn btn-primary rounded-circle"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <p>Menu</p>
      </div>
      <div className="text-center">
        <i
          className="fa-regular fa-circle-user iconmod"
          onClick={loginPopup}
        ></i>
      </div>
      <div className="text-center">
        <i className="fa-solid fa-user-plus iconmod" onClick={signupPopup}></i>
      </div>
      <div className="text-center">
        <i className="fa-solid fa-right-to-bracket iconmod"></i>
      </div>
      <div className="text-center">
        <i className="fa-solid fa-heart iconmod"></i>
      </div>

      <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
        <div className="sd-header">
          <h3 className="mb-0">Main Menu</h3>
          <div className="btn btn-primary" onClick={menu}>
            <i className="fa fa-times"></i>
          </div>
        </div>
        <div className="sd-body">
          <ul>
            <li>
              <Link to="/register" className="sd-link">
                Register
              </Link>
            </li>
            <li>
              <Link to="/register" className="sd-link">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="sd-link">
                Explore
              </Link>
            </li>
            <li>
              <Link to="/register" className="sd-link">
                Random
              </Link>
            </li>
            <h4>Categories</h4>
            <li>
              <Link to="/categories/1" className="sd-link">
                Breakfast
              </Link>
            </li>
            <li>
              <Link to="/categories/3" className="sd-link">
                Lunch
              </Link>
            </li>
            <li>
              <Link to="/categories/2" className="sd-link">
                Brunch
              </Link>
            </li>
            <li>
              <Link to="/categories/5" className="sd-link">
                Dinner
              </Link>
            </li>
            <li>
              <Link to="/categories/6" className="sd-link">
                Salads
              </Link>
            </li>
            <li>
              <Link to="/categories" className="sd-link">
                View more...
              </Link>
            </li>
            <h4>Extra</h4>
            <li>
              <Link to="/register" className="sd-link">
                blablablah
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
        onClick={menu}
      ></div>
    </div>
  );
};

// ReactDOM.render(<MainMenu />, document.getElementById("app"));
