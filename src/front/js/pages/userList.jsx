import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const UserList = () => {
  const { store, actions } = useContext(Context);
  // const [userlist, setUserlist] = useState([]);
  const [userlist, setUserlist] = useState(false);
  // const history = useNavigate();

  useEffect(() => {
    async function fetchUserList() {
      let memberList = await actions.fetchGenerico(`/userlist/`);
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
      <h1 className="text-center">User List</h1>
      <div className="d-flex justify-content-evenly">
        {userlist && userlist.length > 0 ? (
          userlist.map((item, index) => {
            return (
              // <div className="circle p-2 rounded-circle" key={index}>
              //   <Link
              //     className="category-name"
              //     to={`/user/profile/${item.username}`}
              //   >
              //     <p className="category-name">{item.username}</p>
              //     <p>frakk</p>
              //   </Link>
              // </div>
              <div key={index} className="card">
                <img src="https://via.placeholder.com/400x200" 
                className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h3 className="card-title">{item.username}</h3>
                  <h5 className="card-title">{item.title}</h5>
                  <h5 className="card-title">{item.dietaryPreferences}</h5>
                  <Link
                  className="category-name"
                  to={`/user/profile/${item.username}`}
                  >
                  Profile
                  </Link>
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
