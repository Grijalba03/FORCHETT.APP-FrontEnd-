import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/userAccount.css";

export const UserAccount = () => {
  const { store, actions } = useContext(Context);
  const [recarga, setRecarga] = useState(false);
  const history = useNavigate();

  //   useEffect(() => {
  //     async function fetchData() {
  //       let response = await actions.fetchGenerico("/profile/<string:username>");
  //       if (response.status == 200) {

  //         response = await response.json();
  //         store.UserProfile = response;
  //       } else {
  //         response = await response.json();
  //         }
  //   }

  //     fetchData();
  //   }, [recarga]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 avatarHead">
          <img
            className="avatarMod d-inline-block"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/600px-Wikipedia_Logo_1.0.png"
            alt="Test"
          />
          <span className="username d-inline-block">Username</span>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h2>Account</h2>

          <form
            onSubmit={(data) => {
              update(data);
            }}
          >
            <div className="row">
              <div className="col">
                <div className="row">
                  <h1>Email</h1>
                </div>
                <div className="row">
                  <input
                    name="email"
                    placeholder="agregue su email"
                    type="email"
                    required
                  />
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <h1>Current Password</h1>
                </div>
                <div className="row">
                  <input
                    name="password1"
                    placeholder="agregue su password"
                    type="string"
                    required
                  />
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <h1>New Password</h1>
                </div>
                <div className="row">
                  <input
                    name="password2"
                    placeholder="agregue su password"
                    type="string"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row d-flex py-2">
              <button className="btn btn-primary" type="submit">
                Update Account
              </button>
            </div>
          </form>
        </div>
        <div className="col-6">
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
};
