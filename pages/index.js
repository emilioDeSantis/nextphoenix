import Image from "next/image";
import Link from "next/link";
import NumberedList from "./components/NumberedList";
import { color, dimension } from "./theme";

function Home() {
    return (
        <main>
            <div
                style={{
                    height: dimension.navHeight,
                }}
            />
            <div
                style={{
                    position: "absolute",
                    zIndex: -1,
                    width: "100vw",
                }}
            >
                <Image
                    src="/phoenixflying.png"
                    alt="phoenix"
                    layout="responsive"
                    width={1271}
                    height={2022}
                />
            </div>
            <h1
                style={{
                    marginTop: "86vw",
                    marginInline: dimension.sideMargin,
                }}
            >
                GENERAL LABOR SUPPLIER
            </h1>
            <ul
                className="hstack"
                style={{
                    justifyContent: "space-between",
                    gap: "0.4rem",
                    paddingInline: dimension.sideMargin,
                    marginTop: '2rem',
                }}
            >
                <ArrowButton href="services">Hire Phoenix</ArrowButton>
                <ArrowButton href="apply">Apply Today</ArrowButton>
            </ul>
            <h2>Phoenix is a Construction Labor Provider</h2>
            <p>
                we supply general laborers for sites that need extra man power.
                Phoenix workers can help fill in the gaps for a project that has
                a fluctuating need for labor.
            </p>
            <Image
                src="/worker1.png"
                alt="worker"
                layout="responsive"
                width={2048}
                height={2048}
            />
            <NumberedList
                title="The Phoenix Advantage"
                list={[
                    {
                        title: "Labor Right Away",
                        text: "Depending on your needs we can send workers to your site in as little as 1 day.",
                    },
                    {
                        title: "Labor Right Away",
                        text: "Depending on your needs we can send workers to your site in as little as 1 day.",
                    },
                    {
                        title: "Labor Right Away",
                        text: "Depending on your needs we can send workers to your site in as little as 1 day.",
                    },
                    {
                        title: "Labor Right Away",
                        text: "Depending on your needs we can send workers to your site in as little as 1 day.",
                    },
                ]}
            />
            <ul>
                <ArrowButton href="services">Hire Phoenix</ArrowButton>
                <Link href="services">
                    <a>Learn More</a>
                </Link>
            </ul>

            <h2>Looking for a Job?</h2>
            <p>
                Phoenix is always looking for quality tradesmen to add to our
                team. Our employees are full-time workers and receive
                competitive pay as well as a great benefits package.
            </p>
            <Image
                src="/worker1.png"
                alt="worker"
                layout="responsive"
                width={2048}
                height={2048}
            />
            <NumberedList
                title="What we Offer our Employees"
                list={[
                    {
                        title: "Competative Wages",
                        text: "Phoenix pays well. You can work for us full time and make extra working overtime hours.",
                    },
                    {
                        title: "Competative Wages",
                        text: "Phoenix pays well. You can work for us full time and make extra working overtime hours.",
                    },
                    {
                        title: "Competative Wages",
                        text: "Phoenix pays well. You can work for us full time and make extra working overtime hours.",
                    },
                    {
                        title: "Competative Wages",
                        text: "Phoenix pays well. You can work for us full time and make extra working overtime hours.",
                    },
                ]}
            />
            <ul>
                <ArrowButton href="apply">Apply Today</ArrowButton>
                <Link href="apply">
                    <a>Learn More</a>
                </Link>
            </ul>
            <div>Phoenix</div>
            <section>
                <nav>
                    <h3>INFORMATION</h3>
                    <Link href="services">
                        <a>HOW TO HIRE PHOENIX</a>
                    </Link>
                    <Link href="services">
                        <a>HOW PHOENIX WORKS</a>
                    </Link>
                    <Link href="apply">
                        <a>HOW TO JOIN PHOENIX</a>
                    </Link>
                </nav>
                <nav>
                    <h3>FORMS</h3>
                    <Link href="services">
                        <a>HIRE PHOENIX</a>
                    </Link>
                    <Link href="apply">
                        <a>APPLY ONLINE</a>
                    </Link>
                </nav>
            </section>
            <section className="container">
                <section className="section">
                    <h3>PHONE</h3>
                    <p>1234-567-8900</p>
                </section>
                <section className="section">
                    <h3>EMAIL</h3>
                    <p>pheonix@gmail.com</p>
                </section>
                <section className="section">
                    <h3>HOURS</h3>
                    <p>MON-FRI 8AM-6PM</p>
                </section>
                <style jsx>{`
                    .container {
                        display: flex;
                        flex-direction: row;
                    }
                    .section {
                    }
                `}</style>
            </section>
            <div>165 Washington Street, Suite A, Winchester, MA 01890</div>
            <div>C PHOENIX CONSTRUCTION RECOURCES INCORPERATED 2022.</div>
        </main>
    );
}

function ArrowButton({ children, href }) {
    return (
        <Link href={href} passHref>
            <a
                href={href}
                className="hstack"
                style={{
                    background: color.theme,
                    width: "100%",
                    justifyContent: "center",
                    gap: "0.6rem",
                    paddingBlock: "0.6rem",
                    borderRadius: dimension.borderRadius,
                }}
            >
                <div
                    style={{
                        fontWeight: "700",
                        fontSize: "100%",
                    }}
                >
                    {children}
                </div>
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
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                </svg>
            </a>
        </Link>
    );
}

export default Home;
