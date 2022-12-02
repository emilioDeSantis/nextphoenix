import Image from "next/image";
import Link from "next/link";
import BulletPointSmall from "../components/BulletPointSmall";
import Card from "../components/Card";
import NumberedBullet from "../components/NumberedBullet";
import NumberedList from "../components/NumberedList";
import { NextSeo } from "next-seo";

function Home() {
    return (
        <main>
            <NextSeo
                title="Your Title"
                description="This is a demo description"
                canonical="https://www.example.com"
                openGraph={{
                    url: "https://www.example.com",
                    title: "Open Graph Title",
                    description: "Open Graph Description",
                    images: [
                        {
                            url: "https://www.example.com/og-image01.jpg",
                            width: 800,
                            height: 600,
                            alt: "Og Image Alt",
                            type: "image/jpeg",
                        },
                        {
                            url: "https://www.example.com/og-image02.jpg",
                            width: 900,
                            height: 800,
                            alt: "Og Image Alt Second",
                            type: "image/jpeg",
                        },
                        { url: "https://www.example.com/og-image03.jpg" },
                        { url: "https://www.example.com/og-image04.jpg" },
                    ],
                    site_name: "YourSiteName",
                }}
                twitter={{
                    handle: "@handle",
                    site: "@site",
                    cardType: "summary_large_image",
                }}
            />
            <div className="navbar-spacer" />
            <div className="landing-page-image-container">
                <Image
                    src="/denzel.png"
                    alt="phoenix"
                    layout="fill"
                    sizes="100vw"
                    objectFit="cover"
                    objectPosition="right"
                    priority
                />
                <div className="image-gradient" />
            </div>
            <div className="tagline-container">
                <p className="tagline-prefice">{"New England's #1"}</p>
                <h1 className="tagline">GENERAL LABOR SUPPLIER</h1>
                <ul className="hstack arrow-buttons-container">
                    <ArrowButton href="services">Hire Phoenix</ArrowButton>
                    <ArrowButton href="apply">Apply Today</ArrowButton>
                </ul>
            </div>
            <section className="landing-page-content-container">
                <h2>Phoenix is a Construction Labor Provider</h2>
                <div className="cards-container">
                    <Card
                        smallText={"For sites that need"}
                        bigText={"Extra Man Power."}
                        name={"AUXILIARY LABOR"}
                        index={"01"}
                        href={"services"}
                    />
                    <Card
                        smallText={"Projects have a"}
                        bigText={"Fluctuating Need for Labor."}
                        name={"VARYING DEMAND"}
                        index={"02"}
                        href={"services"}
                    />
                    <Card
                        smallText={"Phoenix workers help to"}
                        bigText={"Fill in the gaps."}
                        name={"NEED FULFILLMENT"}
                        index={"03"}
                        href={"services"}
                    />
                </div>
            </section>
            <div className="numbered-list-and-image-container">
                <h3 className="numbered-list-title">The Phoenix Advantage</h3>
                <div className="numbered-list-line"></div>
                <div className="numbered-list-and-image-sub-container">
                    <div className="services-preview-image-container image-container">
                        <Image
                            src="/metal.jpg"
                            alt="worker"
                            layout="fill"
                            objectFit="contain"
                            sizes="100vw"
                        />
                    </div>
                    <div className="numbered-bullets-container vstack">
                        {/* <NumberedBullet
                        title={"Labor Right Away"}
                        text={
                            "Depending on your needs we can send workers to your site in as little as 1 day."
                        }
                        index={"01"}
                    />
                    <NumberedBullet
                        title={"Saftey Training"}
                        text={
                            "You do not have to worry about training. All Phoenix employees take a 10 hour OSHA course."
                        }
                        index={"02"}
                    />
                    <NumberedBullet
                        title={"Cost Effective"}
                        text={
                            "We offer high quality competative laborers at an inexpensive rate."
                        }
                        index={"03"}
                    />
                    <NumberedBullet
                        title={"Versitle Workers"}
                        text={
                            "Our employees can help clear debris, remove trash, move materials, and even do demolition."
                        }
                        index={"04"}
                    /> */}
                        <div className="numbered-list-and-buttons-container">
                            <NumberedList
                                list={[
                                    {
                                        title: "Labor Right Away",
                                        text: "Depending on your needs we can send workers to your site in as little as 1 day.",
                                    },
                                    {
                                        title: "Safety Training",
                                        text: "You do not have to worry about training. All Phoenix employees take a 10 hour OSHA course.",
                                    },
                                    {
                                        title: "Cost Effective",
                                        text: "We offer high quality competitive laborers at an inexpensive rate.",
                                    },
                                    {
                                        title: "Versatile Workers",
                                        text: "Our employees can help clear debris, remove trash, move materials, and even do demolition.",
                                    },
                                ]}
                            />
                        </div>
                        <ArrowButton href="services">Hire Phoenix</ArrowButton>
                    </div>
                </div>
            </div>

            <section className="landing-page-content-container">
                <h2>Looking for a Job?</h2>
                <div className="cards-container">
                    <Card
                        smallText={
                            "Phoenix is always looking for quality tradesmen to"
                        }
                        bigText={"Add to Our Team."}
                        name={"LABOR FORCE"}
                        index={"01"}
                        href={"apply"}
                    />
                    <Card
                        smallText={
                            "Employees are full-time workers and receive"
                        }
                        bigText={"Competitive Pay."}
                        name={"SALARY"}
                        index={"02"}
                        href={"apply"}
                    />
                    <Card
                        smallText={"Phoenix has a great"}
                        bigText={"Benefits Package."}
                        name={"JOB PERKS"}
                        index={"03"}
                        href={"apply"}
                    />
                </div>
            </section>
            <div className="numbered-list-and-image-container">
                <h3 className="numbered-list-title">The Phoenix Advantage</h3>
                <div className="numbered-list-line"></div>
                <div className="numbered-list-and-image-sub-container">
                    <div className="services-preview-image-container image-container">
                        <Image
                            src="/timidface.png"
                            alt="worker"
                            layout="fill"
                            objectFit="contain"
                            sizes="100vw"
                        />
                    </div>
                    <div className="numbered-bullets-container vstack">
                        {/* <NumberedBullet
                        title={"Labor Right Away"}
                        text={
                            "Depending on your needs we can send workers to your site in as little as 1 day."
                        }
                        index={"01"}
                    />
                    <NumberedBullet
                        title={"Saftey Training"}
                        text={
                            "You do not have to worry about training. All Phoenix employees take a 10 hour OSHA course."
                        }
                        index={"02"}
                    />
                    <NumberedBullet
                        title={"Cost Effective"}
                        text={
                            "We offer high quality competative laborers at an inexpensive rate."
                        }
                        index={"03"}
                    />
                    <NumberedBullet
                        title={"Versitle Workers"}
                        text={
                            "Our employees can help clear debris, remove trash, move materials, and even do demolition."
                        }
                        index={"04"}
                    /> */}
                        <div className="numbered-list-and-buttons-container">
                            <NumberedList
                                list={[
                                    {
                                        title: "Competitive Wages",
                                        text: "Phoenix pays well. You can work for us full time and make extra working overtime hours.",
                                    },
                                    {
                                        title: "Benefits Package",
                                        text: "We offer paid holidays, vacation, health insurance and a 401K retirement plan.",
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
                        </div>
                        <ArrowButton href="apply">Apply Today</ArrowButton>
                    </div>
                </div>
            </div>

            <div className="footer-line"></div>
            <section className="footer-container">
                <div className="hstack footer-logo-container">
                    <div className="footer-logo-image-container">
                        <Image
                            src="/logo phoen 3 copy.png"
                            alt="phoenix"
                            layout="fill"
                            objectFit="contain"
                            sizes="100vw"
                        />
                    </div>
                </div>
                <div className="footer-logo-text-container vstack">
                    {/* <div className="header-logo-sub-container">
                    <Image
                        src="/logo phoenix sqare fav.png"
                        alt="phoenix"
                        layout="responsive"
                        width={680}
                        height={680}
                    />
                </div> */}
                    <div className="footer-logo">PHOENIX</div>
                    <div className="footer-logo-subtitle">
                        Construction Resources Inc.&nbsp;
                    </div>
                </div>
                <section className="hstack footer-links-container">
                    <nav className="vstack footer-info-container">
                        <h3 className="footer-header">INFORMATION</h3>
                        <Link href="services">
                            <a className="footer-text">HOW TO HIRE PHOENIX</a>
                        </Link>
                        <Link href="services">
                            <a className="footer-text">HOW PHOENIX WORKS</a>
                        </Link>
                        <Link href="apply">
                            <a className="footer-text">HOW TO JOIN PHOENIX</a>
                        </Link>
                    </nav>
                    <nav className="vstack footer-forms-container">
                        <h3 className="footer-header">FORMS</h3>
                        <Link href="services">
                            <a className="footer-text">HIRE PHOENIX</a>
                        </Link>
                        <Link href="apply">
                            <a className="footer-text">APPLY ONLINE</a>
                        </Link>
                    </nav>
                </section>
                <section className="hstack footer-phone-container">
                    <h3 className="footer-header">PHONE</h3>
                    <p className="footer-text">1-800-261-2858</p>
                </section>
                <section className="hstack footer-contact-container">
                    <section className="section">
                        <h3 className="footer-header">EMAIL</h3>
                        <p className="footer-text">info@phoenixcr.net</p>
                    </section>
                    <section className="section">
                        <h3 className="footer-header">HOURS</h3>
                        <p className="footer-text">MON-FRI 8AM-6PM</p>
                    </section>
                </section>
                <div className="footer-adress">
                    165 Washington Street, Suite A, Winchester, MA 01890
                </div>
                <div className="footer-adress footer-copyright">
                    Ⓒ PHOENIX CONSTRUCTION RESOURCES INCORPORATED 2022.
                </div>
            </section>
        </main>
    );
}

function ArrowButton({ children, href }) {
    return (
        <Link href={href} passHref>
            <a href={href} className="hstack arrow-button">
                <div className="arrow-button-text">{children}</div>
                <div className="arrow-button-svg-container">
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
            </a>
        </Link>
    );
}

export default Home;
