import Image from "next/image";
import Link from "next/link";
import Bullet from "../components/Bullet";
import BulletPoint from "../components/BulletPoint";

export default function Apply() {
    return (
        <div className="light-container">
            <h1>HOW TO JOIN PHOENIX</h1>
            <Image
                src="/workers1.png"
                alt="workers1"
                layout="responsive"
                width={2304}
                height={1536}
            />
            <BulletPoint>
                Call us or you can sumbit an application online
            </BulletPoint>
            <hr />
            <BulletPoint>
                We will have you come into our office to see if you are a good
                fit for our team. Once hired you can begin working right away.
            </BulletPoint>
            <hr />
            <div className="hstack">
                <Link href="services">
                    <a>Apply Online</a>
                </Link>
                <hr />
                <div>1823-456-7890</div>
            </div>
        </div>
    );
}
