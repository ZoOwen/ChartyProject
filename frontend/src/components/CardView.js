import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  getDataEvent,
  postDataEvent,
  deleteDataEvent,
} from "../Redux/Actions/HistoryActions";

import { Card } from "react-bootstrap";
function CardView(props) {
  const [mainEvent, setMainEvent] = useState("");
  const getData = props.getDataEvent;

  useEffect(() => {
    getData();
  }, [getData]);
  const handleDelete = (id) => {
    props.deleteDataEvent(id);
  };

  console.log(props);

  return (
    <div>
      <h1>Fetch</h1>

      <div className="container-fluid" style={{ marginLeft: "80px" }}>
        <div className="row">
          {props.mainEvent.map((item, index) => (
            <Card style={{ width: "18rem" }} key={item.id}>
              <Card.Img
                variant="top"
                src="https://cdn.thelifeyoucansave.org/uploads/2019/11/Screen-Shot-2015-07-13-at-1.53.34-PM.png"
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.even_type}
                </Card.Subtitle>

                <Card.Text style={{ color: "#363636" }}>
                  Total donasi yang sudah terkumpul adalah {item.total_donasi}
                </Card.Text>
                <hr />
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  Delete
                </button>

                <button
                  style={{ marginLeft: "100px" }}
                  className="btn btn-success"
                >
                  Detail
                </button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (props) => {
  console.log("state to props", props);
  return {
    mainEvent: props.getEvent.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDataEvent: () => dispatch(getDataEvent()),
    postDataEvent: (objEvent) => dispatch(postDataEvent(objEvent)),
    deleteDataEvent: (id) => dispatch(deleteDataEvent(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardView);
