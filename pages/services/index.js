import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import BulletPoint from "../components/BulletPoint";
import styles from "./Services.module.css";

export default function Services() {
    return (
        <div className="light-container">
            <div className="navbar-spacer" />
            <h1
                style={{
                    marginBottom: "1.2rem",
                }}
            >
                HOW TO HIRE PHOENIX
                {/* How to Hire Phoenix */}
            </h1>
            <div className="info-content-container">
                <div className="info-content-image-container">
                    <Image
                        src="/workers1.png"
                        alt="workers1"
                        layout="responsive"
                        width={2304}
                        height={1536}
                    />
                </div>
                <section className="info-content-sub-container">
                    <BulletPoint>
                        Call us and tell us what you need or fill out the form
                        online.
                    </BulletPoint>
                    <hr
                        style={{
                            borderColor: "black",
                        }}
                    />
                    <BulletPoint>
                        Schedual a meeting with us to finalize a deal. We will
                        send people out to your site as soon as possible.
                    </BulletPoint>
                    <hr
                        style={{
                            borderColor: "black",
                        }}
                    />
                    <div
                        className="hstack"
                        style={{
                            alignItems: "stretch",
                            justifyContent: "space-between",
                            marginBlock: "1rem",
                        }}
                    >
                        <Link href="services">
                            <a
                                className="hstack arrow-button"
                                style={{
                                    gap: "0.6rem",
                                    width: "auto",
                                    color: "white",
                                    paddingInline: "1rem",
                                }}
                            >
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

                                <div className="arrow-button-text">Form</div>
                            </a>
                        </Link>
                        <hr className="vhr" />
                        <div
                            className="hstack"
                            style={{
                                fontSize: "150%",
                                gap: "0.5rem",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                                style={{
                                    height: "1em",
                                }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                />
                            </svg>

                            <div>1823-456-7890</div>
                        </div>
                    </div>
                </section>
            </div>

            <h1
                style={{
                    marginTop: "6rem",
                    marginBottom: "1.2rem",
                }}
            >
                {/* HOW PHOENIX WORKS */}
                How Phoenix Works
            </h1>
            <Image
                src="/workers1.png"
                alt="workers1"
                layout="responsive"
                width={2304}
                height={1536}
            />
            <h2>Payment</h2>
            <ul
                style={{
                    paddingTop: "1rem",
                    paddingBottom: "2rem",
                }}
            >
                <BulletPoint>
                    Our Laborers fill out a time sheet every week.
                </BulletPoint>
                <BulletPoint>You sign off on the time sheet.</BulletPoint>
                <BulletPoint>
                    Pay Phoenix once per week for all workers.
                </BulletPoint>
                <BulletPoint>We handle paying our employees.</BulletPoint>
            </ul>
            <hr
                style={{
                    borderColor: "black",
                }}
            />
            <h2>We Manage the Rest</h2>
            <ul
                style={{
                    paddingTop: "1rem",
                    paddingBottom: "2rem",
                }}
            >
                <BulletPoint>Personal Interviews</BulletPoint>
                <BulletPoint>Reference Checks</BulletPoint>
                <BulletPoint>OSHA Safety Training</BulletPoint>
                <BulletPoint>All Insurance</BulletPoint>
                <BulletPoint>Workmen’s Comp</BulletPoint>
                <BulletPoint>General Liability</BulletPoint>
                <BulletPoint>Unemployment</BulletPoint>
                <BulletPoint>Payroll</BulletPoint>
                <BulletPoint>Payroll Taxes</BulletPoint>
            </ul>
        </div>
    );
}
