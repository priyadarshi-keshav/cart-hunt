import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import HeroSection from "./HeroSection"
import WhyChooseUs from "./WhyChooseUs"
import NewArrival from "./NewArrival"
import MostViewed from "./MostViewed"
import ChooseCategory from "./ChooseCategory"
import SubHeader from './SubHeader';


const Home = () => {
    return (
        <Fragment>
            <SubHeader />
            <HeroSection />
            <NewArrival />
            <ChooseCategory />
            <MostViewed />
            <WhyChooseUs />
            <Row>
                <Col className="justify-content-md-center text-center" data-aos="zoom-in" style={{ background: 'beige' }}>
                    <p className="heading">Need help ? Mail Us.</p>
                    <h4><a title="support@carthunt.in" style={{ color: 'black' }} href={`mailto:priyadarshikeshav64@gmail.com`}>priyadarshikeshav64@gmail.com</a></h4>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Home