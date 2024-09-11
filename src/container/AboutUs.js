import React, {Fragment} from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import SubHeader from './SubHeader';

const AboutUs = () => {

    const display = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }

    return (
        <Fragment>
            <SubHeader/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Col className="justify-content-md-center text-center" data-aos="fade-up" style={{ padding: '20px' }} data-aos-delay="400" >
                {/* <center><p className='heading'>About CartHunt</p></center> */}
                <Row style={display}>
                    <Col md={9} data-aos="zoom-in" data-aos-delay="400">
                        <p className='heading'>How we started ?</p>
                        <p>Hey everyone,
                        Our journey began with a simple idea during a time of change. Inspired by a passion for innovation and customer satisfaction, we saw an opportunity to create something meaningful. With a small team and big dreams, we started our e-commerce platform to offer high-quality products at affordable prices. </p>
                    </Col>
                    {/* <Col md={6}>
                    <Image width={500} src='/photos/Scrunchies.png' alt="scrunchies" data-aos="zoom-out" data-aos-delay="400" />
                </Col> */}
                </Row >

                <Row style={display}>
                    <Col md={6}>
                        <Image style={{ width: '100%' }} src='/photos/ourServices.png' alt="scrunchies" data-aos="zoom-out" data-aos-delay="400" />
                    </Col>
                    <Col md={9} data-aos="fade-up">
                        <p className='heading'>About CartHunt</p>
                        <p>We are a customer-centric company, focused on bringing the best shopping experience to you. Our diverse product range is carefully curated to meet your daily needs. From clothing to electronics, we provide trusted brands and exceptional service. We believe in simplicity, quality, and reliability, ensuring every purchase feels seamless.</p>
                    </Col>
                </Row >

                <Row>
                    <Col className="justify-content-md-center text-center" data-aos="zoom-in" style={{ background: 'beige' }}>
                        <p className="heading">Need help ? Mail Us.</p>
                        <h4><a style={{ color: 'black' }} href={`mailto:priyadarshikeshav64@gmail.com`}>priyadarshikeshav64@gmail.com</a></h4>
                    </Col>
                </Row>
            </Col>
        </Fragment>

    )
}

export default AboutUs
