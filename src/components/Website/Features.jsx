import React from "react";
import OwlCarousel from 'react-owl-carousel';

const Features = () => {

  const options={
    responsive:{
      0:{
        items:1,
      },
     400:{
        items:1,
      },
      600:{
        items:1,
      },
      700:{
        items:1,
      },
      800:{
        items:2,
      },
      1000:{
        items:3,
      }
    },
    nav:false,
    dots:true
  }









  return (
    <OwlCarousel className="owl-theme section" loop margin={20} {...options}>
      {/* 1 */}
      <div className="review item">
        <h3>24 hour up-time</h3>
        <p>the Api will always be available with zero latency and little</p>
        <div className="review-img">
          <img src="/trust.svg" alt="" />
        </div>
      </div>

      {/* {2} */}
      <div className="review item">
        <h3>Global coverage</h3>
        <p>
          view the latest live exchange rates for all the crypto-currencies
          available worldwide
        </p>
        <div className="review-img">
          <img src="/globe.svg" alt="" />
        </div>
      </div>

        {/* {3} */}
        <div className="review item">
          <h3>Great documentation</h3>
          <p>
            to assist developers, we have curated a world-className document for
            the API
          </p>
          <div className="review-img"></div>
          <img src="/shield.svg" alt="" className="trust" />
        </div>
      
    </OwlCarousel>
  );
};

export default Features;