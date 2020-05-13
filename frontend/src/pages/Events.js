import React, { useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

import { useSelector, useDispatch } from "react-redux";
import { getDataEvent } from "../Redux/Actions/HistoryActions";

const Events = () => {
  const eventState = useSelector((state) => state.getEvent.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataEvent());
  }, [dispatch]);
  //   console.log(eventState);
  return (
    <div>
      <div className="countainer-fluid">
        <Jumbotron header="EVENTS" />
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col text-center ">
            <h2>
              <strong className="text-dark">
                Our <span style={{ color: "#F75D08" }}>Events</span>
              </strong>
            </h2>
            <p className="text-dark text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry has been the industry's standard dummy text ever since.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry has been the industry's standard dummy text ever since.
            </p>
          </div>
        </div>
      </div>
      {eventState.map((item) => {
        console.log(item);
        return (
          <div className="container-fluid my-5" key={item.id}>
            <div className="row">
              <div className="col">
                <img
                  src="https://cdn.thelifeyoucansave.org/uploads/2019/11/Screen-Shot-2015-07-13-at-1.53.34-PM.png"
                  alt="img"
                />
              </div>
              <div className="col">
                <h3>
                  <strong>{item.name}</strong>
                </h3>
                <p className="text-dark">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry has been the industry's standard dummy
                  text ever since. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry has been the industry's
                  standard dummy text ever since.
                </p>
                <div className="row">
                  <div className="col-8">
                    <h3>
                      <strong>Biaya Yang Terkumpul :</strong>
                    </h3>
                  </div>
                  <div className="col text-align-right">
                    <h3>
                      <strong>{item.total_donasi}</strong>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default Events;
