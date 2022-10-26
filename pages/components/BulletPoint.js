import { Fragment } from "react";
import Bullet from "./Bullet";

export default function BulletPoint({ children }) {
    return (
        <div className="hstack" style={{}}>
            <Bullet />
            <p>{children}</p>
        </div>
    );
}
