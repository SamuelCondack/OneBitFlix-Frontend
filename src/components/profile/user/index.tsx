import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../../styles/profile.module.scss";

const UserForm = function () {
  return (
    <>
      <Form className={styles.form}>
        <div className={styles.formName}>
          <p className={styles.nameAbbreviation}>NT</p>
          <p className={styles.userName}>NAME TEST</p>
        </div>
        <div className={styles.memberTime}>
          <img
            className={styles.memberTimeImg}
            src="/profile/iconUserAccount.svg"
            alt="iconProfile"
          />
          <p className={styles.memberTime}>
            Member since <br /> April 20, 2020
          </p>
        </div>
        <hr />
        <div className={styles.inputFlexDiv}>
          <FormGroup>
            <Label className={styles.label}  for="firstName">NAME</Label>
            <Input
              name="firstName"
              type="text"
              id="firstName"
              placeholder="What's your first name?"
              required
              maxLength={20}
              className={styles.inputFlex}
              value={"Name"}
            />
          </FormGroup>
          <FormGroup>
            <Label className={styles.label}  for="lastName">LAST NAME</Label>
            <Input
              name="lastName"
              type="text"
              id="lastName"
              placeholder="What's your last name?"
              required
              maxLength={20}
              className={styles.inputFlex}
              value={"Test"}
            />
          </FormGroup>
        </div>
        <div className={styles.inputNormalDiv}>
          <FormGroup>
            <Label className={styles.label}   for="phone">WHATSAPP / TELEGRAM</Label>
            <Input
              name="phone"
              type="tel"
              id="phone"
              placeholder="(xx) 9xxxxx-xxxx"
              required
              className={styles.input}
              value={"+55 (21) 99999-9999"}
            />
          </FormGroup>
          <FormGroup>
            <Label className={styles.label} for="email">EMAIL</Label>
            <Input
            name="email"
            type="email"
            id="email"
            placeholder="Insert your email"
            required
            className={styles.input}
            value={"testeemail@gmail.com"}
            />
        </FormGroup>

        <Button className={styles.formBtn} outline type="submit">
            Save Changes
        </Button>
        </div>
      </Form>
    </>
  );
};

export default UserForm;
