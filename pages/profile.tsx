import Head from "next/head";
import styles from "../styles/profile.module.scss";
import UserForm from "@/src/components/profile/user";
import HeaderAuth from "@/src/components/common/headerAuth";
import { Button, Col, Container, Row } from "reactstrap";
import Footer from "@/src/components/common/footer";

const UserInfo = function () {
  return (
    <>
      <Head>
        <title>Onebitflix - My Data</title>
        <link
          rel="shortcut icon"
          href="/favicon.svg"
          type="image/x-icon"
        ></link>
      </Head>
      <main>
        <div className={styles.header}>
            <HeaderAuth />
        </div>
        <Container className="py-5">
          <p className={styles.title}>My Account</p>
          <Row className="pt-3 pb-5">
            <Col md={4} className={styles.btnColumn}>
              <Button className={styles.renderForm}>PERSONAL DATA</Button>
              <Button className={styles.renderForm}>PASSWORD</Button>
            </Col>
            <Col md>
              <UserForm />
            </Col>
          </Row>
        </Container>
        <div className={styles.footer}>
            <Footer/>
        </div>
      </main>
    </>
  );
};

export default UserInfo;
