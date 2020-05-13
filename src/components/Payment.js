import React from "react";

function Payment() {
  var payment = ["DANA", "OVO", "GOPAY", "BCA", "MANDIRI"];
  var picon = [
    "https://cdn.techinasia.com/data/images/8e80279bec7a5f6d0b7097d107426abf.png",
    "https://miro.medium.com/max/512/0*xnW3ZHk2iHaBlTSc",
    "https://lh3.googleusercontent.com/proxy/s-6vWy4eklpBexNAe-aN3yQMg8sc9aEFfJFTnVv7V6elyqpOj4C_dkhwh446Ym52WscyrHkblEr62ty3mEUpQvFY1GxYI1gTTk0UW3P4WgPGCpWLRXAs38b2RnpSHO_G9Dve8env4PkM_TWH-TB-yb2H-m5TnK-xti4I4K4SdJRAuMHUq5Sgj4cdonoM-SrqJUYZVB00BkE07yQWcXs2eDE99g=w1200-h630-p-k-no-nu",
    "https://cdn.iconscout.com/icon/free/png-512/bca-225544.png",
    "https://cdn3.iconfinder.com/data/icons/banks-in-indonesia-logo-badge/100/Mandiri-512.png",
  ];
  return (
    <div>
      <h1 style={{ color: "black" }}>Payment</h1>
      <select className="form-control lg" style={{ color: "black" }}>
        {payment.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default Payment;
