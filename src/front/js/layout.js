import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { SignUp } from "./pages/signup.jsx"; //Este es el componente de la página para registrar usuario
import { Login } from "./pages/login.jsx";
import { Categories } from "./pages/categories.jsx";
import { Categoriessingle } from "./pages/categoriesSingle.jsx";
import { ListaUsuarios } from "./pages/listaUsuarios.jsx";
import { Favorites } from "./pages/favorites";
// import { Planet } from "./pages/planet.jsx";
import { UserProfile } from "./pages/userProfile.jsx";

import injectContext from "./store/appContext";

import { Header } from "./component/header";
import { Footer } from "./component/footer";
import { MainMenu } from "./component/mainmenu";
import { RecipesList } from "./component/recipes";
import { Recipesingle } from "./pages/recipeSingle.jsx";
import { UserAccount } from "./pages/userAccount.jsx";

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
            <Route element={<SignUp />} exact path="/signup" />
            <Route element={<Login />} exact path="/login" />
            <Route element={<ListaUsuarios />} exact path="/listaUsuarios" />
            <Route element={<Recipesingle />} exact path="/recipes/:theid" />
            <Route element={<Categories />} path="/categories" />
            <Route
              element={<Categoriessingle />}
              exact
              path="/categories/:theid"
            />
            <Route element={<Favorites />} exact path="/favorites" />
            <Route element={<UserProfile />} path="/user/profile/:username" />
            <Route element={<UserAccount />} path="/user/account" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          {/* <Footer /> */}
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
