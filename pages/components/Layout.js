import { Fragment } from "react";
import Navbar from "./Navbar";
export default function Layout({ children }) {
    return (
        <Fragment>
            <Navbar />
            {children}
            {/* Footer */}
            {/* You can add more things here  */}
        </Fragment>
    );
}
