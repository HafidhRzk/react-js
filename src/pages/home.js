import React from "react";
import { Button } from "react-bootstrap";
import { Helmet } from 'react-helmet';
import SweetAlert from "../components/swal";

export default function Home() {
  const title = 'Hompage';

  const handleFuck = () => {
    SweetAlert();
    window.opener = null;
    window.open("", "_self");
    window.close();
  }

  return (
    <>
      < Helmet >
        <title>{title}</title>
      </Helmet >
      <section>
        <div>
          <h2>Welcome, This Is Landing Page!</h2>
          <p>
            Get started for your new journey, this website can bring you to the
            darkness day
          </p>
          <div>
            <Button variant="info" className="button" href="/login">
              Get Started!
            </Button>
            <Button type="button" onClick={() => handleFuck()} variant="light" className="button">
              Fuck! Just Go Away
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
