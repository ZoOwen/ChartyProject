import React from "react";

import { Card } from "react-bootstrap";
function CardView() {
  return (
    <div class="container-fluid" style={{ marginLeft: "60px" }}>
      <div className="row">
        <div className="col-md-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://cdn.thelifeyoucansave.org/uploads/2019/11/Screen-Shot-2015-07-13-at-1.53.34-PM.png"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>

              <Card.Text style={{ color: "#363636" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <hr />
              <Card.Link href="#">Detail</Card.Link>
              <Card.Link href="#">Delete</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://cdn.thelifeyoucansave.org/uploads/2019/11/Screen-Shot-2015-07-13-at-1.53.34-PM.png"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>

              <Card.Text style={{ color: "#363636" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <hr />
              <Card.Link href="#">Detail</Card.Link>
              <Card.Link href="#">Delete</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://cdn.thelifeyoucansave.org/uploads/2019/11/Screen-Shot-2015-07-13-at-1.53.34-PM.png"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>

              <Card.Text style={{ color: "#363636" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <hr />
              <Card.Link href="#">Detail</Card.Link>
              <Card.Link href="#">Delete</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CardView;
