import React, { useState } from "react";

import { Card, Button } from "react-bootstrap";

const RecentHome = () => {
  const [recent] = useState([
    {
      ID: 1,
      title: "Membantu Sesama Anak Yatim",
      time: "waktu 10.00 pagi - Selesai",
      place: "Panti Asuhan Persada",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's",
      img: "https://charity.w3itexperts.com/images/blog/thum3.jpg",
    },
    {
      ID: 2,
      title: "Yuk Membantu Sesama",
      time: "waktu 10.00 pagi - Selesai",
      place: "Panti Asuhan Persada",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's",
      img: "https://charity.w3itexperts.com/images/blog/thum4.jpg",
    },
    {
      ID: 3,
      title: "Butuh Bantuan Anda!",
      time: "waktu 10.00 pagi - Selesai",
      place: "Panti Asuhan Persada",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's",
      img: "https://charity.w3itexperts.com/images/blog/thum1.jpg",
    },
  ]);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="text-dark">
              <strong>
                Recent <span style={{ color: "#F75D08" }}>Post</span>
              </strong>
            </h3>
            <p className="text-dark">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry has been the industry's standard dummy text ever since.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry has been the industry's standard dummy text ever since.
            </p>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <div className="row ">
          {recent.map((item) => {
            return (
              <div
                data-aos="fade-up"
                className="col d-flex justify-content-center"
                key={item.ID}
              >
                <Card style={{ width: "18rem" }} className="my-4">
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <p className="pt-0" style={{ color: "#F75D08" }}>
                      {item.time}
                    </p>
                    <Card.Text className="text-dark pt-0">
                      {item.description}
                    </Card.Text>
                    <Button
                      style={{ backgroundColor: "#F75D08", border: "none" }}
                    >
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentHome;
