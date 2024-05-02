import Link from 'next/link';
import styles from './styles.module.scss';
import { Container, Row, Col, Button } from 'reactstrap'

const PresentationSection = function () {
    return (
        <>

            <Container className='py-4'>
                <Row>
                    <Col md className='d-flex flex-column justify-content-center align-items-start'>
                        <p className={styles.subTitle}>UNLIMITED ACCESS</p>
                        <p className={styles.title}>Have access to the best <br /> Coding tutorials.</p>
                        <p className={styles.description}>Study from wherever you are, at any time, and continue <br /> evolving as a Developer</p>
                        <Link href="/register">
                            <Button outline className={styles.btnCta}>
                                ACCESS NOW <img src='/buttonPlay.svg' alt='buttonImg' className={styles.btnImg}></img>
                            </Button>
                        </Link>
                    </Col>
                    <Col md>
                        <img src="/homeNoAuth/imgPresentation.png" alt="imgIndex" className={styles.imgPresentation} />
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center pt-5">
                        <img src="/homeNoAuth/iconArrowDown.svg" alt="arrowDown" className={styles.arrowDown} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PresentationSection;