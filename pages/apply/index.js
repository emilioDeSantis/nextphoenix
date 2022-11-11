import Image from "next/image";
import Link from "next/link";
import Bullet from "../components/Bullet";
import BulletPoint from "../components/BulletPoint";

export default function Apply() {
    return (
        <div
            className="light-container"
        >
            <div className="navbar-spacer" />
            <h1
                style={{
                    marginBottom: "1.2rem",
                }}
            >
                {/* HOW TO JOIN PHOENIX */}
                How to Join Phoenix
            </h1>
            <Image
                src="/workers1.png"
                alt="workers1"
                layout="responsive"
                width={2304}
                height={1536}
            />
            <section
                style={{
                    marginTop: "0.5rem",
                }}
            >
                <BulletPoint>
                    Call us or you can sumbit an application online.
                </BulletPoint>
                <hr
                    style={{
                        borderColor: "black",
                    }}
                />
                <BulletPoint>
                    We will have you come into our office to see if you are a
                    good fit for our team. Once hired you can begin working
                    right away.
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
                                width: 'auto',
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

                            <div className="arrow-button-text">
                                Apply Online
                            </div>
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
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                            style={{
                                height: "0.8em",
                            }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                            />
                        </svg> */}

                        <div
                            style={{
                                fontSize: "80%",
                            }}
                        >
                            1823-456-7890
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
