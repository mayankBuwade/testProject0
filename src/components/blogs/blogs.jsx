import React from "react";
import headImg from "../../images/marketingGuyUsingLaptop.png";
import heartIcon from "../../images/heartIcon.png";
import msgIcon from "../../images/msgIcon.png";
import "./blogs.css";

const Blogs = () => {
  return (
    <div className="blog">
      <div className="blog-section">
        <h1 className="blog-section-h1">Blogs</h1>
        <img
          className="blog-section-img"
          src={headImg}
          alt="marketingGuyUsingLaptop"
        />
        <p className="blog-section-para">
          To absolve you from this problem Kalpataru offers you Internet Share
          Trading through which you can trade and transact on your P.C.
          (Personal Computer) from anywhere like Office, Car Bus, Train, Plane
          or even from your living room. Not only this you can also trade in
          share Commodity Derivative, Currency Derivative. You can avail so many
          services and conveniences offered by Kalpataru.
        </p>
        <div className="blog-section-div1">
          <img
            className="blog-section-div1-img"
            src={heartIcon}
            alt="heart_Icon"
          />
          <img
            className="blog-section-div1-img"
            src={msgIcon}
            alt="message_Icon"
          />
        </div>
        <div className="blog-section-reply-section">
          <h1 className="blog-section-reply-h1">Leave a Reply</h1>
          <input className="blog-section-reply-section-input" />
          <button className="blog-section-reply-section-btn">Post</button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
