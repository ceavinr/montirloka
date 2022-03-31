import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SignUpElements";

const SignUp = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/"></Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign Up</FormH1>
              <FormLabel htmlFor="for">Username</FormLabel>
              <FormInput type="username" required></FormInput>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required></FormInput>
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required></FormInput>
              <FormButton type="submit">Next</FormButton>
              <Text>Already have account?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>{" "}
    </>
  );
};

export default SignUp;
