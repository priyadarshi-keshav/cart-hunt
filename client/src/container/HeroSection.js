import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'
import '../assets/css/heroSection.css'
import { HashLink } from "react-router-hash-link"

const HeroSection = () => {

    return (
        <div className='banner' data-aos="zoom-in">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/photos/herobackground.jpg"
                        alt="Discover Our Most Viewed Products"
                        data-aos="zoom-in"
                    />
                    <div className="bannerChild" data-aos="fade-up">
                        <h2>Discover Our Most Viewed Products</h2>
                        <HashLink to="#mostViewed">
                            <button className="shopNow_btn">
                                View Now
                            </button>
                        </HashLink>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/photos/herobackground2.jpg"
                        // src="https://gracious-e-commerce-s3-bucket.s3.ap-south-1.amazonaws.com/b1e7c5519ff69b62781dc148f3916028"
                        alt="Shop by Category – Find Exactly What You Need!"
                        data-aos="zoom-in"
                    />
                    <div className="bannerChild" data-aos="fade-up">
                        <h2>Shop by Category – Find Exactly What You Need!</h2>
                        <HashLink to="#shop_by_category">
                            <button className="shopNow_btn">
                                Discover Category
                            </button>
                        </HashLink>

                        {/* <Link to="/products/60fc5cd6276e192f4721f92e"><button className="shopNow_btn">
                            Shop Now
                        </button></Link> */}
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/photos/allproducts.jpg"
                        alt="Explore Our Full Collection – Browse All Products!"
                        data-aos="zoom-in"
                    />
                    <div className="bannerChild" data-aos="fade-up">
                        <h2>Explore Our Full Collection – Browse All Products!</h2>
                        <Link to="/all_products"><button className="shopNow_btn">
                            Explore Now
                        </button></Link>
                    </div>

                </Carousel.Item>


            </Carousel>
            {/* <img src="/photos/herobackground.jpg" alt="hero section"/>
            <div className="bannerChild" data-aos="fade-up">
                <h2>Shop handcrafted Scrunchies</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nostrum nulla voluptate dolor culpa animi praesentium exercitationem nisi veniam blanditiis corrupti molestias qui quod molestiae enim earum, iure eos quam neque! Ipsa, quidem non? Voluptate minima quae architecto quisquam totam nihil quidem repellat corporis possimus consequatur quasi asperiores, dolor voluptatibus?
                </p>
                <Link to="/all_products"><button className="shopNow_btn">
                    Shop Now
                </button></Link>
            </div> */}

        </div>
    )
}

export default HeroSection
