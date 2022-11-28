import Head from "next/head";
import { Fragment } from "react";
import Navbar from "./Navbar";
export default function Layout({ children }) {
    return (
        <Fragment>
            <Head>
                <title>
                    Phoenix
                </title>
            </Head>
            <Navbar />
            {children}
            {/* Footer */}
            {/* You can add more things here  */}
        </Fragment>
    );
}
