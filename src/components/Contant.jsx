import React from "react";

const Contact = () => {
  return (
    <section className="contacts">
      <div className="container">
        <h1 className="contacts-title">Контакти</h1>
        <div className="contacts-block">
          <div className="contacts-content">
            <p className="contacts-text">Instagram: inst/cottage_green</p>
            <p className="contacts-text">Facebook: facebook/cottage_green</p>
            <p className="contacts-text">EMail: cottagegreen@gmail.com</p>
            <p className="contacts-text">
              Location: Яремче, Ивано-Франковская область
            </p>
          </div>
          <div className="contacts-map">
            <iframe
              title="maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.5026683326405!2d24.53894295093312!3d48.42769153878766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcb7bb7d7edda53e6!2zNDjCsDI1JzM5LjciTiAyNMKwMzInMjguMSJF!5e0!3m2!1sru!2sua!4v1661887909802!5m2!1sru!2sua"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
