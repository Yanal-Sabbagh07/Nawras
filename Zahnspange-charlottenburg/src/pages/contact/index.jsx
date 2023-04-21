import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer";
import "../../styles/pages/contact/Contact.scss";
const Index = () => {
  let navigate = useNavigate();
  const initState = {
    title: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [state, setState] = useState(initState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://45.9.191.215:8800/contact", {
        data: state,
      })
      .then((response) => {
        const title = response.data.title;
        const name = response.data.name;

        navigate("/Message", {
          state: { title: { title }, name: { name } },
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };

  return (
    <section className="ContactContainer">
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="row-container">
            <div className="first">
              <h1 className="contact-header">Kontaktformular:</h1>
            </div>
          </div>
          <div className="row-container">
            <div className="first">
              <label htmlFor="titel">Titel</label>
            </div>
            <div className="secound">
              <select
                name="title"
                id="title"
                className="input-name-opt"
                type="text"
                onChange={handleChange}
                defaultValue="Frau"
              >
                <option value="Frau">Frau</option>
                <option value="Herr">Herr</option>
                <option value="Frau.Dr.">Frau Dr.</option>
                <option value="Herr.Dr.">Herr Dr.</option>
              </select>
            </div>
          </div>
          <div className="row-container">
            <div className="first">
              <label htmlFor="name">Name</label>
            </div>
            <div className="secound">
              <input
                className="input-name"
                type="text"
                name="name"
                id="name"
                placeholder="Ihr Name"
                required
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="row-container">
            <div className="first">
              <label htmlFor="email">Email</label>
            </div>
            <div className="secound">
              <input
                className="input-name"
                type="email"
                name="email"
                id="email"
                placeholder="Ihre Email addresse"
                required
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="row-container">
            <div className="first">
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="secound">
              <input
                className="input-name"
                type="number"
                name="phone"
                id="phone"
                placeholder="Ihre Telefonnummer"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="row-container">
            <div className="first">
              <label htmlFor="request">Nachricht</label>
            </div>
            <div className="secound">
              <textarea
                className="input-name"
                name="message"
                id="message"
                placeholder="Ihre Nachricht"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="row-container">
            <div className="first">
              <label>&nbsp;</label>
            </div>
            <div className="secound">
              <button className="input-name-last" type="submit">
                Senden
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="contact-footer">
        <Footer />
      </div>
    </section>
  );
};

export default Index;
