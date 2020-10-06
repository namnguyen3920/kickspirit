/*eslint-disable*/
import React, { useEffect } from "react";


function Footer() {

    useEffect (() => {

    }, []);

  return (
  <footer id="footer-page">
    <div classNameName="container">
      <div classNameName="row centered">
        <div classNameName="col-sm-4">
          <div classNameName="item_footer">
            <div classNameName="item_title">Service & Support</div>
            <p>kickspirit@gmail.com</p>
            <p>+84 999999999</p>
            <p><a href="https://g.page/greenacademyGIT?share">Location</a></p>
          </div>
        </div>
        <div classNameName="col-sm-4">
          <div classNameName="item_footer">
            <div classNameName="item_title">Info</div>
            <p><a href="contact.html">Contact with us</a></p>
            <p><a href="#">Delivery & Exchange</a></p>
          </div>
        </div>
        <div classNameName="col-sm-4">
          <div classNameName="item_footer">
            <div classNameName="item_title">Follow Us</div>
            <a href="#"><i classNameName="fa fa-facebook"></i></a>
            <a href="#"><i classNameName="fa fa-instagram"></i></a>
            <a href="#"><i classNameName="fa fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}
export default Footer;