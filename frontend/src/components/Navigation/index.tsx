import Link from "next/link";
import Image from "next/image";
import styles from "./navigation.module.css";
import Row from "../std/Row";
import Spacer from "../std/Spacer";
import Container from "../std/Container";

import logo from "./logo.svg";

export default function Navigation() {
    return (
        <div className={styles.header}>
            <Container>
				<Link href="/menu">
					<Row>
						<Image src={logo} height={22} alt="logo"/>
						<h2>Schedule</h2>
					</Row>
				</Link>
            </Container>
        </div>
    );
}
