import React from "react";
import "./Footercss.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer1">
        <div className="bar1">
          <a className="logo" href="https://www.fitmeals.co.in/">
            <img
              src="//www.fitmeals.co.in/wp-content/uploads/2019/06/logo-white.png"
              alt="Fitmeals"
            />
          </a>
          <p className="p1tag">
            The Fitmeals culinary team consists of very passionate and skilled
            chefs. Our team is well versed in nutrition and all our menus and
            plans are designed by qualified nutrition experts.
          </p>
          <a href="https://twitter.com/fitmealsindia">
            <img
              className="twitter"
              src="https://images.squarespace-cdn.com/content/v1/5686cce2841abad8235a3273/1473124686889-QFRRFCFT8QX43PA8ACRM/tw_icon01.png?format=100w"
              alt=""
            />
          </a>
          <a href="https://www.facebook.com/fitmealsindia/?fref=ts">
            <img
              className="facebook"
              src="https://images.squarespace-cdn.com/content/v1/5686cce2841abad8235a3273/1451970637326-39RNLJ1AWT7KH2JPXGQF/fb_icon01.png?format=100w"
              alt=""
            />
          </a>
          <a href="https://www.facebook.com/fitmealsindia/?fref=ts">
            <img
              className="facebook"
              src="https://images.squarespace-cdn.com/content/v1/5686cce2841abad8235a3273/1473168259770-H1RG9ETF339RZPNUFGPF/image-asset.png?format=100w"
              alt=""
            />
          </a>
        </div>

        <div className="bar2">
          <h3 className="h3tag1">Explore</h3>
          <div className="explore">
            <h3 className="h3tag2">></h3>
            <a href="https://www.fitmeals.co.in/">Home</a>
          </div>
          <div className="explore1">
            <h3 className="h3tag2">></h3>
            <a href="https://www.fitmeals.co.in/product-category/meal-plans/">
              Meal Plans
            </a>
          </div>
        </div>

        <div className="bar3">
          <h3 className="h3tag3">Links</h3>
          <div className="link1">
            <h3 className="h3tag4">></h3>
            <a href="https://www.fitmeals.co.in/about-us/">About Us</a>
          </div>
          <div className="link2">
            <h3 className="h3tag4">></h3>
            <a href="https://www.fitmeals.co.in/blog/">Blog</a>
          </div>
          <div className="link3">
            <h3 className="h3tag4">></h3>
            <a href="https://www.fitmeals.co.in/faq/">FAQ</a>
          </div>
          <div className="link4">
            <h3 className="h3tag4">></h3>
            <a href="https://www.fitmeals.co.in/testimonials/">Testimonials</a>
          </div>
        </div>

        <div className="bar4">
          <h3 className="h3tag3">Contact</h3>

          <div className="contact">
            <img
              className="contactus"
              src="https://grandeprairie-winnipeg.swagelok.com/-/media/Distributor-Media/C-G/Grandeprairie-Winnipeg/Corporate-iconography/Phone_FilledCircle_Green369.ashx?h=250&w=250&la=en&hash=3BEDE7CDE4D43B89E5269CCAE0C8A0DFE4BF366C"
              alt=""
            />
            <h4>Call us:</h4>
          </div>
          <p id="no">9100347480</p>
          <p id="no">9963697412</p>

          <div className="mail">
            <img
              className="mailus"
              src="https://grandes-ecoles.studyrama.com/sites/all/themes/sge/images/logo-share/email2-icon.svg"
              alt=""
            />
            <h4>Email us:</h4>
          </div>
          <a className="email" href="https://www.fitmeals.co.in/blog/#">
            fitmealsindia@gmail.com
          </a>

          <div className="location">
            <img
              className="locationpng"
              src="https://pbs.twimg.com/profile_images/678435401573400577/dS_9zDsu_400x400.png"
              alt=""
            />
            <h4>Our Location</h4>
          </div>
          <p id="add">
            Banjara Hills, Road no.5, <br /> Hyderabad{" "}
          </p>
        </div>
      </div>

      <div className="copyright">
        <h4 id="bottomtag">
          Copyright © 2021. <a href="https://www.fitmeals.co.in/">FitMeals</a>.
          All Rights Reserved.
        </h4>
      </div>
    </div>
  );
};
export default Footer;
