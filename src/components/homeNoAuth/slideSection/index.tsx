import styles from "./styles.module.scss";
import { CourseType } from "@/src/services/courseService";
import { Button, Container } from "reactstrap";
import SlideComponent from "../../common/slideComponent";
import Link from "next/link";

interface props {
    newestCourses: CourseType[];
}

const SlideSection = function ({ newestCourses }: props) {
    return (<>
    <Container className="d-flex flex-column align-items-center py-5">
        <p className={styles.sectionTitle}>CLASSES NOW AVAILABLE</p>
        <SlideComponent course={newestCourses}/>
        <Link href="/register">
        <Button outline color="light" className={styles.slideSectionBtn}>Sign up to access!</Button>
        </Link>
    </Container>
    </>)
};

export default SlideSection;