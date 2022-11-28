import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import BulletPoint from "../components/BulletPoint";
import BulletPointSmall from "../components/BulletPointSmall";
import styles from "./Services.module.css";

export default function Services() {
    return (
        <div className="light-container">
            <div className="navbar-spacer" />
            <h1 className="services-header">
                HOW TO <span className="theme-color">HIRE</span> PHOENIX
                {/* How to Hire Phoenix */}
            </h1>
            <div className="info-content-container">
                <div className="info-content-image-container image-container">
                    <Image
                        src="/dirt.png"
                        alt="workers1"
                        layout="responsive"
                        width={1983}
                        height={1983}
                    />
                </div>
                <div className="info-content-sub-container vstack">
                    <h2>Contact Us</h2>
                    <BulletPointSmall>
                        Call us and tell us what you need or fill out the form
                        online.
                    </BulletPointSmall>
                    <BulletPointSmall>
                        Schedule a meeting with us to finalize a deal.
                    </BulletPointSmall>
                    <BulletPointSmall>
                        We will send people out to your site as soon as
                        possible.
                    </BulletPointSmall>
                    <div className="hstack servics-contact-container">
                        {/* <Link href="services">
                        <a className="hstack arrow-button form-button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                                style={{
                                    height: "2rem",
                                }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                                />
                            </svg>

                            <div className="arrow-button-text">Hire Us</div>
                        </a> 
                    </Link>*/}
                        <div className="hstack phone-container">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 phone-icon"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                />
                            </svg>

                            <div className="phone-number">1-800-261-2858</div>
                        </div>

                        <div className="hstack card-footer-arrow-container">
                            <p className="card-footer-index card-footer-text">
                                HIRE US
                            </p>
                            <div className="arrow-spacer"></div>
                            <div className="double-arrow-svg-container">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                    style={{
                                        width: "100%",
                                        aspectRatio: 1,
                                    }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="services-header">HOW PHOENIX WORKS</h1>

            <div className="info-content-container">
                <div className="info-content-image-container image-container">
                    <Image
                        src="/feet.png"
                        alt="workers1"
                        layout="responsive"
                        width={4096}
                        height={2731}
                    />
                </div>
                <div className="info-content-sub-container vstack">
                    <h2>Payment</h2>
                    <ul className="services-bullet-container">
                        <BulletPointSmall>
                            Our Laborers fill out a timesheet every week.
                        </BulletPointSmall>
                        <BulletPointSmall>
                            You sign off on the timesheet.
                        </BulletPointSmall>
                        <BulletPointSmall>
                            Pay Phoenix once per week for all workers.
                        </BulletPointSmall>
                        <BulletPointSmall>
                            We handle paying our employees.
                        </BulletPointSmall>
                    </ul>
                </div>

                <div className="info-content-sub-container vstack">
                    <h2>We Manage the Rest</h2>
                    <ul className="services-bullet-container">
                        <BulletPointSmall>Personal Interviews</BulletPointSmall>
                        <BulletPointSmall>Reference Checks</BulletPointSmall>
                        <BulletPointSmall>
                            OSHA Safety Training
                        </BulletPointSmall>
                        <BulletPointSmall>All Insurance</BulletPointSmall>
                        <BulletPointSmall>{"Workman's Comp"}</BulletPointSmall>
                        <BulletPointSmall>General Liability</BulletPointSmall>
                        <BulletPointSmall>Unemployment</BulletPointSmall>
                        <BulletPointSmall>Payroll</BulletPointSmall>
                        <BulletPointSmall>Payroll Taxes</BulletPointSmall>
                    </ul>
                </div>
            </div>
        </div>
    );
}
