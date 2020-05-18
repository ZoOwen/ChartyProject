/** @format */

import React from "react";

import { Button } from "react-bootstrap";

function Section1Home() {
    return (
        <div className="container my-5">
            <div className="row">
                <div
                    data-aos="zoom-in-up"
                    className="col-xs-6 col-lg-6 col-xl-4 pl-0 section-col1"
                >
                    <img
                        width="100%"
                        height="230px"
                        className="section-img"
                        src="https://charity.w3itexperts.com/images/our-services/pic1.jpg"
                        alt="img"
                    />
                    <div className="row section-caption p-3">
                        <div className="col">
                            <h4>
                                <strong>Welcome to Charity Info</strong>
                            </h4>
                            <h6 className="text-white">
                                <strong>
                                    Charity Theme simply dummy text of the
                                    printing
                                </strong>
                            </h6>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry has been the industry's
                                standard dummy text ever since.
                            </p>
                            <Button variant="dark" className=" mr-1">
                                More Info
                            </Button>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="zoom-in-up"
                    className="col-xs-6 col-lg-6 col-xl-8 pl-0 section-col2"
                >
                    <img
                        width="100%"
                        height="230px"
                        className="section-img"
                        src="https://charity.w3itexperts.com/images/our-work/pic3.jpg"
                        alt="img"
                    />
                    <div className="row section-caption p-3">
                        <div className="col">
                            <h3 style={{ color: "#F75D08" }}>
                                <strong>Welcome to Charity Fund</strong>
                            </h3>

                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry has been the industry's
                                standard dummy text ever since the been when an
                                unknown printer. simply dummy text of the
                                printing and typesetting industry has been the
                                industry
                            </p>

                            <Button
                                style={{
                                    backgroundColor: "#F75D08",
                                    border: "none",
                                }}
                                className="mt-4"
                            >
                                Donate Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section1Home;
