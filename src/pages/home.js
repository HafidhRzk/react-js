import React from "react";
import { Button } from "react-bootstrap";
import { Helmet } from 'react-helmet';
import SweetAlert from "../components/swal";

export default function Home() {
  const title = 'Landing Page';

  const handleFuck = () => {
    const swalOpt = {
      message: "Just Fucking Go, Shut Down Your PC And Fuck Your Mother!",
      type: "question",
      loc: "https://img.freepik.com/free-vector/fuck-you-symbol-comic-style_23-2148684350.jpg?w=740&t=st=1692007402~exp=1692008002~hmac=2f6ebf713dc98f4ab872f9cbae30ae46ef38b3057c337053944e203976a3c68c",
      callback: function (confirmed) {
        if (confirmed) {
          window.close()
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
            <Button type="button" onClick={() => handleFuck()} variant="light" className="button">
              Fuck! Just Go Away
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
