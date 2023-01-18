import React from "react";
import Style from "./Contact.css";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 3rem 0 1rem 0;
    .container {
      margin-top: 6rem;
      text-align: center;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <div className="contact-box">
      {/* <div className="left-box"></div> */}
      <Wrapper>
        <h2 className="common-heading">Feel Free to Contact us</h2>

        <div className="container">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/xgedgjkr"
              method="POST"
              className="contact-inputs"
            >
              <input
                type="text"
                name="username"
                placeholder="username"
                autoComplete="off"
                required
              />

              <input
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
              />

              <textarea
                name="message"
                cols="30"
                rows="1"
                autoComplete="off"
                required
              ></textarea>

              <input className="btn-mid" type="submit" value="Register" />
            </form>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Contact;
