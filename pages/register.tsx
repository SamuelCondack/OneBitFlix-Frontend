import HeaderGeneric from "@/src/components/common/headerGeneric";
import styles from "../styles/registerLogin.module.scss";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import Head from "next/head";
import Footer from "@/src/components/common/footer";

const Register = function () {
  return (
    <>
      <Head>
        <title>Onebitflix - Register</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <script src="https://jsuites.net/v4/jsuites.js"></script>
      </Head>
      <main className={styles.main}>
        <HeaderGeneric logoUrl="/" btnUrl="/login" btnContent="Want to login" />
        <Container className="py-5">
          <p className={styles.formTitle}>Welcome to OneBitFlix!</p>
          <Form className={styles.form}>
            <p className="text-center">
              <strong>Create your account!</strong>
            </p>
            <FormGroup>
              <Label for="firstName" className={styles.label}>
                NAME
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="What's your name?"
                required
                maxLength={20}
                className={styles.inputName}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="lastName" className={styles.label}>
                LAST NAME
              </Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="What's your last name?"
                required
                maxLength={20}
                className={styles.inputName}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="phone" className={styles.label}>
                WHATSAPP / TELEGRAM
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(xx) 9xxxx-xxxx"
                data-mask="[-]+55 (00) 00000-0000"
                required
                className={styles.input}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="email" className={styles.label}>
                E-MAIL
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Insert your e-mail"
                required
                maxLength={20}
                className={styles.input}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="birth" className={styles.label}>
                BIRTH DATE
              </Label>
              <Input
                id="birth"
                name="birth"
                type="date"
                min="1930-01-01"
                max="2022-12-31"
                required
                className={styles.input}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="password" className={styles.label}>
                PASSWORD
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Insert your password (Min: 6)"
                required
                minLength={6}
                className={styles.input}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="password" className={styles.label}>
                CONFIRM PASSWORD
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Confirm your password"
                required
                minLength={6}
                className={styles.input}
              ></Input>
            </FormGroup>
            <Button type="submit" outline className={styles.formBtn}>
              SIGN UP
            </Button>
          </Form>
        </Container>
        <Footer />
      </main>
    </>
  );
};

export default Register;
