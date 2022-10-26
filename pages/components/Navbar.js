import { useRouter } from "next/router";
import Link from "next/link";
import { Fragment, useState } from "react";
import { dimension } from "../theme";

const navigationRoutes = ["home", "services", "apply", "contact"];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    return (
        <Fragment>
            <header
                style={{
                    display: "flex",
                    position: "fixed",
                    justifyContent: "space-between",
                    zIndex: 9,
                    background: "black",
                    width: "100vw",
                    alignItems: "center",
                    height: dimension.navHeight,
                }}
            >
                <div
                    style={{
                        marginLeft: dimension.sideMargin,
                    }}
                >
                    Phoenix
                </div>
                <HamburgerButton setOpen={setOpen} />
            </header>
            <nav
                style={{
                    display: open ? "flex" : "none",
                    position: "fixed",
                    top: 0,
                    zIndex: 10,
                    width: "100vw",
                }}
            >
                <button
                    style={{
                        width: "100%",
                    }}
                    onClick={() => {
                        setOpen(false);
                    }}
                ></button>

                <div
                    style={{
                        background: "black",
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <ul
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            height: "100vh",
                            paddingTop: "4rem",
                        }}
                    >
                        {navigationRoutes.map((singleRoute) => {
                            return (
                                <Fragment 
                                key={singleRoute}>
                                    <NavigationLink
                                        setOpen={setOpen}
                                        key={singleRoute}
                                        href={`/${singleRoute}`}
                                        text={singleRoute}
                                        router={router}
                                    />
                                </Fragment>
                            );
                        })}
                    </ul>

                    <button
                        style={{
                            height: dimension.navHeight,
                            paddingInline: dimension.sideMargin,
                            display: "flex",
                            alignItems: "center",
                            background: '#65f',
                            border: 'none'
                        }}
                        onClick={() => {
                            setOpen(false);
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
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </nav>
        </Fragment>
    );
}

function NavigationLink({ href, text, router, setOpen }) {
    const isActive = router.asPath === (href === "/home" ? "/" : href);
    return (
        <Link href={href === "/home" ? "/" : href} passHref>
            <a
                href={href === "/home" ? "/" : href}
                style={{
                    paddingLeft: "3rem",
                    paddingRight: "1rem",
                    paddingBlock: "1rem",
                    opacity: isActive ? "1" : "0.5",
                }}
                onClick={() => {
                    setOpen(false);
                }}
            >
                {text.charAt(0).toUpperCase() + text.slice(1)}
            </a>
        </Link>
    );
}

function HamburgerButton({ setOpen }) {
    return (
        <button
            style={{
                height: dimension.navHeight,
                paddingInline: dimension.sideMargin,
                display: "flex",
                alignItems: "center",
            }}
            onClick={() => {
                setOpen((prevOpen) => !prevOpen);
            }}
        >
            {/* <HamburgerIcon /> */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                style={{
                    height: "2.6rem",
                }}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>
        </button>
    );
}

function HamburgerIcon() {
    return (
        <div
            className="vstack"
            style={{
                gap: "0.4rem",
            }}
        >
            <div
                style={{
                    background: "#fff",
                    height: "0.2rem",
                    width: "2.5rem",
                }}
            ></div>
            <div
                style={{
                    background: "#fff",
                    height: "0.2rem",
                    width: "2.5rem",
                }}
            ></div>
            <div
                style={{
                    background: "#fff",
                    height: "0.2rem",
                    width: "2.5rem",
                }}
            ></div>
        </div>
    );
}
