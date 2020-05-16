import React from "react";

function Profile() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col text-center border cart-event py-5">
            <img
              className="img-profile "
              width="150px"
              src="https://www.kindpng.com/picc/b/451/4517876.png"
            />
            <h3>
              <strong>Personal Profile</strong>
            </h3>
            <ul>
              <li className="text-dark">Username :</li>
              <li className="text-dark">Email :</li>
              <li className="text-dark">Addres :</li>
              <li className="text-dark">No. Telp :</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
