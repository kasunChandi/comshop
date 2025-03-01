import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">

                {/*Column 1*/}
                <div className="col-md-3 col-sm-6">
                <ul className="list-unstyled">
                    <h4>Laptop</h4>
                    <li>Business Laptos</li>
                    <li>Gamming Laptos</li>
                    
                </ul>
                </div>

                {/*Column 2*/}
                <div className="col-md-3 col-sm-6">
                <ul className="list-unstyled">
                    <h4>Desktop</h4>
                    <li>Noraml Desktops</li>
                    <li>Gamming Desktops</li>
                    
                </ul>
                </div>

                {/*Column 3*/}
                <div className="col-md-3 col-sm-6">
                <ul className="list-unstyled">
                    <h4>Accessories</h4>
                    <li>Desktop Accessories</li>
                    <li>Laptop Accessories</li>
                    
                </ul>
                </div>

                {/*Column 4*/}
                <div className="col-md-3 col-sm-6">
                <ul className="list-unstyled">
                    <h4>Contact Us</h4>
                    <li>011-22334455</li>
                    <li>011-55669988</li>
                   
                </ul>
                </div>


            </div>
            {/*Footer Bottom*/}
            {//kasunChandi...
            }
            <div className="footer-bottom">
              <p className="text-xs-center">
                &copy;{new Date().getFullYear()}KasunCahndi -All Rights Reserved
              </p>
            </div>



          </div>
        </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background-color:#3a4040;
    padding-top: 3rem;
    color:#fff;
  }
  .footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
`;