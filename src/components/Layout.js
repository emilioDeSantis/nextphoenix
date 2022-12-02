import Head from "next/head";
import { Fragment } from "react";
import Navbar from "./Navbar";
export default function Layout({ children }) {
    return (
        <Fragment>
            <Head>
                <title>
                    Phoenix Construction Resources Inorporated
                </title>

                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
<link rel="manifest" href="/favicon/site.webmanifest"/>
<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
<meta name="msapplication-TileColor" content="#b91d47"/>
            </Head>
            <Navbar />
            {children}
            {/* Footer */}
            {/* You can add more things here  */}
        </Fragment>
    );
}
