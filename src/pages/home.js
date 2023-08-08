import React from "react";
import Navbar from "../components/navbar_home";
// import imgRight from "../assets/img/black-and-white-1282260.jpg";
import { Button } from "react-bootstrap";
import { Helmet } from 'react-helmet';

export default function Home() {
  const title = 'Hompage';
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Navbar />
      <section>
        <div className="splitLeft">
          <h2>Welcome, This Is Landing Page!</h2>
          <p>
            Get started for your new journey, this website can bring you to the
            darkness day
          </p>
          <div>
            <Button variant="info" className="button" href="/login">
              Get Started!
            </Button>
            <Button variant="light" className="button">
              Fuck! Just Go Away
            </Button>
          </div>
        </div>
        <div className="splitRight">
          {/* <img src={imgRight} alt="" /> */}
        </div>
      </section>
    </>
  );
}
