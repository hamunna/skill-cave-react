import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("/fakeData.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div id="services" style={{ paddingTop: "50px", marginBottom: "20px" }}>
            <Container>
                <h1 className="my-5 text-center fw-bold text-primary border-bottom pb-4">
                    Our Courses
                </h1>

                <Row xs={1} md={3} className="g-4">
                    {services.map((service) => (
                        <Service key={service.id} service={service}></Service>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Services;
