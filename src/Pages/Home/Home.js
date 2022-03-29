import React from "react";
import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Services from "../../Components/Services/Services/Services";

const Home = () => {
    return (
        <>
            <Header />
			<Banner />
			<Services />
			<About />

			<Newsletter />

			<Footer />
        </>
    );
};

export default Home;
