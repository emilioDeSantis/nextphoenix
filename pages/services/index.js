import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Bullet from "../components/Bullet";
import BulletPoint from "../components/BulletPoint";
import styles from "./Services.module.css";

export default function Services() {
    return (
         <div className="light-container">
            <h1>HOW TO HIRE PHOENIX</h1>
            <Image
                src="/workers1.png"
                alt="workers1"
                layout="responsive"
                width={2304}
                height={1536}
            />
            <BulletPoint>
                Call us and tell us what you need or fill out the form online.
            </BulletPoint>
            <hr />
            <BulletPoint>
                Schedual a meeting with us to finalize a deal. We will send
                people out to your site as soon as possible.
            </BulletPoint>
            <hr />
            <div className="hstack">
                <Link href="services">
                    <a>Form</a>
                </Link>
                <hr />
                <div>1823-456-7890</div>
            </div>

            <h1>HOW PHOENIX WORKS</h1>
            <Image
                src="/workers1.png"
                alt="workers1"
                layout="responsive"
                width={2304}
                height={1536}
            />
            <h2>Payment</h2>
            <BulletPoint>Our Laborers fill out a time sheet every week.</BulletPoint>
            <BulletPoint>You sign off on the time sheet.</BulletPoint>
            <BulletPoint>Pay Phoenix once per week for all workers.</BulletPoint>
            <BulletPoint>We handle paying our employees.</BulletPoint>
            <hr/>
            <h2>We Manage the Rest</h2>
            <BulletPoint>Personal Interviews</BulletPoint>
            <BulletPoint>Reference Checks</BulletPoint>
            <BulletPoint>OSHA Safety Training</BulletPoint>
            <BulletPoint>All Insurance</BulletPoint>
            <BulletPoint>Workmen’s Comp</BulletPoint>
            <BulletPoint>General Liability</BulletPoint>
            <BulletPoint>Unemployment</BulletPoint>
            <BulletPoint>Payroll</BulletPoint>
            <BulletPoint>Payroll Taxes</BulletPoint>
            <hr/>
         </div>
    );
}
