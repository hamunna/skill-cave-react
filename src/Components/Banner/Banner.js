import React from "react";
import { Button, Container } from "react-bootstrap";

const Banner = () => {
    return (
        <div id="hero-section">
            <div className="hero-bg-overlay">
                <Container>
                    <div className="hero-content text-white">
                        <h1 className=" text-uppercase">
                            Learn Tech Skills
                        </h1>

                        <p className="w-50 d-block mx-auto my-5">
                            A wonderful serenity has taken possession of my
                            entire soul, like these sweet mornings of spring
                            which I enjoy with my whole heart. I am alone, and
                            feel the charm of existence in this spot, which was.
                        </p>

                        <Button>Get Started</Button>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Banner;
