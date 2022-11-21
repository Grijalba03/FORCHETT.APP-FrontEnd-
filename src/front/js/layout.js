import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { SignUp } from "./pages/signup.jsx"; //Este es el componente de la página para registrar usuario
import { Login } from "./pages/login.jsx";
import { Categories } from "./pages/categories.jsx";
import { ListaUsuarios } from "./pages/listaUsuarios.jsx";
import { Person } from "./pages/person.jsx";
import { Favorites } from "./pages/favorites";
import { Vehicle } from "./pages/vehicle.jsx";

import injectContext from "./store/appContext";

import { Header } from "./component/header";
import { Footer } from "./component/footer";
import { MainMenu } from "./component/mainmenu";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Header />
          <MainMenu />
          <Routes>
            <Route element={<Home />} exact path="/" />
            <Route element={<Demo />} exact path="/demo" />
            <Route element={<Single />} exact path="/single/:theid" />
            <Route element={<SignUp />} exact path="/register" />
            <Route element={<Login />} exact path="/login" />
            <Route element={<ListaUsuarios />} exact path="/listaUsuarios" />
            <Route element={<Person />} exact path="/person/:theid" />
             <Route element={<Categories />} path="/categories" />
            <Route element={<Favorites />} exact path="/favorites" />
            <Route element={<Vehicle />} exact path="/vehicle/:theid" />
            <Route element={<h1>Not found!</h1>} />xvsdsgvdfsdd cajcs dchSDcdc kscsd njsd
          </Routes>
          {/* <Footer /> */}
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
