import Image from "next/image";
import Link from "next/link";
import BulletPointSmall from "./components/BulletPointSmall";
import NumberedList from "./components/NumberedList";

function Home() {
    return (
        <main>
            <div className="navbar-spacer" />
            {/* <div className="landing-page-container"> */}
            <div className="landing-page-image-container">
                <Image
                    src="/denzel.png"
                    alt="phoenix"
                    layout="fill"
                    sizes="100vw"
                    objectFit="cover"
                    objectPosition="right"
                />
                <div className="image-gradient" />
            </div>
            <div className="tagline-container">
                <h1 className="tagline">
                    GENERAL LABOR SUPPLIER
                    {/* General Labor Supplier */}
                </h1>
                <ul className="hstack arrow-buttons-container">
                    <ArrowButton href="services">Hire Phoenix</ArrowButton>
                    <ArrowButton href="apply">Apply Today</ArrowButton>
                </ul>
            </div>
            {/* </div> */}
            <section className="services-preview-container">
                {/* <div className="card vstack"> */}
                    <h2>Phoenix is a Construction Labor Provider</h2>
                    {/* <p
                    style={{
                        marginBottom: "25vw",
                    }}
                >
                    we supply general laborers for sites that need extra man
                    power. Phoenix workers can help fill in the gaps for a
                    project that has a fluctuating need for labor.
                </p> */}
                    <div className="services-bullet-container vstack">
                        <BulletPointSmall>
                            For sites that need extra man power
                            {/* FOR SITES THAT NEED EXTRA MAN POWER */}
                        </BulletPointSmall>
                        <BulletPointSmall>
                            Projects have fluctuating labor needs
                            {/* PROJECTS HAVE FLUCTUATING LABOR NEEDS */}
                        </BulletPointSmall>
                        <BulletPointSmall>
                            Phoenix workers help fill in the gaps
                            {/* PHOENIX WORKERS HELP FILL IN THE GAPS */}
                        </BulletPointSmall>
                    </div>
                {/* </div> */}
                {/* <div className="card vastack"> */}
                    <div className="numbered-list-and-image-container">
                        <h3 className="numbered-list-title">
                            The Phoenix Advantage
                        </h3>
                        <div className="services-preview-image-container">
                            <Image
                                src="/george.png"
                                alt="worker"
                                layout="responsive"
                                width={2048}
                                height={2048}
                            />
                        </div>
                        <div className="numbered-list-and-buttons-container">
                            <NumberedList
                                // title="The Phoenix Advantage"
                                list={[
                                    {
                                        title: "Labor Right Away",
                                        text: "Depending on your needs we can send workers to your site in as little as 1 day.",
                                    },
                                    {
                                        title: "Saftey Training",
                                        text: "You do not have to worry about training. All Phoenix employees take a 10 hour OSHA course.",
                                    },
                                    {
                                        title: "Cost Effective",
                                        text: "We offer high quality competative laborers at an inexpensive rate.",
                                    },
                                    {
                                        title: "Versitle Workers",
                                        text: "Our employees can help clear debris, remove trash, move materials, and even do demolition.",
                                    },
                                ]}
                            />

                            <ul className="hstack arrow-buttons-container">
                                <ArrowButton href="apply">
                                    Hire Phoenix
                                </ArrowButton>
                                {/* <Link href="services">
                                    <a
                                        className="arrow-button hstack"
                                        style={{
                                            background: "none",
                                            color: process.env.color.theme,
                                        }}
                                    >
                                        <div className="arrow-button-text">
                                            Learn more
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
                                </Link> */}
                            </ul>
                        </div>
                    </div>
                {/* </div> */}
            </section>

            <section className="services-preview-container">
                {/* <div className="card vstack"> */}
                    <h2>Looking for a Job?</h2>
                    <div className="services-bullet-container vstack">
                        <BulletPointSmall>
                            Phoenix is always looking for quality tradesmen to
                            add to our team
                        </BulletPointSmall>
                        <BulletPointSmall>
                            Employees are full-time workers and receive
                            competitive pay
                        </BulletPointSmall>
                        <BulletPointSmall>
                            Phoenix has a great benefits package
                        </BulletPointSmall>
                    </div>
                {/* </div> */}
                {/* <div className="card vastack"> */}
                    <div className="numbered-list-and-image-container">
                        <h3 className="numbered-list-title">
                            What we Offer our Employees
                        </h3>
                        <div className="services-preview-image-container">
                            <Image
                                src="/timidface.png"
                                alt="worker"
                                layout="responsive"
                                width={2048}
                                height={2048}
                            />
                        </div>
                        <div className="numbered-list-and-buttons-container">
                            <NumberedList
                                // title="The Phoenix Advantage"
                                list={[
                                    {
                                        title: "Competative Wages",
                                        text: "Phoenix pays well. You can work for us full time and make extra working overtime hours.",
                                    },
                                    {
                                        title: "Benefits Package",
                                        text: "We offer paid hollidays, vacation, health insurence and a 401K retirement plan.",
                                    },
                                    {
                                        title: "Tradesmen Safety",
                                        text: "Safety of our tradesmen is our number one concern.",
                                    },
                                    {
                                        title: "Insurance",
                                        text: "Phoenix carries complete workman’s comp. and general liability coverage at all times.",
                                    },
                                ]}
                            />

                            <ul className="hstack arrow-buttons-container">
                            <ArrowButton href="apply">Apply Today</ArrowButton>
                            <Link href="apply">
                                <a
                                    className="arrow-button hstack"
                                    style={{
                                        background: "none",
                                        color: process.env.color.theme,
                                    }}
                                >
                                    <div className="arrow-button-text">
                                        Learn more
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
                            </ul>
                        </div>
                    </div>
                {/* </div> */}
            </section>
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
            <a href={href} className="hstack arrow-button">
                <div className="arrow-button-text">{children}</div>
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
