import React from "react";
import { Button } from "react-bootstrap";
import { Helmet } from 'react-helmet';
import SweetAlert from "../components/swal";

export default function Home() {
  const title = 'Landing Page';

  const handleExit = () => {
    const swalOpt = {
      message: "See You Next Time",
      type: "question",
      callback: function (confirmed) {
        if (confirmed) {
          window.close()
          window.location.replace('https://google.com');
        }
      }
    }

    SweetAlert(swalOpt);
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
            <Button type="button" onClick={() => handleExit()} variant="light" className="button">
              Go to Google
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
