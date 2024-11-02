import { SyntheticEvent, useState } from "react";
import { AddressIcon } from "../components/icons/Address.Icon";
import { EmailIcon } from "../components/icons/Email.Icon";
import { PhoneIcon } from "../components/icons/Phone.Icon";

export const Contact: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChangeInput = (key: string, value: string) =>
    setInputs((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    fetch("https://www.formbackend.com/f/40d4ddf2b569c0a4", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(inputs),
    })
      .then((response) => {
        if (response.status === 422) {
          throw new Error("Validation error");
        } else if (!response.ok) {
          throw new Error("Something went wrong");
        }

        return response.json();
      })
      .then((data) => {
        setSuccessMessage(data?.submission_text);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
      <div className="container">
        <div className="mi-sectiontitle">
          <h2>Contact Me</h2>
          <span>Contact Me</span>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="mi-contact-formwrapper">
              <h4>Get In Touch</h4>
              {!successMessage && (
                <form
                  className="mi-form mi-contact-form"
                  onSubmit={handleSubmit}>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-name">Enter your name*</label>
                    <input
                      type="text"
                      name="name"
                      id="contact-form-name"
                      value={inputs.name}
                      onChange={(e) => onChangeInput("name", e.target.value)}
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-email">
                      Enter your email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="contact-form-email"
                      value={inputs.email}
                      onChange={(e) => onChangeInput("email", e.target.value)}
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-subject">
                      Enter your subject*
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="contact-form-subject"
                      value={inputs.subject}
                      onChange={(e) => onChangeInput("subject", e.target.value)}
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-message">
                      Enter your Message*
                    </label>
                    <textarea
                      name="message"
                      id="contact-form-message"
                      value={inputs.message}
                      cols={30}
                      rows={6}
                      onChange={(e) => onChangeInput("message", e.target.value)}
                    />
                  </div>
                  <div className="mi-form-field">
                    <button className="mi-button" type="submit">
                      Send Mail
                    </button>
                  </div>
                </form>
              )}
              {successMessage && (
                <div className="successMessage">{successMessage}</div>
              )}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mi-contact-info">
              <div className="mi-contact-infoblock">
                <PhoneIcon />
                <div className="mi-contact-infoblock-content">
                  <h6>Phone</h6>
                  <p>(323) 739 1571</p>
                </div>
              </div>
              <div className="mi-contact-infoblock">
                <EmailIcon />
                <div className="mi-contact-infoblock-content">
                  <h6>Email</h6>
                  <p>
                    <a href="mailto:contact@raffaysajjad.com">
                      contact@raffaysajjad.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="mi-contact-infoblock">
                <AddressIcon />
                <div className="mi-contact-infoblock-content">
                  <h6>Address</h6>
                  <p>312 W 2nd St, Casper, Wyoming, WY 82601, United States</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
