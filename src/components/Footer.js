import React from "react";
import styled from "styled-components";
import { FaFacebook, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        {/* footer section  */}

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>ABOUT US</h3>
              <p>
                Rubixe™ is a global technology company specializing in
                disruptive technologies-Artificial intelligence (AI), Machine
                Learning. Robotic Process Automation (RPA), BlockChain and
                Internet of Things (IoT). Rubixe mission to enable businesses to
                leverage the full potential of disruptive technologies to stay
                competitive in the market..
              </p>
            </div>

            {/* 2nd column */}
            <div className="footer-subscribe">
              <h3>MENUS</h3>
              <p>HOME</p>
              <p>Services</p>
              <p>Products</p>
              <p>Career</p>
            </div>

            {/* 3rs column  */}
            <div className="footer-social">
              <h3>ADDRESS</h3>
              <p>Novel Tech Park, !st Floor, Hosur Rd,</p>
              <p>Kudlu gate, Bengaluru, Karnataka</p>
              <p>560068</p>
              <p>Phone: 0044-55668899</p>
              <p>Email: hi@rubixe.com</p>
            </div>

            {/* 4th column  */}
            <div className="footer-contact">
              <h3>LEARN MORE</h3>
              <p>About</p>
              <p>Contact Us</p>
              <br />
              <br />
              <h3>SOCIAL MEDIA</h3>
              <div className="footer-social--icons">
                <div>
                  <FaFacebook className="icons" />
                </div>
                <div>
                  <FaLinkedinIn className="icons" />
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/@rubixeaicompany5457"
                    target="_blank"
                  >
                    <FaYoutube className="icons" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* bottom section  */}
          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column">
              <p>@Amit_Das. All Rights Reserved</p>
              <div>
                <p>RUBIXE | 2017-{new Date().getFullYear()}</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  footer {
    padding: 5rem 0 1rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-bottom--section {
      padding-top: 5rem;
      hr {
        margin-bottom: 0;
        color: ${({ theme }) => theme.colors.hr};
        height: 0;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }
    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;
