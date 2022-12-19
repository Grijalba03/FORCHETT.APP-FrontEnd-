import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/userAccount.css";
import Swal from "sweetalert2";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import {CloudUpload} from "../component/cloudinary";

export const UserAccount = () => {
  const { store, actions } = useContext(Context);
  const [recarga, setRecarga] = useState(false);
  const history = useNavigate();
  const [token, setToken] = useState("");

  let username = store.username;

  const changeUserPassword = async (e) => {
    e.preventDefault();
    console.log("Changing user password");

    const data = new FormData(e.target);
    let currentPassword = data.get("current-password");
    let newPassword = data.get("new-password");
    let confirmPassword = data.get("confirm-password");

    console.log(currentPassword, newPassword, confirmPassword);

    let obj = {};
    obj["current-password"] = currentPassword;
    obj["new-password"] = newPassword;
    obj["confirm-password"] = confirmPassword;

    let response = await actions.fetchProtegido(
      "/account/password/" + username,
      obj,
      "PUT"
    );

    if (response.status == 200) {
      let respuestaJson = await response.json();
      console.log("41: ", respuestaJson);
      Swal.fire({
        icon: "success",
        title: "Yes!",
        text: `password changed successfully`,
        footer: '<a href="">Make passwords strong again/a>',
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "password could not be changed",
        footer: '<a href="">try different password or username pls :)</a>',
      });
    }
    //console.log(response);
    //response = await response.json(); //response es un objeto de Javascript
    //console.table("hola37", response);
    //token = response.token;
    setToken(response.token);
    console.log("token", token);

    //alert(response.token);
  };

  const changeUserProfile = async (e) => {
    e.preventDefault();
    console.log("change user profile data");

    const data = new FormData(e.target);
    let dietaryPreference = data.get("Dietary-Preference");
    let title = data.get("Title");
    let description = data.get("Description");
    let facebook = data.get("Facebook");
    let instagram = data.get("Instagram");
    let twitter = data.get("Twitter");
    let youtube = data.get("Youtube");

    // console.log(currentPassword, newPassword, confirmPassword);

    let obj = {};
    obj["Dietary-Preference"] = dietaryPreference;
    obj["Title"] = title;
    obj["Description"] = description;
    obj["Facebook"] = facebook;
    obj["Instagram"] = instagram;
    obj["Twitter"] = twitter;
    obj["Youtube"] = youtube;

    console.log("hola4");
    // let response = await actions.login(
    let response = await actions.fetchProtegido(
      "/account/update/" + username,
      obj,
      "PUT"
    );
    console.log("resss: ", response);
    console.log("36-response: ", response);
    if (response.status == 200) {
      let respuestaJson = await response.json();
      console.log("41: ", respuestaJson);
      Swal.fire({
        icon: "success",
        title: "Yes!",
        text: `Data changed successfully`,
        footer: "Frack Yeah!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "fronk :(",
        footer: "#GG nothing to do for now",
      });
    }
    //console.log(response);
    //response = await response.json(); //response es un objeto de Javascript
    //console.table("hola37", response);
    //token = response.token;
    setToken(response.token);
    console.log("token", token);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 avatarHead">

          <Link to="/upload">
            <button
              className="btn btn-outline-info categoryname home my-5"
              role="button"
            >
              {" "}
              Submit Image
            </button>
          </Link>
          {/* <img
            className="avatarMod d-inline-block"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Wikipedia_Logo_1.0.png/600px-Wikipedia_Logo_1.0.png"
            alt="Test"
          /> */}


          <span className="username d-inline-block">Username</span>
        </div>
      </div>
      <div className="row">
        <div className="col-6 pt-5">
          <h2>Account</h2>

          <form
            onSubmit={(data) => {
              changeUserPassword(data);
            }}
          >
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <h1>Email</h1>
                </div>
                <div className="row">
                  <input
                    name="email"
                    placeholder="New Email"
                    type="email"
                    // required
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <h1>Current Password</h1>
                </div>
                <div className="row">
                  <input
                    name="current-password"
                    placeholder="Type your current Password"
                    type="string"
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <h1>New Password</h1>
                </div>
                <div className="row">
                  <input
                    name="new-password"
                    placeholder="Type your New Password"
                    type="string"
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <h1>Confirm New Password</h1>
                </div>
                <div className="row">
                  <input
                    name="confirm-password"
                    placeholder="Retype your New Password"
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
        <div className="col-6 pt-5">
          <h2>Profile Information</h2>

          <form
            onSubmit={(data2) => {
              changeUserProfile(data2);
            }}
          >
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <h1>Dietary Preference</h1>
                </div>
                <div className="row">
                  <input
                    name="Dietary-Preference"
                    placeholder="Dietary Preference"
                    type="text"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <h1>User title</h1>
                </div>
                <div className="row">
                  <input name="Title" placeholder="User title" type="text" />
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <h1>Description(Bio)</h1>
                </div>
                <div className="row">
                  <input
                    name="Description"
                    placeholder="Description"
                    type="text"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <h1>Meta</h1>
                </div>
                <div className="row">
                  <input name="Facebook" placeholder="Meta" type="text" />
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <h1>Instagram</h1>
                </div>
                <div className="row">
                  <input name="Instagram" placeholder="Instagram" type="text" />
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <h1>Twitter</h1>
                </div>
                <div className="row">
                  <input name="Twitter" placeholder="Twitter" type="text" />
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <h1>Youtube</h1>
                </div>
                <div className="row">
                  <input name="Youtube" placeholder="Youtube" type="text" />
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
      </div>
    </div>
  );
};
