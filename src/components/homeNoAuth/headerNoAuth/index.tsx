import { Button, Container } from 'reactstrap';
import styles from './styles.module.scss'
import Link from 'next/link';

const HeaderNoAuth = function () {
    return (
        <>
            <div className={styles.ctaSection}>
                <img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta} />
                <p>Sign up to have access to the courses</p>
                <img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta} />
            </div>
            <Container className={styles.nav}>
                <img src="/logoOnebitflix.svg" alt="logoOnebitflix" className={styles.imgLogoNav} />
                <div>
                    <Link href="/login">
                        <Button outline className={styles.navBtn}>Login</Button>
                    </Link>
                    <Link href="/register">
                        <Button outline className={styles.navBtn}>Want to take part</Button>
                    </Link>
                </div>
            </Container>
        </>
    );
}

export default HeaderNoAuth;