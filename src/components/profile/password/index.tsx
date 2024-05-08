import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../../styles/profile.module.scss";
import { FormEvent, useEffect, useState } from "react";
import profileService from "@/src/services/profileService";
import ToastComponent from "../../common/toast";

const PasswordForm = function () {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [color, setColor] = useState("");
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    profileService.fetchCurrent().then((password) => {
      setCurrentPassword(password.currentPassword);
      setNewPassword(password.newPassword);
    });
  }, []);

  const handlePasswordUpdate = async function (
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (newPassword != confirmNewPassword) {
      setToastIsOpen(true);
      setErrorMessage("Password and confirm password doesn't match!");
      setColor("bg-danger");
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);

      return;
    }

    if (currentPassword === newPassword) {
      setToastIsOpen(true);
      setErrorMessage(
        "The new password cannot be the same as the already in use password!"
      );
      setColor("bg-danger");
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);

      return;
    }

    const res = await profileService.passwordUpdate({
      currentPassword,
      newPassword,
    });

    if (res === 204) {
      setToastIsOpen(true);
      setErrorMessage("Password Updated!");
      setColor("bg-success");
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);

      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("")
    }

    if(res===400){
      setToastIsOpen(true);
      setErrorMessage(
        "Password is incorrect!"
      );
      setColor("bg-danger");
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);
    }
  };

  return (
    <>
      <Form onSubmit={handlePasswordUpdate} className={styles.specialForm}>
        <div className={styles.inputNormalDiv}>
          <FormGroup>
            <Label className={styles.label} for="currentPassword">
              PASSWORD
            </Label>
            <Input
              name="currentPassword"
              type="password"
              id="currentPassword"
              placeholder="********"
              required
              maxLength={12}
              value={currentPassword}
              onChange={(event) => {
                setCurrentPassword(event.currentTarget.value);
              }}
              className={styles.input}
            />
          </FormGroup>
        </div>
        <div className={styles.inputFlexDiv}>
          <FormGroup>
            <Label for="newPassword" className={styles.label}>
              NEW PASSWORD
            </Label>
            <Input
              name="newPassword"
              type="password"
              id="newPassword"
              placeholder="********"
              required
              minLength={6}
              maxLength={12}
              value={newPassword}
              onChange={(event) => {
                setNewPassword(event.currentTarget.value);
              }}
              className={styles.inputFlex}
            />
          </FormGroup>
          <FormGroup>
            <Label for="confirmNewPassword" className={styles.label}>
              CONFIRM NEW PASSWORD
            </Label>
            <Input
              name="confirmNewPassword"
              type="password"
              id="confirmNewPassword"
              placeholder="********"
              required
              minLength={6}
              maxLength={12}
              value={confirmNewPassword}
              onChange={(event) => {
                setConfirmNewPassword(event.currentTarget.value);
              }}
              className={styles.inputFlex}
            />
          </FormGroup>
        </div>
        <Button type="submit" className={styles.specialFormBtn} outline>
          Save Changes
        </Button>
      </Form>
      <ToastComponent
        color={color}
        isOpen={toastIsOpen}
        message={errorMessage}
      />
    </>
  );
};

export default PasswordForm;
