import { Container } from 'reactstrap'
import styles from './styles.module.scss'

const CardsSection = () => {
    return (<>
        <p className={styles.sectionTitle}>YOU WILL HAVE ACCESS TO</p>
        <Container className='d-flex flex-wrap justify-content-center gap-4 pb-5'>
            <div className={styles.card1}>
                <p className={styles.cardTitle}>FRONT-END</p>
                <p className={styles.cardDescription}>Onebitflix is the place for you to evolve. To do this, you will have access to advanced programming lessons, software updated technologies and all the technical support necessary to be a senior in programming.</p>
            </div>
            <div className={styles.card2}>
                <p className={styles.cardTitle}>BACK-END</p>
                <p className={styles.cardDescription}>Onebitflix is the place for you to evolve. To do this, you will have access to advanced programming lessons, software updated technologies and all the technical support necessary to be a senior in programming.</p>
            </div>
            <div className={styles.card3}>
                <p className={styles.cardTitle}>MOBILE</p>
                <p className={styles.cardDescription}>Onebitflix is the place for you to evolve. To do this, you will have access to advanced programming lessons, software updated technologies and all the technical support necessary to be a senior in programming.</p>
            </div>
            <div className={styles.card4}>
                <p className={styles.cardTitle}>GIT & GITHUB</p>
                <p className={styles.cardDescription}>Onebitflix is the place for you to evolve. To do this, you will have access to advanced programming lessons, software updated technologies and all the technical support necessary to be a senior in programming.</p>
            </div>
            <div className={styles.card5}>
                <p className={styles.cardTitle}>PROJECTS</p>
                <p className={styles.cardDescription}>Onebitflix is the place for you to evolve. To do this, you will have access to advanced programming lessons, software updated technologies and all the technical support necessary to be a senior in programming.</p>
            </div>
            <div className={styles.card6}>
                <p className={styles.cardTitle}>CAREER</p>
                <p className={styles.cardDescription}>Onebitflix is the place for you to evolve. To do this, you will have access to advanced programming lessons, software updated technologies and all the technical support necessary to be a senior in programming.</p>
            </div>
        </Container>
    </>)
}

export default CardsSection