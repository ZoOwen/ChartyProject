import React, { useEffect, useState } from "react";

import axios from "axios";
import jwt_decode from "jwt-decode";

function Profile() {
  const [dataUser, setDataUser] = useState({
    items: [],
    isLoaded: false,
    redirectToReferrer: false,
    token: "",
  });

  let user = localStorage.getItem("token");
  // console.log("token user", user);

  var decoded = jwt_decode(user);
  // console.log(decoded);
  var decoded_id = decoded.id;

  useEffect(() => {
    axios
      .get(`https://backend-go-charity.herokuapp.com/users/${decoded_id}`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((res) => {
        console.log(res.data);
        setDataUser({
          items: res.data,
          isLoaded: true,
          redirectToReferrer: false,
        });
      });
  }, []);

  console.log(dataUser.items);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col text-center border cart-event py-5">
            <img
              className="img-profile "
              width="150px"
              alt="img"
              src="https://www.kindpng.com/picc/b/451/4517876.png"
            />
            <h3>
              <strong>Personal Profile</strong>
            </h3>
            <ul>
              <li className="text-dark">Username : {dataUser.items.Name} </li>
              <li className="text-dark">Email : {dataUser.items.Email}</li>
              <li className="text-dark">Addres : {dataUser.items.Address}</li>
              <li className="text-dark">No. Telp : {dataUser.items.Telp}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
