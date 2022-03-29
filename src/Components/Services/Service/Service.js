import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
    const {
        id,
        image,
        name,
        description,
        basicPrice,
        discountPrice,
        ratings,
        rated,
    } = service;
    return (
        <Col>
            <Card id="service-card">
                <Card.Img
                    className="service-img-height"
                    variant="top"
                    src={image}
                />

                <Card.Body className="service-title">
                    <Card.Title>{name}</Card.Title>
                </Card.Body>

                <Card.Body>
                    <Card.Text>{description.slice(0, 80)}...</Card.Text>
                    <span className="bg-warning px-3 py-1">
                        {ratings || 0}/5 &#9733;
                    </span>
                    <span className="mx-2">( {rated || 0} )</span>
                    <h5 className="my-3 fw-bold">
                        Price:{" "}
                        <span className="theme-primary-text fw-bolder">
                            &#2547; {discountPrice}
                        </span>{" "}
                        <span className="text-secondary text-decoration-line-through">
                            {basicPrice}
                        </span>
                    </h5>
                </Card.Body>

                <Button className="btn text-white btn-primary text-center">
                    Purchase Now
                </Button>
            </Card>
        </Col>
    );
};

export default Service;
