import React from 'react'

const Newsletter = () =>  (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">

        <h1 className="headtext__cormorant">Join our team of volunteers</h1>
        <p className="p__opensans">And help us save more animals!</p>
        <p className="p__opensans">Give us your email and we will send you more info</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter your email address" />
        <button type="button" className="custom__button">Subscribe</button>
      </div>
    </div>
  );

export default Newsletter