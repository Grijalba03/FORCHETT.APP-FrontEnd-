import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/recipes.css";

export const UserList = () => {
  const { store, actions } = useContext(Context);
  // const [userlist, setUserlist] = useState([]);
  const [userlist, setUserlist] = useState(false);
  // const history = useNavigate();

  useEffect(() => {
    async function fetchUserList() {
      let memberList = await actions.fetchGenerico(`/userlist`);
      if (memberList.status == 200) {
        memberList = await memberList.json();
        setUserlist(memberList);
        //store.userlist = memberList;
        console.log("frak", memberList);
      } else {
        memberList = await memberList.json();
        console.log("frok", memberList);
      }
    }
    fetchUserList();
  }, []);

  return (
    <div className="container">
      {/* {console.log('heyy', memberList)} */}
      <h1 className="text-center tipo my-5">Users List</h1>
      <div className="d-flex justify-content-evenly">
        {userlist && userlist.length > 0 ? (
          userlist.map((item, index) => {
            return (
              <div key={index} className="card card-background">
                <div className="containingimage">
                  {" "}
                  <img
                    src={item.image}
                    className="card-img-top card-img-top rounded"
                    alt="..."
                  />
                </div>
                <div className="card-body card-background">
                  <div className="card-body">
                    <h3 className="card-title">{item.username}</h3>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{item.dietaryPreferences}</h5>
                    {/* <Link
                      className="" to={`/userprofile`}>
                      Profile
                      </Link> */}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h1 className="text-center">No users available</h1>
        )}
      </div>
    </div>
  );
};
