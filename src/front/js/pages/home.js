import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
// import { CharactersCard } from "../component/characterscard";
// import { PlanetsCard } from "../component/Planetscard";
// import { SpaceshipsCard } from "../component/Spaceshipcard";

export const Home = () => {
  const { store, actions } = useContext(Context);
  // console.log(store.characters),
  //   console.log(store.planets),
  //   console.log(store.vehicles);

  {
    /* Here are the imported cards----------------------------------------------------------------------------------------------------- */
  }
  return (
    <div className="container">
      <div>
        <h1></h1>
      </div>
      <div className=" d-flex flex-row flex-nowrap overflow-auto pb-5">
        {/* {store.characters.map((element) => {
			return <CharactersCard name={element.name} uid={element.uid} />;
		  })} */}
      </div>

      <div className="container">
        <h1></h1>
        <div className=" d-flex flex-row flex-nowrap overflow-auto pb-5 mb-3">
          {/* {store.planets.map((element) => {
			  return <PlanetsCard name={element.name} uid={element.uid} />;
			})} */}
        </div>

        <div className="container">
          <h1></h1>
          <div className=" d-flex flex-row flex-nowrap overflow-auto pb-5 mb-3">
            {/* {store.vehicles.map((element) => {
				return <SpaceshipsCard name={element.name} uid={element.uid} />;
			  })} */}
          </div>
        </div>
      </div>
    </div>
  );
};
