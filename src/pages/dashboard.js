import React from "react";
import Navbar from "../components/navbar_home";
import { Helmet } from 'react-helmet';

export default function Home() {
    const title = 'Dashboard';
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Navbar />
            <section>
                <h1>
                    Ini Halaman Dashboard Setelah Login!
                </h1>
            </section>
        </>
    );
}
